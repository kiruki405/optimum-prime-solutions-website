import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, onValue, off } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA2T8PddUwaJHiaMNJ3XvwMDBFJ4CaohHE",
  authDomain: "optimum-website-1a60b.firebaseapp.com",
  databaseURL: "https://optimum-website-1a60b-default-rtdb.firebaseio.com",
  projectId: "optimum-website-1a60b",
  storageBucket: "optimum-website-1a60b.appspot.com",
  messagingSenderId: "472845820373",
  appId: "1:472845820373:web:a1b2c3d4e5f6g7h8i9j0"
};

let database: any = null;

try {
  const app = initializeApp(firebaseConfig);
  database = getDatabase(app);
} catch (error) {
  console.log('Firebase initialization deferred - config needed');
}

export const fbRef = (path: string) => {
  if (!database) throw new Error('Firebase not initialized');
  return ref(database, path);
};

export const fbGet = async (path: string) => {
  try {
    if (!database) return null;
    const snapshot = await get(fbRef(path));
    return snapshot.val();
  } catch (error) {
    console.error('Firebase get error:', error);
    return null;
  }
};

export const fbSet = async (path: string, data: any) => {
  try {
    if (!database) return;
    await set(fbRef(path), data);
    console.log('Firebase data saved:', path);
  } catch (error) {
    console.error('Firebase set error:', error);
  }
};

export const fbSubscribe = (path: string, callback: (data: any) => void) => {
  try {
    if (!database) return () => {};
    const dataRef = fbRef(path);
    onValue(dataRef, (snapshot) => {
      callback(snapshot.val());
    });
    return () => off(dataRef);
  } catch (error) {
    console.error('Firebase subscribe error:', error);
    return () => {};
  }
};
