import axios from 'axios';
import type { User, Post, CreateUserData, CreatePostData } from '../types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User API functions
export const userApi = {
  getAll: async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data;
  },

  getById: async (id: number): Promise<User> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  create: async (userData: CreateUserData): Promise<User> => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  update: async (id: number, userData: Partial<CreateUserData>): Promise<User> => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};

// Post API functions
export const postApi = {
  getAll: async (): Promise<Post[]> => {
    const response = await api.get('/posts');
    return response.data;
  },

  getById: async (id: number): Promise<Post> => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  getByUserId: async (userId: number): Promise<Post[]> => {
    const response = await api.get(`/posts?userId=${userId}`);
    return response.data;
  },

  create: async (postData: CreatePostData): Promise<Post> => {
    const response = await api.post('/posts', postData);
    return response.data;
  },

  update: async (id: number, postData: Partial<CreatePostData>): Promise<Post> => {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/posts/${id}`);
  },
};
