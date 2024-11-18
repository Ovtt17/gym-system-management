import { Membresia } from "../models/membresia";

const API_URL = 'http://localhost:5000/api/membresia';

export const getMembresias = async (): Promise<Membresia[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error fetching membresias');
    }
    const membresias: Membresia[] = await response.json();
    return membresias;
  } catch (error) {
    console.error('Error fetching membresias:', error);
    throw error;
  }
};