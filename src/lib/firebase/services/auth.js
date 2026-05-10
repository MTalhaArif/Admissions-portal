import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, isConfigured } from '../config';

export const loginUser = async (email, password) => {
  if (!isConfigured) {
    console.warn("Mock login successful. Firebase not configured.");
    return { success: true, user: { uid: 'mock_uid', email } };
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: error.message };
  }
};

export const logoutUser = async () => {
  if (!isConfigured) return { success: true };
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: error.message };
  }
};
