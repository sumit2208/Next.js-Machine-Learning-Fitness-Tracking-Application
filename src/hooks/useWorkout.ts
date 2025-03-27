import { useState, useEffect } from 'react';
import { firestore } from '../lib/firebase/config';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useAuth } from './useAuth';
import { Workout } from '../types/Workout';

export const useWorkout = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const fetchWorkouts = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const q = query(
        collection(firestore, 'workouts'), 
        where('userId', '==', user.uid)
      );
      const querySnapshot = await getDocs(q);
      const fetchedWorkouts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Workout));
      setWorkouts(fetchedWorkouts);
    } catch (error) {
      console.error('Error fetching workouts', error);
    } finally {
      setLoading(false);
    }
  };

  const addWorkout = async (workout: Omit<Workout, 'id'>) => {
    if (!user) throw new Error('User not authenticated');

    setLoading(true);
    try {
      const docRef = await addDoc(collection(firestore, 'workouts'), {
        ...workout,
        userId: user.uid,
        createdAt: new Date()
      });
      
      const newWorkout = { 
        id: docRef.id, 
        ...workout,
        userId: user.uid,
        createdAt: new Date()
      };
      
      setWorkouts(prev => [...prev, newWorkout]);
      return newWorkout;
    } catch (error) {
      console.error('Error adding workout', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteWorkout = async (workoutId: string) => {
    if (!user) throw new Error('User not authenticated');

    setLoading(true);
    try {
      await deleteDoc(doc(firestore, 'workouts', workoutId));
      setWorkouts(prev => prev.filter(workout => workout.id !== workoutId));
    } catch (error) {
      console.error('Error deleting workout', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchWorkouts();
    }
  }, [user]);

  return {
    workouts,
    loading,
    fetchWorkouts,
    addWorkout,
    deleteWorkout
  };
};