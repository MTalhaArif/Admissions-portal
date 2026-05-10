import { collection, doc, setDoc, getDoc, query, getDocs } from 'firebase/firestore';
import { db, isConfigured } from '../config';

const USERS_COLLECTION = 'users';

export const createUserProfile = async (uid, userData) => {
  if (!isConfigured) return { success: true };
  try {
    const userRef = doc(db, USERS_COLLECTION, uid);
    await setDoc(userRef, {
      ...userData,
      createdAt: new Date().toISOString(),
      role: userData.role || 'user'
    });
    return { success: true };
  } catch (error) {
    console.error('Error creating user profile:', error);
    return { success: false, error };
  }
};

export const getUserProfile = async (uid) => {
  if (!isConfigured) return { success: false, error: 'Firebase not configured' };
  try {
    const userRef = doc(db, USERS_COLLECTION, uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return { success: true, data: userSnap.data() };
    }
    return { success: false, error: 'User not found' };
  } catch (error) {
    console.error('Error getting user profile:', error);
    return { success: false, error };
  }
};

export const getAllUsers = async () => {
  if (!isConfigured) return { success: false, error: 'Firebase not configured' };
  try {
    const q = query(collection(db, USERS_COLLECTION));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return { success: true, data: users };
  } catch (error) {
    console.error('Error fetching all users:', error);
    return { success: false, error };
  }
};
