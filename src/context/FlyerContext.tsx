import React, { createContext, useContext, useState, useEffect } from 'react';

interface FlyerContextType {
  flyerImage: string;
  isCustomLoaded: boolean;
  loadFlyerFromFile: (file: File) => Promise<void>;
  resetToDefault: () => void;
}

const DEFAULT_FLYER = '/src/assets/images/fede_poster_exact_1791784836372.jpg';
const DEFAULT_AVATAR = '/src/assets/images/fede_avatar_real_1791784825903.jpg';

const FlyerContext = createContext<FlyerContextType>({
  flyerImage: DEFAULT_FLYER,
  isCustomLoaded: false,
  loadFlyerFromFile: async () => {},
  resetToDefault: () => {},
});

export const FlyerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [flyerImage, setFlyerImage] = useState<string>(DEFAULT_FLYER);
  const [isCustomLoaded, setIsCustomLoaded] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check if public/fede_flyer_original.jpg is accessible
    const checkServerFile = async () => {
      try {
        const res = await fetch('/fede_flyer_original.jpg', { method: 'HEAD' });
        if (res.ok) {
          setFlyerImage('/fede_flyer_original.jpg');
          setIsCustomLoaded(true);
          return;
        }
      } catch {
        // Fallback to local storage
      }

      // 2. Check localStorage
      const cached = localStorage.getItem('fede_user_flyer');
      if (cached && cached.startsWith('data:image')) {
        setFlyerImage(cached);
        setIsCustomLoaded(true);
      }
    };

    checkServerFile();
  }, []);

  const loadFlyerFromFile = async (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const result = e.target?.result as string;
        if (result) {
          setFlyerImage(result);
          setIsCustomLoaded(true);
          try {
            localStorage.setItem('fede_user_flyer', result);
          } catch {
            // Ignore quota issues
          }

          // Also try saving to server endpoint
          try {
            await fetch('/api/upload-flyer', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ image: result }),
            });
          } catch {
            // Server save is optional enhancement
          }

          resolve();
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetToDefault = () => {
    localStorage.removeItem('fede_user_flyer');
    setFlyerImage(DEFAULT_FLYER);
    setIsCustomLoaded(false);
  };

  return (
    <FlyerContext.Provider
      value={{
        flyerImage,
        isCustomLoaded,
        loadFlyerFromFile,
        resetToDefault,
      }}
    >
      {children}
    </FlyerContext.Provider>
  );
};

export const useFlyer = () => useContext(FlyerContext);
