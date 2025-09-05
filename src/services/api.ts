import axios from 'axios';
import type { User, Post, CreateUserData, CreatePostData } from '../types';
import { sampleUsers, samplePosts } from '../data/sampleData';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // 5 second timeout
});

// Helper function to check if API is available
const isApiAvailable = async (): Promise<boolean> => {
  try {
    await api.get('/users');
    return true;
  } catch (error) {
    console.warn('JSONPlaceholder API not available, using sample data');
    return false;
  }
};

// Helper function to simulate API delay
const simulateDelay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

// User API functions
export const userApi = {
  getAll: async (): Promise<User[]> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.get('/users');
      return response.data;
    } else {
      await simulateDelay();
      return [...sampleUsers];
    }
  },

  getById: async (id: number): Promise<User> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } else {
      await simulateDelay();
      const user = sampleUsers.find(u => u.id === id);
      if (!user) throw new Error('User not found');
      return user;
    }
  },

  create: async (userData: CreateUserData): Promise<User> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.post('/users', userData);
      return response.data;
    } else {
      await simulateDelay();
      const newUser: User = {
        id: Math.max(...sampleUsers.map(u => u.id)) + 1,
        ...userData
      };
      sampleUsers.push(newUser);
      return newUser;
    }
  },

  update: async (id: number, userData: Partial<CreateUserData>): Promise<User> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.put(`/users/${id}`, userData);
      return response.data;
    } else {
      await simulateDelay();
      const userIndex = sampleUsers.findIndex(u => u.id === id);
      if (userIndex === -1) throw new Error('User not found');
      sampleUsers[userIndex] = { ...sampleUsers[userIndex], ...userData };
      return sampleUsers[userIndex];
    }
  },

  delete: async (id: number): Promise<void> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      await api.delete(`/users/${id}`);
    } else {
      await simulateDelay();
      const userIndex = sampleUsers.findIndex(u => u.id === id);
      if (userIndex !== -1) {
        sampleUsers.splice(userIndex, 1);
      }
    }
  },
};

// Post API functions
export const postApi = {
  getAll: async (): Promise<Post[]> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.get('/posts');
      return response.data;
    } else {
      await simulateDelay();
      return [...samplePosts];
    }
  },

  getById: async (id: number): Promise<Post> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    } else {
      await simulateDelay();
      const post = samplePosts.find(p => p.id === id);
      if (!post) throw new Error('Post not found');
      return post;
    }
  },

  getByUserId: async (userId: number): Promise<Post[]> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.get(`/posts?userId=${userId}`);
      return response.data;
    } else {
      await simulateDelay();
      return samplePosts.filter(p => p.userId === userId);
    }
  },

  create: async (postData: CreatePostData): Promise<Post> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.post('/posts', postData);
      return response.data;
    } else {
      await simulateDelay();
      const newPost: Post = {
        id: Math.max(...samplePosts.map(p => p.id)) + 1,
        ...postData
      };
      samplePosts.push(newPost);
      return newPost;
    }
  },

  update: async (id: number, postData: Partial<CreatePostData>): Promise<Post> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      const response = await api.put(`/posts/${id}`, postData);
      return response.data;
    } else {
      await simulateDelay();
      const postIndex = samplePosts.findIndex(p => p.id === id);
      if (postIndex === -1) throw new Error('Post not found');
      samplePosts[postIndex] = { ...samplePosts[postIndex], ...postData };
      return samplePosts[postIndex];
    }
  },

  delete: async (id: number): Promise<void> => {
    const apiAvailable = await isApiAvailable();
    if (apiAvailable) {
      await api.delete(`/posts/${id}`);
    } else {
      await simulateDelay();
      const postIndex = samplePosts.findIndex(p => p.id === id);
      if (postIndex !== -1) {
        samplePosts.splice(postIndex, 1);
      }
    }
  },
};
