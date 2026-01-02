# GitHub Portfolio Generator

A modern, responsive portfolio page that automatically showcases your GitHub repositories with tech stack detection and shield.io badges.

## 🛠️ Built With

[![HTML](https://img.shields.io/badge/HTML-5-E34F26.svg)](https://html.spec.whatwg.org/)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6.svg)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg)](https://www.javascript.com/)
[![REST API](https://img.shields.io/badge/REST-API-6366F1.svg)](https://restfulapi.net/)
[![GitHub API](https://img.shields.io/badge/GitHub-API-181717.svg)](https://docs.github.com/en/rest)
[![Font Awesome](https://img.shields.io/badge/Font-Awesome-228AE6.svg)](https://fontawesome.com/)
[![shield.io](https://img.shields.io/badge/shield.io-Badges-005EB8.svg)](https://shields.io/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-181717.svg)](https://pages.github.com/)

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
## 🎨 Available Tech Stack Badges

All 50+ supported technologies with their shield.io badges:

### Languages
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg)](https://www.javascript.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.9+-3776AB.svg)](https://www.python.org/)
[![Java](https://img.shields.io/badge/Java-17+-ED8B00.svg)](https://www.java.com/)
[![Go](https://img.shields.io/badge/Go-1.20+-00ADD8.svg)](https://golang.org/)
[![Rust](https://img.shields.io/badge/Rust-Latest-CE422B.svg)](https://www.rust-lang.org/)
[![C++](https://img.shields.io/badge/C++-17+-00599C.svg)](https://en.cppreference.com/)
[![C#](https://img.shields.io/badge/C%23-11-239120.svg)](https://learn.microsoft.com/en-us/dotnet/csharp/)
[![PHP](https://img.shields.io/badge/PHP-8.0+-777BB4.svg)](https://www.php.net/)
[![Ruby](https://img.shields.io/badge/Ruby-3.0+-CC342D.svg)](https://www.ruby-lang.org/)

### Frameworks & Libraries
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://react.dev/)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D.svg)](https://vuejs.org/)
[![Angular](https://img.shields.io/badge/Angular-17+-DD0031.svg)](https://angular.io/)
[![Next.js](https://img.shields.io/badge/Next.js-13+-000000.svg)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express-4.0+-000000.svg)](https://expressjs.com/)
[![Django](https://img.shields.io/badge/Django-4.0+-092E20.svg)](https://www.djangoproject.com/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000.svg)](https://flask.palletsprojects.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688.svg)](https://fastapi.tiangolo.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-06B6D4.svg)](https://tailwindcss.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0+-7952B3.svg)](https://getbootstrap.com/)

### Databases & Services
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248.svg)](https://www.mongodb.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791.svg)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D.svg)](https://redis.io/)
[![GraphQL](https://img.shields.io/badge/GraphQL-Latest-E10098.svg)](https://graphql.org/)
[![AWS](https://img.shields.io/badge/AWS-Latest-FF9900.svg)](https://aws.amazon.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Latest-FFCA28.svg)](https://firebase.google.com/)
[![Docker](https://img.shields.io/badge/Docker-Latest-2496ED.svg)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-Latest-009639.svg)](https://nginx.org/)

### Testing & Quality
[![Jest](https://img.shields.io/badge/Jest-29+-C21325.svg)](https://jestjs.io/)
[![Cypress](https://img.shields.io/badge/Cypress-Latest-17202C.svg)](https://www.cypress.io/)
[![pytest](https://img.shields.io/badge/pytest-Latest-0A9EDC.svg)](https://pytest.org/)
[![Selenium](https://img.shields.io/badge/Selenium-4.0+-43B02A.svg)](https://www.selenium.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-Latest-2EAD33.svg)](https://playwright.dev/)
[![TestNG](https://img.shields.io/badge/TestNG-7.0+-F46800.svg)](https://testng.org/)
[![REST-Assured](https://img.shields.io/badge/REST--Assured-Testing-6366F1.svg)](https://rest-assured.io/)

### Build & Development Tools
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)
[![Maven](https://img.shields.io/badge/Maven-Build-C71A36.svg)](https://maven.apache.org/)
[![Shell](https://img.shields.io/badge/Shell-Bash-89E051.svg)](https://www.gnu.org/software/bash/)
---

**Made with 💜 by [steadhac](https://github.com/steadhac)**