import React, { useState, useEffect } from 'react';
import type { Post, CreatePostData, User } from '../types';
import { postApi, userApi } from '../services/api';
import { Plus, Edit, Trash2, Save, X, FileText, User as UserIcon, ArrowLeft } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import LoadingSpinner from './LoadingSpinner';
import './PostList.css';

interface PostListProps {
  onNavigate: (page: 'home' | 'users' | 'posts') => void;
}

const PostList: React.FC<PostListProps> = ({ onNavigate }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<CreatePostData>({
    userId: 1,
    title: '',
    body: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [postsData, usersData] = await Promise.all([
        postApi.getAll(),
        userApi.getAll(),
      ]);
      setPosts(postsData);
      setUsers(usersData);
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const getUserName = (userId: number): string => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : `User ${userId}`;
  };

  const handleCreate = async () => {
    try {
      const newPost = await postApi.create(formData);
      setPosts([...posts, newPost]);
      setIsCreating(false);
      setFormData({ userId: 1, title: '', body: '' });
    } catch (err) {
      setError('Failed to create post');
      console.error('Error creating post:', err);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      const updatedPost = await postApi.update(id, formData);
      setPosts(posts.map(post => post.id === id ? updatedPost : post));
      setEditingId(null);
      setFormData({ userId: 1, title: '', body: '' });
    } catch (err) {
      setError('Failed to update post');
      console.error('Error updating post:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await postApi.delete(id);
        setPosts(posts.filter(post => post.id !== id));
      } catch (err) {
        setError('Failed to delete post');
        console.error('Error deleting post:', err);
      }
    }
  };

  const startEdit = (post: Post) => {
    setEditingId(post.id);
    setFormData({
      userId: post.userId,
      title: post.title,
      body: post.body || '',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsCreating(false);
    setFormData({ userId: 1, title: '', body: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'userId' ? parseInt(value) : value,
    }));
  };

  if (loading) {
    return (
      <div className="post-list">
        <FloatingParticles />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="post-list">
      <FloatingParticles />
      <div className="page-header">
        <div className="header-content">
          <button className="nav-back-button" onClick={() => onNavigate('home')}>
            <ArrowLeft size={20} />
          </button>
          <FileText className="header-icon" />
          <h1>Posts Management</h1>
        </div>
        <button
          className="add-button"
          onClick={() => setIsCreating(true)}
          disabled={isCreating || editingId !== null}
        >
          <Plus size={20} />
          Add Post
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      <div className="content">
        {isCreating && (
          <div className="form-card">
            <h3>Create New Post</h3>
            <div className="form-group">
              <label>User:</label>
              <select
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
              >
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.username})
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter post title"
              />
            </div>
            <div className="form-group">
              <label>Body:</label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                placeholder="Enter post content"
                rows={4}
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

        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              {editingId === post.id ? (
                <div className="edit-form">
                  <h3>Edit Post</h3>
                  <div className="form-group">
                    <label>User:</label>
                    <select
                      name="userId"
                      value={formData.userId}
                      onChange={handleInputChange}
                    >
                      {users.map(user => (
                        <option key={user.id} value={user.id}>
                          {user.name} ({user.username})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Body:</label>
                    <textarea
                      name="body"
                      value={formData.body}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>
                  <div className="form-actions">
                    <button className="save-button" onClick={() => handleUpdate(post.id)}>
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
                  <div className="post-header">
                    <h3>{post.title}</h3>
                    <div className="post-meta">
                      <span className="post-id">ID: {post.id}</span>
                      <div className="user-info">
                        <UserIcon size={16} />
                        <span>{getUserName(post.userId)}</span>
                        <span className="user-id">(User ID: {post.userId})</span>
                      </div>
                    </div>
                  </div>
                  {post.body && (
                    <div className="post-body">
                      <p>{post.body}</p>
                    </div>
                  )}
                  <div className="post-actions">
                    <button
                      className="edit-button"
                      onClick={() => startEdit(post)}
                      disabled={isCreating || (editingId !== null && editingId !== post.id)}
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(post.id)}
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

export default PostList;
