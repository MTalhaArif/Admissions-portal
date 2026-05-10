import { collection, addDoc, getDocs, query, doc, updateDoc } from 'firebase/firestore';
import { db, isConfigured } from '../config';

const PROGRAMS_COLLECTION = 'programs';

export const createProgram = async (programData) => {
  if (!isConfigured) return { success: true, id: 'mock_program_id' };
  try {
    const docRef = await addDoc(collection(db, PROGRAMS_COLLECTION), {
      ...programData,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating program:', error);
    return { success: false, error };
  }
};

export const getAllPrograms = async () => {
  if (!isConfigured) return { success: false, error: 'Firebase not configured' };
  try {
    const q = query(collection(db, PROGRAMS_COLLECTION));
    const querySnapshot = await getDocs(q);
    const programs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return { success: true, data: programs };
  } catch (error) {
    console.error('Error fetching programs:', error);
    return { success: false, error };
  }
};

export const updateProgram = async (programId, updateData) => {
  if (!isConfigured) return { success: true };
  try {
    const programRef = doc(db, PROGRAMS_COLLECTION, programId);
    await updateDoc(programRef, {
      ...updateData,
      updatedAt: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating program:', error);
    return { success: false, error };
  }
};
