import { Cliente } from "../models/clients";

const API_URL = 'http://localhost:5000/api/cliente';

export const getClients = async (): Promise<Cliente[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error fetching clients');
    }
    const client: Cliente[] = await response.json();
    return client;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

export const getClientById = async (id: string): Promise<Cliente> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching client with id ${id}`);
    }
    const client: Cliente = await response.json();
    return client;
  } catch (error) {
    console.error(`Error fetching client with id ${id}:`, error);
    throw error;
  }
};

export const createClient = async (clientData: Omit<Cliente, "id">) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      throw new Error('Error creating client');
    }
    const client: Cliente = await response.json();
    return client;
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};

export const updateClient = async (id: string, clientData: Cliente) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      throw new Error(`Error updating client with id ${id}`);
    }
    const client: Cliente = await response.json();
    return client;
  } catch (error) {
    console.error(`Error updating client with id ${id}:`, error);
    throw error;
  }
};

export const deleteClient = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error deleting client with id ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting client with id ${id}:`, error);
    throw error;
  }
};