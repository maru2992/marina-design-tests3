# React + Vite + TypeScript Template

A modern React template with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡️ Vite for fast development and builds
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📦 ESLint for code quality
- 🔍 Lucide React for icons

## 🛠️ Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📦 Deployment

Dockerfile included for containerized deployment.

## 🎨 Styling

This template uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

## 🐙 GitHub Setup (Fixing "Repository Empty" Error)

If you encounter a "GitHub repository empty" error when connecting, it means your repository has been created but no code has been pushed to it yet.

To fix this, initialize your local repository and push your code:

```bash
# 1. Initialize git if you haven't already
git init

# 2. Add all files
git add .

# 3. Commit your changes
git commit -m "Initial commit"

# 4. Rename the default branch to main (if it's currently master)
git branch -M main

# 5. Add your GitHub repository as the remote origin
# Replace <your-username> and <your-repo> with your actual details
git remote add origin https://github.com/<your-username>/<your-repo>.git

# 6. Push your code to GitHub
git push -u origin main
```

Once you have pushed your code, refresh the app and try connecting again.