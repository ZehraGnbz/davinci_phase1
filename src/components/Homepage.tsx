import React from 'react';
import { Users, FileText, Home } from 'lucide-react';
import './Homepage.css';

interface HomepageProps {
  onNavigate: (page: 'home' | 'users' | 'posts') => void;
  currentPage: 'home' | 'users' | 'posts';
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate, currentPage }) => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <Home className="header-icon" />
          <h1>JSONPlaceholder Manager</h1>
        </div>
        <nav className="nav">
          <button
            className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            <Home size={20} />
            Home
          </button>
          <button
            className={`nav-button ${currentPage === 'users' ? 'active' : ''}`}
            onClick={() => onNavigate('users')}
          >
            <Users size={20} />
            Users
          </button>
          <button
            className={`nav-button ${currentPage === 'posts' ? 'active' : ''}`}
            onClick={() => onNavigate('posts')}
          >
            <FileText size={20} />
            Posts
          </button>
        </nav>
      </header>

      {currentPage === 'home' && (
        <main className="main-content">
          <div className="welcome-section">
            <h2>Welcome to JSONPlaceholder Manager</h2>
            <p>
              This application allows you to manage users and posts from the JSONPlaceholder API.
              You can view, create, update, and delete records, and see the relationships between users and posts.
            </p>
          </div>

          <div className="feature-cards">
            <div className="feature-card" onClick={() => onNavigate('users')}>
              <Users className="feature-icon" />
              <h3>Users</h3>
              <p>Manage user information including name, username, and email</p>
              <button className="card-button">View Users</button>
            </div>

            <div className="feature-card" onClick={() => onNavigate('posts')}>
              <FileText className="feature-icon" />
              <h3>Posts</h3>
              <p>Manage posts and see their relationship to users</p>
              <button className="card-button">View Posts</button>
            </div>
          </div>

                         </main>
             )}
           </div>
         );
       };

export default Homepage;
