import React, { useState, useEffect } from 'react';
import type { User, CreateUserData } from '../types';
import { userApi } from '../services/api';
import { Plus, Edit, Trash2, Save, X, Users, ArrowLeft, Home, FileText } from 'lucide-react';
import './UserList.css';

interface UserListProps {
  onNavigate: (page: 'home' | 'users' | 'posts') => void;
}

const UserList: React.FC<UserListProps> = ({ onNavigate }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<CreateUserData>({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await userApi.getAll();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    try {
      const newUser = await userApi.create(formData);
      setUsers([...users, newUser]);
      setIsCreating(false);
      setFormData({ name: '', username: '', email: '' });
    } catch (err) {
      setError('Failed to create user');
      console.error('Error creating user:', err);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      const updatedUser = await userApi.update(id, formData);
      setUsers(users.map(user => user.id === id ? updatedUser : user));
      setEditingId(null);
      setFormData({ name: '', username: '', email: '' });
    } catch (err) {
      setError('Failed to update user');
      console.error('Error updating user:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await userApi.delete(id);
        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        setError('Failed to delete user');
        console.error('Error deleting user:', err);
      }
    }
  };

  const startEdit = (user: User) => {
    setEditingId(user.id);
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsCreating(false);
    setFormData({ name: '', username: '', email: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <div className="user-list">
        <div className="loading">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="user-list">
      <header className="header">
        <div className="header-content">
          <button className="nav-back-button" onClick={() => onNavigate('home')}>
            <ArrowLeft size={20} />
          </button>
          <Users className="header-icon" />
          <h1>Phase 1</h1>
          <nav className="nav">
            <button
              className="nav-button"
              onClick={() => onNavigate('home')}
            >
              <Home size={20} />
              Home
            </button>
            <button
              className="nav-button active"
              onClick={() => onNavigate('users')}
            >
              <Users size={20} />
              Users
            </button>
            <button
              className="nav-button"
              onClick={() => onNavigate('posts')}
            >
              <FileText size={20} />
              Posts
            </button>
          </nav>
          <button
            className="add-button"
            onClick={() => setIsCreating(true)}
            disabled={isCreating || editingId !== null}
          >
            <Plus size={20} />
            Add User
          </button>
        </div>
      </header>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      <div className="content">
        {isCreating && (
          <div className="form-card">
            <h3>Create New User</h3>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </div>
            <div className="form-actions">
              <button className="save-button" onClick={handleCreate}>
                <Save size={16} />
                Save
              </button>
              <button className="cancel-button" onClick={cancelEdit}>
                <X size={16} />
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              {editingId === user.id ? (
                <div className="edit-form">
                  <h3>Edit User</h3>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-actions">
                    <button className="save-button" onClick={() => handleUpdate(user.id)}>
                      <Save size={16} />
                      Save
                    </button>
                    <button className="cancel-button" onClick={cancelEdit}>
                      <X size={16} />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>ID:</strong> {user.id}</p>
                  </div>
                  <div className="user-actions">
                    <button
                      className="edit-button"
                      onClick={() => startEdit(user)}
                      disabled={isCreating || (editingId !== null && editingId !== user.id)}
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(user.id)}
                      disabled={isCreating || editingId !== null}
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
