# JSONPlaceholder Manager

A React + TypeScript application built with Vite that provides a user-friendly interface for managing users and posts from the JSONPlaceholder API. This application demonstrates CRUD operations and shows the relationship between users and posts.

## Features

- **Homepage**: Clean navigation with feature cards for Users and Posts
- **User Management**: Full CRUD operations for users (Create, Read, Update, Delete)
- **Post Management**: Full CRUD operations for posts with user relationship
- **Responsive Design**: Modern UI/UX with mobile-friendly layout
- **TypeScript**: Full type safety throughout the application
- **API Integration**: Fetches data from JSONPlaceholder API
- **Real-time Updates**: Immediate UI updates after operations

## User Interface

- **Users List**: Displays user information (ID, name, username, email)
- **Posts List**: Shows post details (User ID, Post ID, title, body) with user relationship
- **CRUD Operations**: Add, edit, and delete functionality for both users and posts
- **Modern Styling**: Gradient backgrounds, glassmorphism effects, and smooth animations

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Axios** for HTTP requests
- **Lucide React** for icons
- **CSS3** with modern features (Grid, Flexbox, Backdrop-filter)
- **ESLint** for code quality

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd phase1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Homepage.tsx          # Main navigation component
│   ├── Homepage.css
│   ├── UserList.tsx          # User management component
│   ├── UserList.css
│   ├── PostList.tsx          # Post management component
│   └── PostList.css
├── services/
│   └── api.ts               # API service functions
├── types/
│   └── index.ts             # TypeScript type definitions
├── App.tsx                  # Main application component
├── App.css                  # Global styles
├── index.css                # Base styles
└── main.tsx                 # Application entry point
```

## API Integration

The application integrates with the JSONPlaceholder API:
- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Endpoints**: `/users` and `/posts`
- **Operations**: GET, POST, PUT, DELETE

## Features in Detail

### User Management
- View all users with their details
- Create new users with name, username, and email
- Edit existing user information
- Delete users with confirmation dialog
- Real-time UI updates

### Post Management
- View all posts with user relationships
- Create new posts linked to users
- Edit post content and user assignment
- Delete posts with confirmation
- Display user names for better UX

### User Experience
- Responsive design for all screen sizes
- Loading states during API calls
- Error handling with user-friendly messages
- Smooth animations and transitions
- Intuitive navigation between sections

## Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).