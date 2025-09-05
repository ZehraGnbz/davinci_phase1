import { useState } from 'react';
import Homepage from './components/Homepage';
import UserList from './components/UserList';
import PostList from './components/PostList';
import './App.css';

type Page = 'home' | 'users' | 'posts';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'users':
        return <UserList />;
      case 'posts':
        return <PostList />;
      default:
        return <Homepage onNavigate={handleNavigate} currentPage={currentPage} />;
    }
  };

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <Homepage onNavigate={handleNavigate} currentPage={currentPage} />
      ) : (
        <>
          <Homepage onNavigate={handleNavigate} currentPage={currentPage} />
          <div className="page-content">
            {renderCurrentPage()}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
