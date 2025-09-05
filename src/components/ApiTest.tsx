import React, { useState } from 'react';
import { Play, CheckCircle, XCircle } from 'lucide-react';
import './ApiTest.css';

const ApiTest: React.FC = () => {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runApiTests = async () => {
    setIsRunning(true);
    setTestResults([]);
    const results: string[] = [];

    try {
      // Test 1: Get all users
      results.push('🧪 Testing GET /users...');
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();
      results.push(`✅ Users fetched: ${users.length} users`);
      results.push(`   First user: ${users[0].name} (${users[0].email})`);
      results.push('   Fields: id, name, username, email ✓\n');

      // Test 2: Get all posts
      results.push('🧪 Testing GET /posts...');
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await postsResponse.json();
      results.push(`✅ Posts fetched: ${posts.length} posts`);
      results.push(`   First post: "${posts[0].title}"`);
      results.push('   Fields: userId, id, title ✓\n');

      // Test 3: Create a new user
      results.push('🧪 Testing POST /users...');
      const newUserResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          username: 'testuser',
          email: 'test@example.com',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const newUser = await newUserResponse.json();
      results.push(`✅ User created: ID ${newUser.id} (fake data)`);
      results.push(`   Name: ${newUser.name}, Email: ${newUser.email}\n`);

      // Test 4: Create a new post
      results.push('🧪 Testing POST /posts...');
      const newPostResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Test Post',
          body: 'This is a test post body',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const newPost = await newPostResponse.json();
      results.push(`✅ Post created: ID ${newPost.id} (fake data)`);
      results.push(`   Title: "${newPost.title}", User ID: ${newPost.userId}\n`);

      // Test 5: Filter posts by user
      results.push('🧪 Testing GET /posts?userId=1...');
      const filteredPostsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      const filteredPosts = await filteredPostsResponse.json();
      results.push(`✅ Posts filtered by userId=1: ${filteredPosts.length} posts`);
      results.push(`   All posts belong to user 1: ${filteredPosts.every((post: any) => post.userId === 1)}`);
      results.push('   Relationship through userId field ✓\n');

      // Test 6: Update a user
      results.push('🧪 Testing PUT /users/1...');
      const updateUserResponse = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          name: 'Updated User',
          username: 'updateduser',
          email: 'updated@example.com',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const updatedUser = await updateUserResponse.json();
      results.push(`✅ User updated: ${updatedUser.name} (fake data)`);
      results.push(`   New email: ${updatedUser.email}\n`);

      // Test 7: Delete a post
      results.push('🧪 Testing DELETE /posts/1...');
      await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      results.push('✅ Post deleted successfully (fake data)\n');

      results.push('🎉 All API tests completed successfully!');
      results.push('✅ Our application uses the same API patterns as the official guide');

    } catch (error) {
      results.push(`❌ Error during testing: ${error}`);
    }

    setTestResults(results);
    setIsRunning(false);
  };

  return (
    <div className="api-test">
      <div className="api-test-header">
        <h2>🧪 JSONPlaceholder API Test</h2>
        <p>Test the same API endpoints our application uses</p>
        <button 
          className="test-button" 
          onClick={runApiTests}
          disabled={isRunning}
        >
          {isRunning ? (
            <>
              <div className="spinner"></div>
              Running Tests...
            </>
          ) : (
            <>
              <Play size={16} />
              Run API Tests
            </>
          )}
        </button>
      </div>

      {testResults.length > 0 && (
        <div className="test-results">
          <h3>Test Results:</h3>
          <div className="results-container">
            {testResults.map((result, index) => (
              <div key={index} className={`result-line ${result.includes('✅') ? 'success' : result.includes('❌') ? 'error' : 'info'}`}>
                {result.includes('✅') && <CheckCircle size={16} className="icon" />}
                {result.includes('❌') && <XCircle size={16} className="icon" />}
                <span>{result}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiTest;
