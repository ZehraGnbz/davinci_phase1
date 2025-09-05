# Phase 1 - React + TypeScript CRUD Application

A modern, responsive web application built with React, TypeScript, and Vite. This project demonstrates full CRUD operations for managing users and posts with a beautiful, coffee-themed UI design.

## 🚀 Live Demo

**Live Application:** [https://davinciphase1.netlify.app](https://davinciphase1.netlify.app)

## ✨ Features

### Core Functionality
- **Full CRUD Operations** - Create, Read, Update, Delete for both Users and Posts
- **Data Relationships** - Posts are linked to Users via `userId` field
- **API Integration** - Uses JSONPlaceholder API with local fallback
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Coffee-themed design with smooth animations

### User Management
- View all users with detailed information
- Add new users with form validation
- Edit existing user details
- Delete users with confirmation
- Real-time updates and error handling

### Post Management
- View all posts with user relationships
- Create new posts linked to users
- Edit post content and metadata
- Delete posts with confirmation
- User information display in post cards

### Design Features
- **Coffee Theme** - Warm brown and cream color palette
- **Wood Textures** - SVG patterns for authentic feel
- **Hover Effects** - Interactive animations on cards and buttons
- **Gradient Backgrounds** - Beautiful color transitions
- **Glass Morphism** - Modern backdrop blur effects
- **Custom Favicon** - Branded "P1" icon

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Language:** TypeScript 5.8.3
- **Build Tool:** Vite 7.1.2
- **HTTP Client:** Axios 1.11.0
- **Icons:** Lucide React 0.542.0
- **Styling:** CSS3 with modern features
- **Deployment:** Netlify
- **Code Quality:** ESLint 9.33.0

## 📁 Project Structure

```
src/
├── components/
│   ├── Homepage.tsx          # Main landing page
│   ├── Homepage.css          # Homepage styles
│   ├── UserList.tsx          # User management component
│   ├── UserList.css          # User list styles
│   ├── PostList.tsx          # Post management component
│   └── PostList.css          # Post list styles
├── services/
│   └── api.ts                # API service with fallback
├── types/
│   └── index.ts              # TypeScript type definitions
├── data/
│   └── sampleData.ts         # Local sample data
├── App.tsx                   # Main application component
├── App.css                   # Global styles
└── main.tsx                  # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/phase1.git
   cd phase1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary Brown:** #8B4513
- **Secondary Brown:** #A0522D
- **Accent Brown:** #CD853F
- **Cream:** #F4E4BC
- **Light Cream:** #E6D7C3
- **Dark Brown:** #654321

### Typography
- **Headers:** Georgia, serif
- **Body:** System fonts
- **Weights:** 400, 500, 600, 700

### Components
- **Cards:** Wood-textured backgrounds with glass morphism
- **Buttons:** Rounded corners with hover animations
- **Forms:** Clean inputs with focus states
- **Navigation:** Icon + text with active states

## 🔧 API Integration

The application uses JSONPlaceholder API with intelligent fallback:

- **Primary:** JSONPlaceholder API (https://jsonplaceholder.typicode.com/)
- **Fallback:** Local sample data when API is unavailable
- **Error Handling:** Graceful degradation with user feedback
- **Loading States:** Smooth loading indicators

### API Endpoints Used
- `GET /users` - Fetch all users
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user
- `GET /posts` - Fetch all posts
- `POST /posts` - Create new post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

## 📱 Responsive Design

### Breakpoints
- **Desktop:** 1025px and above
- **Tablet:** 769px - 1024px
- **Mobile:** 768px and below

### Mobile Features
- Touch-friendly buttons
- Optimized card layouts
- Collapsible navigation
- Swipe-friendly interactions

## 🚀 Deployment

### Netlify (Current)
- **URL:** https://davinciphase1.netlify.app
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Auto Deploy:** On push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to your hosting provider
3. Configure redirects for SPA routing

## 🧪 Testing

### Manual Testing
- All CRUD operations work correctly
- Responsive design on all devices
- API fallback functionality
- Error handling and user feedback
- Form validation and submission

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Notes

### Code Quality
- TypeScript strict mode enabled
- ESLint configuration for code consistency
- Modular component architecture
- Reusable CSS classes and utilities

### Performance
- Optimized bundle size
- Lazy loading where appropriate
- Efficient re-renders
- Minimal external dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the API
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for the build tool
- [Netlify](https://netlify.com/) for hosting

## 📞 Contact

- **Project Link:** [https://github.com/yourusername/phase1](https://github.com/yourusername/phase1)
- **Live Demo:** [https://davinciphase1.netlify.app](https://davinciphase1.netlify.app)

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**