# Personal Portfolio Website

My personal portfolio website hosted at [https://hyadav2k.github.io/](https://hyadav2k.github.io/)

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by a GitHub Actions workflow.

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
git add dist -f
git commit -m "Deploy website"
git subtree push --prefix dist origin gh-pages
```

## Customization

- Edit content in `src/App.tsx`
- Modify styles in `src/index.css` and using Tailwind classes
- Update metadata in `index.html`
