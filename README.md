# GitHub Portfolio Generator

A modern, responsive portfolio page that automatically showcases your GitHub repositories with tech stack detection and clean icon display.

## 🚀 Quick Start

### Use as Template
1. Click "Use this template" on GitHub
2. Name your repo: `your-portfolio`
3. Edit `script.js` line for username: `return params.get('user') || 'YOUR_USERNAME';`
4. Enable GitHub Pages in Settings > Pages
5. Access at: `https://yourusername.github.io/your-portfolio`


## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub.
2. Go to Settings > Pages.
3. Select the branch and folder (usually `main` and `/root`).
4. Your site will be live at `https://yourusername.github.io/your-portfolio`.


## ✨ Features

- **🖼️ Clean, Minimalist Design**: Simple layout with a modern gradient background
- **🔍 Tech Stack Detection**: Automatically detects languages and frameworks from your repos and README files
- **🛠️ Tech Icons with Tooltips**: Displays SVG icons for each technology, with the tech name shown on hover
- **🔤 Tech Name Fallback**: If an icon is not found, the name of the tech stack is presented as text for easy identification and manual review
- **📱 Responsive**: Works seamlessly on desktop, tablet, and mobile
- **⚡ No Build Tools Needed**: Pure HTML, CSS, and JavaScript—just clone and run

## 🛠️ Supported Technologies

**Languages:** JavaScript, TypeScript, Python, Java, HTML, CSS, Go, Rust, C++, C#, Swift, Kotlin, PHP, Ruby, Shell  
**Frameworks & Libraries:** React, Vue, Angular, Next.js, Express, Django, Flask, TailwindCSS, Bootstrap  
**Testing:** Pytest, Jest, Mocha, Cypress, Selenium, Playwright, Healium, TestNG, JUnit, Vitest  
**Databases & Tools:** MongoDB, PostgreSQL, Redis, GraphQL, Docker, Kubernetes, AWS, Firebase, Nginx, Webpack, Vite, ESLint, Prettier, Storybook, Swagger

## 🎯 Usage

### Local Development
1. Clone the repository
2. Run a local server (e.g., `python3 -m http.server`)
3. Open `index.html` in your browser
4. Add `?user=yourusername` to the URL

### Customization

- **Add Tech Icons:**  
  Edit the `techIcons` object in `script.js` to add new techs and SVG URLs.
- **Change Colors:**  
  Edit the gradient in `styles.css`.
- **Increase Repository Count:**  
  Edit the `per_page` value in `script.js`.

## 📁 Project Structure
``` text
github-portfolio-generator/
├── index.html # Main portfolio page
├── styles.css # Styling
├── script.js # Core logic
├── assets/ # Tech stack icons and images
│ ├── testng.png
│ ├── fastapi.png
│ └── ... (other images)
├── demo/ # Demo mode data and mock files
│ ├── demo-data.js
│ └── ... (other demo files)
├── README.md # Project documentation
```

## 🔧 API Features

- Profile data: Name, bio, repository count
- Repository info: Name, description, tech stack icons
- Tech stack detection: Languages and README parsing
- Demo mode fallback if API is unavailable

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---


## 👤 Author

**Carolina Steadham**
- GitHub: [@steadhac](https://github.com/steadhac)
- LinkedIn: [Carolina Steadham](https://linkedin.com/in/carolinacsteadham)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and JavaScript
