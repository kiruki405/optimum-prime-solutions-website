import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { load, save, type SiteData, defaultData } from '../data/siteData';
import { fbGet, fbSet, fbSubscribe } from '../firebase/config';
import { signInAnonymously, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA2T8PddUwaJHiaMNJ3XvwMDBFJ4CaohHE",
  authDomain: "optimum-website-1a60b.firebaseapp.com",
  databaseURL: "https://optimum-website-1a60b-default-rtdb.firebaseio.com",
  projectId: "optimum-website-1a60b",
  storageBucket: "optimum-website-1a60b.appspot.com",
  messagingSenderId: "472845820373",
  appId: "1:472845820373:web:a1b2c3d4e5f6g7h8i9j0"
};

try {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  signInAnonymously(auth).catch(() => {});
} catch (e) {
  console.log('Firebase not configured yet');
}

interface Ctx { data: SiteData; update: (d: SiteData) => void; synced: boolean }
const C = createContext<Ctx | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(() => load());
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    const syncData = async () => {
      try {
        const fbData = await fbGet('siteData');
        if (fbData) {
          const merged = { ...defaultData, ...fbData, leads: fbData.leads || [] };
          setData(merged);
          save(merged);
        } else {
          const localData = load();
          await fbSet('siteData', localData);
        }
        setSynced(true);

        unsubscribe = fbSubscribe('siteData', (fbData) => {
          if (fbData) {
            const merged = { ...defaultData, ...fbData, leads: fbData.leads || [] };
            setData(merged);
            save(merged);
          }
        });
      } catch (error) {
        console.log('Firebase sync failed, using local storage');
        setSynced(true);
      }
    };

    syncData();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const update = useCallback((d: SiteData) => {
    setData(d);
    save(d);
    fbSet('siteData', d).catch(() => {});
  }, []);

  return <C.Provider value={{ data, update, synced }}>{children}</C.Provider>;
}

export function useSite() {
  const c = useContext(C);
  if (!c) throw new Error('wrap in SiteProvider');
  return c;
}
