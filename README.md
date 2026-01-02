# GitHub Portfolio Generator

A modern, responsive portfolio page that automatically showcases your GitHub repositories with tech stack detection and shield.io badges.

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
- **🛡️ Shield.io Tech Badges**: Clean, modern badge-style tech stack display with clickable links to documentation
- **📱 Responsive**: Works seamlessly on desktop, tablet, and mobile
- **⚡ No Build Tools Needed**: Pure HTML, CSS, and JavaScript—just clone and run

## 🛠️ Supported Technologies

**Languages:** JavaScript, TypeScript, Python, Java, HTML, CSS, Go, Rust, C++, C#, Swift, Kotlin, PHP, Ruby, Shell  
**Frameworks & Libraries:** React, Vue, Angular, Next.js, Express, Django, Flask, FastAPI, TailwindCSS, Bootstrap  
**Testing:** Pytest, Jest, Mocha, Cypress, Selenium, Playwright, Healium, TestNG, JUnit, Vitest, REST-Assured  
**Databases & Tools:** MongoDB, PostgreSQL, Redis, GraphQL, Docker, AWS, Firebase, Nginx, MySQL

## 🎯 Usage

### Local Development
1. Clone the repository
2. Run a local server (e.g., `python3 -m http.server`)
3. Open `index.html` in your browser
4. Add `?user=yourusername` to the URL

### Tech Stack Badges

The portfolio displays technology stack as shield.io badges instead of icon images. Each badge is clickable and links to the official documentation for that technology.

**Features:**
- Clean, modern badge-style display
- Clickable badges that link to official documentation
- Auto-detected from repository languages and README content
- Responsive layout that wraps on smaller screens

### Customization

- **Add Tech Badges:**  
  Edit the `techStack` object in `script.js` to add new technologies and badge URLs.
  
  Example format:
  ```javascript
  'YourTech': { 
      badge: '[![YourTech](https://img.shields.io/badge/YourTech-Version-Color.svg)](https://docs-url)', 
      color: '#HexColor', 
      url: 'https://official-link' 
  }

## 🎯 Usage

### Local Development
1. Clone the repository
2. Run a local server (e.g., `python3 -m http.server`)
3. Open `index.html` in your browser
4. Add `?user=yourusername` to the URL

## 📁 Project Structure
``` text
github-portfolio-generator/
├── [index.html](http://_vscodecontentref_/0) # Main portfolio page
├── [styles.css](http://_vscodecontentref_/1) # Styling
├── [script.js](http://_vscodecontentref_/2) # Core logic
├── assets/ # Tech stack images
│ ├── testng.png
│ ├── fastapi.png
│ └── ... (other images)
├── demo/ # Demo mode data and mock files
│ ├── demo-data.js
│ └── ... (other demo files)
├── [README.md](http://_vscodecontentref_/3) # Project documentation
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

**Made with 💜 by [steadhac](https://github.com/steadhac)**