# Deployment Guide

This guide provides step-by-step instructions for deploying the JSONPlaceholder Manager application to various platforms.

## Prerequisites

- A GitHub repository with your code
- Account on your chosen deployment platform

## Deployment Options

### Option 1: Netlify (Recommended)

#### Method 1: Drag and Drop Deployment

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com) and sign in
3. Drag and drop the `dist` folder to the deploy area
4. Your site will be live with a random URL
5. You can customize the site name in Site Settings

#### Method 2: Git Integration

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

The `netlify.toml` file is already configured for automatic deployments.

### Option 2: Vercel

#### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your project

#### Method 2: Git Integration

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

The `vercel.json` file is already configured for proper routing.

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Build and deploy:
```bash
npm run build
npm run deploy
```

4. Enable GitHub Pages in your repository settings

## Environment Variables

If you need to configure environment variables:

### Netlify
- Go to Site Settings > Environment Variables
- Add your variables

### Vercel
- Go to Project Settings > Environment Variables
- Add your variables

## Custom Domain

### Netlify
1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS settings

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS settings

## Continuous Deployment

Both Netlify and Vercel support continuous deployment:
- Every push to your main branch will trigger a new deployment
- Pull requests can create preview deployments
- Configure branch protection rules in GitHub for production deployments

## Troubleshooting

### Build Failures
- Check that all dependencies are in package.json
- Ensure TypeScript compilation passes: `npm run build`
- Check for linting errors: `npm run lint`

### Routing Issues
- Ensure SPA routing is configured (already done with netlify.toml and vercel.json)
- Check that all routes redirect to index.html

### API Issues
- JSONPlaceholder API is public and doesn't require authentication
- Check browser console for CORS errors
- Ensure HTTPS is used in production

## Performance Optimization

The application is already optimized with:
- Vite's built-in optimizations
- Code splitting
- Tree shaking
- Minification
- Gzip compression (handled by hosting platform)

## Monitoring

Consider adding:
- Error tracking (Sentry)
- Analytics (Google Analytics)
- Performance monitoring (Web Vitals)
