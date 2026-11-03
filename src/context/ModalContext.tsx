import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isBookDemoOpen: boolean;
  isGetStartedOpen: boolean;
  isCookieSettingsOpen: boolean;
  openBookDemo: (presetModule?: string) => void;
  closeBookDemo: () => void;
  openGetStarted: (presetModule?: string) => void;
  closeGetStarted: () => void;
  openCookieSettings: () => void;
  closeCookieSettings: () => void;
  selectedModule: string | null;
  currentRoute: string;
  navigateTo: (route: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Initialize route from window.location.pathname or default to '/'
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync with browser back/forward buttons
  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openBookDemo = (presetModule?: string) => {
    if (presetModule) setSelectedModule(presetModule);
    setIsBookDemoOpen(true);
  };

  const closeBookDemo = () => {
    setIsBookDemoOpen(false);
    setSelectedModule(null);
  };

  const openGetStarted = (presetModule?: string) => {
    if (presetModule) setSelectedModule(presetModule);
    setIsGetStartedOpen(true);
  };

  const closeGetStarted = () => {
    setIsGetStartedOpen(false);
    setSelectedModule(null);
  };

  const openCookieSettings = () => {
    setIsCookieSettingsOpen(true);
  };

  const closeCookieSettings = () => {
    setIsCookieSettingsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isBookDemoOpen,
        isGetStartedOpen,
        isCookieSettingsOpen,
        openBookDemo,
        closeBookDemo,
        openGetStarted,
        closeGetStarted,
        openCookieSettings,
        closeCookieSettings,
        selectedModule,
        currentRoute,
        navigateTo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
