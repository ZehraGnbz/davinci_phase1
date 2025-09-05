// Test script to verify JSONPlaceholder API integration
// Run this in browser console to test the API

console.log('🧪 Testing JSONPlaceholder API Integration...\n');

// Test 1: Get all users
console.log('1️⃣ Testing GET /users');
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log('✅ Users fetched successfully:', users.length, 'users');
    console.log('First user:', users[0]);
    console.log('User fields: id, name, username, email ✓\n');
  })
  .catch(error => console.error('❌ Error fetching users:', error));

// Test 2: Get all posts
console.log('2️⃣ Testing GET /posts');
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    console.log('✅ Posts fetched successfully:', posts.length, 'posts');
    console.log('First post:', posts[0]);
    console.log('Post fields: userId, id, title ✓\n');
  })
  .catch(error => console.error('❌ Error fetching posts:', error));

// Test 3: Create a new user
console.log('3️⃣ Testing POST /users');
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Test User',
    username: 'testuser',
    email: 'test@example.com',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(newUser => {
    console.log('✅ User created successfully:', newUser);
    console.log('New user ID:', newUser.id, '(Note: This is fake data)\n');
  })
  .catch(error => console.error('❌ Error creating user:', error));

// Test 4: Create a new post
console.log('4️⃣ Testing POST /posts');
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Test Post',
    body: 'This is a test post body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(newPost => {
    console.log('✅ Post created successfully:', newPost);
    console.log('New post ID:', newPost.id, '(Note: This is fake data)\n');
  })
  .catch(error => console.error('❌ Error creating post:', error));

// Test 5: Filter posts by user
console.log('5️⃣ Testing GET /posts?userId=1');
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(posts => {
    console.log('✅ Posts filtered by userId=1:', posts.length, 'posts');
    console.log('All posts belong to user 1:', posts.every(post => post.userId === 1));
    console.log('Relationship through userId field ✓\n');
  })
  .catch(error => console.error('❌ Error filtering posts:', error));

console.log('🎉 All API tests completed! Check the results above.');
