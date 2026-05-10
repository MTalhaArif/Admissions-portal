import { collection, addDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { db, isConfigured } from '../config';

const APPS_COLLECTION = 'applications';

export const createApplication = async (userId, applicationData) => {
  if (!isConfigured) return { success: true, id: 'mock_app_id' };
  try {
    const docRef = await addDoc(collection(db, APPS_COLLECTION), {
      userId,
      ...applicationData,
      status: 'In Review',
      submittedAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating application:', error);
    return { success: false, error };
  }
};

export const getUserApplications = async (userId) => {
  if (!isConfigured) return { success: false, error: 'Firebase not configured' };
  try {
    const q = query(collection(db, APPS_COLLECTION), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const applications = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return { success: true, data: applications };
  } catch (error) {
    console.error('Error fetching user applications:', error);
    return { success: false, error };
  }
};

export const updateApplicationStatus = async (appId, newStatus) => {
  if (!isConfigured) return { success: true };
  try {
    const appRef = doc(db, APPS_COLLECTION, appId);
    await updateDoc(appRef, {
      status: newStatus,
      updatedAt: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating application status:', error);
    return { success: false, error };
  }
};
