class GitHubPortfolio {
    constructor() {
        this.username = 'steadhac';
        this.techIcons = {
            'JavaScript': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
            'TypeScript': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', color: '#3178C6' },
            'Python': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', color: '#3776AB' },
            'Java': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', color: '#ED8B00' },
            'HTML': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', color: '#E34F26' },
            'CSS': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', color: '#1572B6' },
            'React': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', color: '#61DAFB' },
            'Vue': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
            'Angular': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
            'Node.js': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', color: '#339933' },
            'PHP': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg', color: '#777BB4' },
            'Ruby': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg', color: '#CC342D' },
            'Go': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg', color: '#00ADD8' },
            'Rust': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg', color: '#CE422B' },
            'C++': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
            'C#': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', color: '#239120' },
            'C': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', color: '#A8B9CC' },
            'Swift': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg', color: '#FA7343' },
            'Kotlin': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg', color: '#0095D5' },
            'Docker': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', color: '#2496ED' },
            'Shell': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg', color: '#89E051' },
            'Express': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', color: '#000000' },
            'Django': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg', color: '#092E20' },
            'FastAPI': { icon: 'assets/fastAPI.png', color: '#009688' },
            'Chrome DevTools': { icon: 'assets/chromeDevTools.png', color: '#4285F4' },
            'Flask': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg', color: '#000000' },
            'Next.js': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', color: '#000000' },
            'TailwindCSS': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg', color: '#06B6D4' },
            'Bootstrap': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg', color: '#7952B3' },
            'MongoDB': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', color: '#47A248' },
            'PostgreSQL': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', color: '#336791' },
            'GraphQL': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg', color: '#E10098' },
            'AWS': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900' },
            'Firebase': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
            'Redis': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg', color: '#DC382D' },
            'Nginx': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg', color: '#009639' },
            'Jest': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg', color: '#C21325' },
            'Cypress': { icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cypress.svg', color: '#17202C' },
            'Pytest': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytest/pytest-original.svg', color: '#0A9EDC' },
            'Selenium': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg', color: '#43B02A' },
            'TestNG': { icon: 'assets/testNG.png', color: '#F46800' },
            'Playwright': { icon: 'https://playwright.dev/img/playwright-logo.svg', color: '#2EAD33' },
            'Makefile': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cmake/cmake-original.svg', color: '#064F8C' },
            'SQL': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', color: '#336791' },
            'Healenium': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg', color: '#FF6B6B' },
            'REST API': { icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png', color: '#6366F1' },
            'REST-Assured': { icon: 'assets/restAssuredApi.png', color: '#6366F1' },
            'ExtentReports': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg', color: '#F46800' },
            'Hamcrest': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/junit/junit-original.svg', color: '#25A162' },
            'Jackson': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-original.svg', color: '#000000' },
            'Apache Guacamole': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg', color: '#4CAF50' },
            'PAM': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', color: '#FF9800' },
            'Maven': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg', color: '#C71A36' },
            'PyYAML': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/yaml/yaml-original.svg', color: '#CB171E' },
        };
                this.techStack = {
            'JavaScript': { badge: '[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg)](https://www.javascript.com/)', color: '#F7DF1E', url: 'https://www.javascript.com/' },
            'TypeScript': { badge: '[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)', color: '#3178C6', url: 'https://www.typescriptlang.org/' },
            'Python': { badge: '[![Python](https://img.shields.io/badge/Python-3.9+-3776AB.svg)](https://www.python.org/)', color: '#3776AB', url: 'https://www.python.org/' },
            'Java': { badge: '[![Java](https://img.shields.io/badge/Java-17+-ED8B00.svg)](https://www.java.com/)', color: '#ED8B00', url: 'https://www.java.com/' },
            'HTML': { badge: '[![HTML](https://img.shields.io/badge/HTML-5-E34F26.svg)](https://html.spec.whatwg.org/)', color: '#E34F26', url: 'https://html.spec.whatwg.org/' },
            'CSS': { badge: '[![CSS](https://img.shields.io/badge/CSS-3-1572B6.svg)](https://www.w3.org/Style/CSS/)', color: '#1572B6', url: 'https://www.w3.org/Style/CSS/' },
            'React': { badge: '[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://react.dev/)', color: '#61DAFB', url: 'https://react.dev/' },
            'Vue': { badge: '[![Vue](https://img.shields.io/badge/Vue-3-4FC08D.svg)](https://vuejs.org/)', color: '#4FC08D', url: 'https://vuejs.org/' },
            'Angular': { badge: '[![Angular](https://img.shields.io/badge/Angular-17+-DD0031.svg)](https://angular.io/)', color: '#DD0031', url: 'https://angular.io/' },
            'Node.js': { badge: '[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)', color: '#339933', url: 'https://nodejs.org/' },
            'PHP': { badge: '[![PHP](https://img.shields.io/badge/PHP-8.0+-777BB4.svg)](https://www.php.net/)', color: '#777BB4', url: 'https://www.php.net/' },
            'Ruby': { badge: '[![Ruby](https://img.shields.io/badge/Ruby-3.0+-CC342D.svg)](https://www.ruby-lang.org/)', color: '#CC342D', url: 'https://www.ruby-lang.org/' },
            'Go': { badge: '[![Go](https://img.shields.io/badge/Go-1.20+-00ADD8.svg)](https://golang.org/)', color: '#00ADD8', url: 'https://golang.org/' },
            'Rust': { badge: '[![Rust](https://img.shields.io/badge/Rust-Latest-CE422B.svg)](https://www.rust-lang.org/)', color: '#CE422B', url: 'https://www.rust-lang.org/' },
            'C++': { badge: '[![C++](https://img.shields.io/badge/C++-17+-00599C.svg)](https://en.cppreference.com/)', color: '#00599C', url: 'https://en.cppreference.com/' },
            'C#': { badge: '[![C#](https://img.shields.io/badge/C%23-11-239120.svg)](https://learn.microsoft.com/en-us/dotnet/csharp/)', color: '#239120', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
            'C': { badge: '[![C](https://img.shields.io/badge/C-99-A8B9CC.svg)](https://en.cppreference.com/w/c)', color: '#A8B9CC', url: 'https://en.cppreference.com/w/c' },
            'Swift': { badge: '[![Swift](https://img.shields.io/badge/Swift-5.0+-FA7343.svg)](https://www.swift.org/)', color: '#FA7343', url: 'https://www.swift.org/' },
            'Kotlin': { badge: '[![Kotlin](https://img.shields.io/badge/Kotlin-1.9+-0095D5.svg)](https://kotlinlang.org/)', color: '#0095D5', url: 'https://kotlinlang.org/' },
            'Docker': { badge: '[![Docker](https://img.shields.io/badge/Docker-Latest-2496ED.svg)](https://www.docker.com/)', color: '#2496ED', url: 'https://www.docker.com/' },
            'Shell': { badge: '[![Shell](https://img.shields.io/badge/Shell-Bash-89E051.svg)](https://www.gnu.org/software/bash/)', color: '#89E051', url: 'https://www.gnu.org/software/bash/' },
            'Express': { badge: '[![Express](https://img.shields.io/badge/Express-4.0+-000000.svg)](https://expressjs.com/)', color: '#000000', url: 'https://expressjs.com/' },
            'Django': { badge: '[![Django](https://img.shields.io/badge/Django-4.0+-092E20.svg)](https://www.djangoproject.com/)', color: '#092E20', url: 'https://www.djangoproject.com/' },
            'FastAPI': { badge: '[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688.svg)](https://fastapi.tiangolo.com/)', color: '#009688', url: 'https://fastapi.tiangolo.com/' },
            'Flask': { badge: '[![Flask](https://img.shields.io/badge/Flask-2.0+-000000.svg)](https://flask.palletsprojects.com/)', color: '#000000', url: 'https://flask.palletsprojects.com/' },
            'Next.js': { badge: '[![Next.js](https://img.shields.io/badge/Next.js-13+-000000.svg)](https://nextjs.org/)', color: '#000000', url: 'https://nextjs.org/' },
            'TailwindCSS': { badge: '[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-06B6D4.svg)](https://tailwindcss.com/)', color: '#06B6D4', url: 'https://tailwindcss.com/' },
            'Bootstrap': { badge: '[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0+-7952B3.svg)](https://getbootstrap.com/)', color: '#7952B3', url: 'https://getbootstrap.com/' },
            'MongoDB': { badge: '[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248.svg)](https://www.mongodb.com/)', color: '#47A248', url: 'https://www.mongodb.com/' },
            'PostgreSQL': { badge: '[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791.svg)](https://www.postgresql.org/)', color: '#336791', url: 'https://www.postgresql.org/' },
            'GraphQL': { badge: '[![GraphQL](https://img.shields.io/badge/GraphQL-Latest-E10098.svg)](https://graphql.org/)', color: '#E10098', url: 'https://graphql.org/' },
            'AWS': { badge: '[![AWS](https://img.shields.io/badge/AWS-Latest-FF9900.svg)](https://aws.amazon.com/)', color: '#FF9900', url: 'https://aws.amazon.com/' },
            'Firebase': { badge: '[![Firebase](https://img.shields.io/badge/Firebase-Latest-FFCA28.svg)](https://firebase.google.com/)', color: '#FFCA28', url: 'https://firebase.google.com/' },
            'Redis': { badge: '[![Redis](https://img.shields.io/badge/Redis-7-DC382D.svg)](https://redis.io/)', color: '#DC382D', url: 'https://redis.io/' },
            'Nginx': { badge: '[![Nginx](https://img.shields.io/badge/Nginx-Latest-009639.svg)](https://nginx.org/)', color: '#009639', url: 'https://nginx.org/' },
            'Jest': { badge: '[![Jest](https://img.shields.io/badge/Jest-29+-C21325.svg)](https://jestjs.io/)', color: '#C21325', url: 'https://jestjs.io/' },
            'Cypress': { badge: '[![Cypress](https://img.shields.io/badge/Cypress-Latest-17202C.svg)](https://www.cypress.io/)', color: '#17202C', url: 'https://www.cypress.io/' },
            'Pytest': { badge: '[![pytest](https://img.shields.io/badge/pytest-Latest-0A9EDC.svg)](https://pytest.org/)', color: '#0A9EDC', url: 'https://pytest.org/' },
            'Selenium': { badge: '[![Selenium](https://img.shields.io/badge/Selenium-4.0+-43B02A.svg)](https://www.selenium.dev/)', color: '#43B02A', url: 'https://www.selenium.dev/' },
            'TestNG': { badge: '[![TestNG](https://img.shields.io/badge/TestNG-7.0+-F46800.svg)](https://testng.org/)', color: '#F46800', url: 'https://testng.org/' },
            'Playwright': { badge: '[![Playwright](https://img.shields.io/badge/Playwright-Latest-2EAD33.svg)](https://playwright.dev/)', color: '#2EAD33', url: 'https://playwright.dev/' },
            'Makefile': { badge: '[![Makefile](https://img.shields.io/badge/Makefile-Build-064F8C.svg)](https://www.gnu.org/software/make/)', color: '#064F8C', url: 'https://www.gnu.org/software/make/' },
            'SQL': { badge: '[![SQL](https://img.shields.io/badge/SQL-Database-336791.svg)](https://en.wikipedia.org/wiki/SQL)', color: '#336791', url: 'https://en.wikipedia.org/wiki/SQL' },
            'Healenium': { badge: '[![Healenium](https://img.shields.io/badge/Healenium-Latest-FF6B6B.svg)](https://healenium.io/)', color: '#FF6B6B', url: 'https://healenium.io/' },
            'Requests': { badge: '[![Requests](https://img.shields.io/badge/Requests-HTTP-6366F1.svg)](https://requests.readthedocs.io/)', color: '#6366F1', url: 'https://requests.readthedocs.io/' },
            'API': { badge: '[![API](https://img.shields.io/badge/API-Testing-orange.svg)](https://restfulapi.net/)', color: '#FF9800', url: 'https://restfulapi.net/' },
            'REST API': { badge: '[![REST API](https://img.shields.io/badge/REST-API-6366F1.svg)](https://restfulapi.net/)', color: '#6366F1', url: 'https://restfulapi.net/' },
            'REST-Assured': { badge: '[![REST-Assured](https://img.shields.io/badge/REST--Assured-Testing-6366F1.svg)](https://rest-assured.io/)', color: '#6366F1', url: 'https://rest-assured.io/' },
            'ExtentReports': { badge: '[![ExtentReports](https://img.shields.io/badge/ExtentReports-Reporting-F46800.svg)](https://www.extentreports.com/)', color: '#F46800', url: 'https://www.extentreports.com/' },
            'Hamcrest': { badge: '[![Hamcrest](https://img.shields.io/badge/Hamcrest-Matchers-25A162.svg)](http://hamcrest.org/)', color: '#25A162', url: 'http://hamcrest.org/' },
            'Jackson': { badge: '[![Jackson](https://img.shields.io/badge/Jackson-JSON-000000.svg)](https://github.com/FasterXML/jackson)', color: '#000000', url: 'https://github.com/FasterXML/jackson' },
            'Apache Guacamole': { badge: '[![Apache Guacamole](https://img.shields.io/badge/Apache-Guacamole-4CAF50.svg)](https://guacamole.apache.org/)', color: '#4CAF50', url: 'https://guacamole.apache.org/' },
            'PAM': { badge: '[![PAM](https://img.shields.io/badge/PAM-Authentication-FF9800.svg)](https://linux.die.net/man/8/pam)', color: '#FF9800', url: 'https://linux.die.net/man/8/pam' },
            'Maven': { badge: '[![Maven](https://img.shields.io/badge/Maven-Build-C71A36.svg)](https://maven.apache.org/)', color: '#C71A36', url: 'https://maven.apache.org/' },
            'PyYAML': { badge: '[![PyYAML](https://img.shields.io/badge/PyYAML-YAML-CB171E.svg)](https://pyyaml.org/)', color: '#CB171E', url: 'https://pyyaml.org/' },
        };
        this.init();
    }

    getUsername() {
        const params = new URLSearchParams(window.location.search);
        return params.get('user') || 'steadhac';
    }

    async init() {
        if (!this.username) {
            this.loadDemoData();
            return;
        }
        
        try {
            await this.loadProfile();
            // Only load repositories if we're not in demo mode
            if (!this.demoMode) {
                await this.loadRepositories();
            }
        } catch (error) {
            console.error('Error loading GitHub data:', error);
            this.loadDemoData();
        }
    }

    async makeRequest(url, options = {}) {
        const defaultOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'GitHub-Portfolio-Generator'
            },
            ...options
        };
        
        const response = await fetch(url, defaultOptions);
        return response;
    }

    async loadProfile() {
        try {
            const response = await this.makeRequest(`https://api.github.com/users/${this.username}`);
            if (!response.ok) {
                if (response.status === 403) {
                    this.loadDemoData();
                    return;
                }
                throw new Error('User not found');
            }
            
            const profile = await response.json();
            
            document.getElementById('profile-name').textContent = profile.name || profile.login;
            document.getElementById('profile-bio').textContent = profile.bio || 'GitHub Developer';
            document.getElementById('repo-count').textContent = profile.public_repos;
            
            const reposResponse = await this.makeRequest(`https://api.github.com/users/${this.username}/repos?per_page=100`);
            if (reposResponse.ok) {
                const allRepos = await reposResponse.json();
                if (Array.isArray(allRepos)) {
                    const totalStars = allRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
                    document.getElementById('total-stars').textContent = totalStars;
                } else {
                    document.getElementById('total-stars').textContent = 0;
                }
            } else {
                document.getElementById('total-stars').textContent = 0;
            }
            
            const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
            try {
                const commitsResponse = await this.makeRequest(`https://api.github.com/search/commits?q=author:${this.username}+committer-date:>${thirtyDaysAgo}&per_page=1`);
                if (commitsResponse.ok) {
                    const commitsData = await commitsResponse.json();
                    document.getElementById('total-commits').textContent = commitsData.total_count || 0;
                } else {
                    document.getElementById('total-commits').textContent = 0;
                }
            } catch {
                document.getElementById('total-commits').textContent = 0;
            }
            
            document.getElementById('github-link').href = `https://github.com/${this.username}`;
            document.title = `${profile.name || profile.login} - GitHub Portfolio`;
        } catch (error) {
            this.loadDemoData();
        }
    }

    async loadRepositories() {
        try {
            const response = await this.makeRequest(`https://api.github.com/users/${this.username}/repos?sort=updated&per_page=50`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const repos = await response.json();
            if (!Array.isArray(repos)) {
                throw new Error('Invalid repository data received');
            }
            
            const reposWithData = await Promise.all(
                repos.slice(0, 12).map(async repo => {
                    try {
                        const languages = {};
                        let readmeContent = '';
                        
                        // Try to get languages, but don't fail if it doesn't work
                        try {
                            const langResponse = await this.makeRequest(repo.languages_url);
                            if (langResponse.ok) {
                                const langData = await langResponse.json();
                                Object.assign(languages, langData);
                            }
                        } catch (e) {
                            console.warn('Failed to load languages for', repo.name);
                        }
                        
                        // Try to get README, but don't fail if it doesn't work
                        try {
                            const readmeResponse = await this.makeRequest(`https://api.github.com/repos/${repo.full_name}/readme`);
                            if (readmeResponse.ok) {
                                const readme = await readmeResponse.json();
                                readmeContent = atob(readme.content);
                            }
                        } catch (e) {
                            console.warn('Failed to load README for', repo.name);
                        }
                        
                        return { ...repo, languages, readmeContent };
                    } catch (error) {
                        console.warn('Error processing repo', repo.name, error);
                        return { ...repo, languages: {}, readmeContent: '' };
                    }
                })
            );
            
            this.renderRepositories(reposWithData);
        } catch (error) {
            console.error('Failed to load repositories:', error);
            this.showError(`Failed to load repositories: ${error.message}`);
        }
    }

    renderRepositories(repos) {
        const grid = document.getElementById('repo-grid');
        
        if (repos.length === 0) {
            grid.innerHTML = '<div class="loading">No repositories found</div>';
            return;
        }
        
        grid.innerHTML = repos.map(repo => this.createRepoCard(repo)).join('');
    }

    createRepoCard(repo) {
        const techStackBadges = this.getTechStackBadges(repo.languages, repo.readmeContent);
        const readmeInfo = this.extractReadmeInfo(repo.readmeContent);
        const enhancedInfo = this.enhanceRepoInfo(repo, readmeInfo);
    
        return `
            <div class="repo-card">
                <div class="repo-header">
                    <i class="fas fa-folder repo-icon"></i>
                    <a href="${repo.html_url}" target="_blank" class="repo-title">${repo.name}</a>
                    ${enhancedInfo.status ? `<span class="project-status ${enhancedInfo.status.toLowerCase()}">${enhancedInfo.status}</span>` : ''}
                </div>
                <p class="repo-description">${repo.description || enhancedInfo.description || 'No description available'}</p>
                <div class="tech-badges">
                    ${techStackBadges}
                </div>
            </div>
        `;
    }

    enhanceRepoInfo(repo, readmeInfo) {
        if (readmeInfo.features.length > 0 || readmeInfo.description) {
            return readmeInfo;
        }
        
        const features = this.generateSmartFeatures(repo);
        const description = this.generateSmartDescription(repo);
        
        return {
            features,
            status: readmeInfo.status,
            description: description || readmeInfo.description
        };
    }
    
    generateSmartFeatures(repo) {
        const name = repo.name.toLowerCase();
        const languages = Object.keys(repo.languages || {});
        const features = [];
        
        // Specific project features based on name
        if (name.includes('apiautomation') || name.includes('api-automation')) {
            features.push('Complete REST API testing with all HTTP methods (GET, POST, PUT, PATCH, DELETE)');
            features.push('Advanced authentication support (Basic, Digest, Bearer Token chaining)');
            features.push('Comprehensive response validation with JSON Schema and Hamcrest matchers');
        }
        else if (name.includes('privilege-access-console') || name.includes('privileged-access')) {
            features.push('Apache Guacamole PAM testing with clientless remote desktop gateway validation');
            features.push('Enterprise LDAP/Active Directory authentication and RBAC testing');
            features.push('Security testing for input validation, injection prevention, and session management');
        }
        else if (name.includes('ai-threat-analytica') || name.includes('threat-analytica')) {
            features.push('Intelligent threat classification for phishing, malware, and spam detection');
            features.push('LLM guardrails with prompt injection and PII filtering capabilities');
            features.push('Automated anomaly detection using statistical Z-score analysis');
        }
            features.push('Artificial Intelligence implementation');
            features.push('Machine learning algorithms');
            if (languages.includes('Python')) features.push('Python-based AI framework');
        
        else if (name.includes('scan') || name.includes('port') || name.includes('security')) {
            features.push('Network port scanning capabilities');
            features.push('Security vulnerability detection');
            features.push('Real-time monitoring and alerts');
        }
        else if (name.includes('test') || name.includes('auto') || name.includes('healium')) {
            features.push('Automated testing framework');
            features.push('Cross-platform compatibility');
            features.push('Detailed reporting and analytics');
        }
        else if (name.includes('fin') || name.includes('trade') || name.includes('stock')) {
            features.push('Financial data analysis');
            features.push('Real-time market monitoring');
            features.push('Automated trading strategies');
        }
        else if (name.includes('browser') || name.includes('extension') || name.includes('chrome')) {
            features.push('Browser extension functionality');
            features.push('Cross-browser compatibility');
            features.push('User-friendly interface');
        }
        else if (languages.includes('JavaScript') || languages.includes('TypeScript') || languages.includes('HTML')) {
            features.push('Modern web application');
            features.push('Responsive user interface');
            if (languages.includes('JavaScript')) features.push('Interactive JavaScript features');
        }
        else if (languages.includes('Python')) {
            features.push('Python-based solution');
            features.push('Cross-platform compatibility');
            features.push('Modular architecture');
        }
        else {
            if (languages.length > 0) {
                features.push(`${languages[0]}-based implementation`);
                features.push('Clean and maintainable code');
                if (languages.length > 1) features.push('Multi-language integration');
            }
        }
        
        return features.slice(0, 3);
    }
    
    generateSmartDescription(repo) {
        const name = repo.name.toLowerCase();
        const languages = Object.keys(repo.languages || {});
        
        if (name.includes('ai') || name.includes('bot')) {
            return 'An intelligent AI-powered application with machine learning capabilities.';
        }
        if (name.includes('scan') || name.includes('port')) {
            return 'A network scanning tool for security analysis and port detection.';
        }
        if (name.includes('test') || name.includes('auto')) {
            return 'An automated testing framework for reliable software quality assurance.';
        }
        if (name.includes('fin') || name.includes('trade')) {
            return 'A financial analysis tool for market data processing and trading automation.';
        }
        if (name.includes('browser') || name.includes('extension')) {
            return 'A browser extension providing enhanced functionality and user experience.';
        }
        if (languages.includes('Python')) {
            return 'A Python application designed for efficient data processing and automation.';
        }
        if (languages.includes('JavaScript') || languages.includes('TypeScript')) {
            return 'A modern web application built with JavaScript for interactive user experiences.';
        }
        
        return null;
    }

    extractReadmeInfo(readmeContent) {
        if (!readmeContent) return { features: [], status: null, description: null };
        
        const features = [];
        const lines = readmeContent.split('\n');
        let status = null;
        let description = null;
        let inFeatureSection = false;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Look for feature sections
            if (line.toLowerCase().includes('feature') || line.toLowerCase().includes('key') || 
                line.toLowerCase().includes('highlight') || line.toLowerCase().includes('capabilit')) {
                inFeatureSection = true;
                continue;
            }
            
            // Stop at next major section
            if (line.startsWith('##') && inFeatureSection) {
                inFeatureSection = false;
            }
            
            if (line.includes('![') && (line.includes('build') || line.includes('status') || line.includes('version'))) {
                if (line.includes('passing') || line.includes('stable')) status = 'Active';
                else if (line.includes('development') || line.includes('beta')) status = 'Beta';
            }
            
            // Extract meaningful features from lists
            if ((line.startsWith('- ') || line.startsWith('* ') || /^\d+\. /.test(line)) && 
                line.length > 15 && line.length < 150) {
                let feature = line.replace(/^[-*]\s*|^\d+\.\s*/, '').replace(/[*_`]/g, '').trim();
                
                // Skip generic or placeholder features
                if (feature && !feature.toLowerCase().includes('todo') && 
                    !feature.toLowerCase().includes('coming soon') &&
                    !feature.toLowerCase().includes('feature') &&
                    !feature.toLowerCase().includes('support') &&
                    feature.length > 10) {
                    features.push(feature);
                }
            }
            
            // Get description from first substantial paragraph
            if (!description && line.length > 30 && line.length < 200 && 
                !line.startsWith('#') && !line.startsWith('!') && 
                !line.includes('```') && line.includes(' ') &&
                !line.includes('http') && !line.includes('[![')) {
                description = line;
            }
        }
        
        return { features: features.slice(0, 3), status, description };
    }

    extractTechFromReadme(readmeContent) {
        const techPatterns = {
            'React': /react/i,
            'Vue': /vue/i,
            'Angular': /angular/i,
            'Express': /express/i,
            'Django': /django/i,
            'Flask': /flask/i,
            'Next.js': /next\.?js/i,
            'TailwindCSS': /tailwind/i,
            'Bootstrap': /bootstrap/i,
            'MongoDB': /mongodb|pymongo/i,
            'PostgreSQL': /postgres/i,
            'GraphQL': /graphql/i,
            'AWS': /aws|amazon\s*web\s*services/i,
            'Firebase': /firebase/i,
            'FastAPI': /fastapi/i,
            'Kubernetes': /kubernetes|k8s/i,
            'Redis': /redis/i,
            'Nginx': /nginx/i,
            'Docker': /docker/i,
            'Webpack': /webpack/i,
            'Vite': /vite/i,
            'ESLint': /eslint/i,
            'Prettier': /prettier/i,
            'Storybook': /storybook/i,
            'Swagger': /swagger|openapi/i,
            'PyYAML': /pyyaml|yaml/i,
            'Requests': /requests/i,
            'Pytest': /pytest/i,
            'Jest': /jest/i,
            'Mocha': /mocha/i,
            'Cypress': /cypress/i,
            'Selenium': /selenium/i,
            'Playwright': /playwright/i,
            'Healium': /healium/i,
            'TestNG': /testng/i,
            'JUnit': /junit/i,
            'Vitest': /vitest/i
        };
        
        return Object.keys(techPatterns).filter(tech => 
            techPatterns[tech].test(readmeContent)
        );
    }

    getTechStack(languages, readmeContent) {
        const langTech = Object.keys(languages || {}).slice(0, 3);
        const readmeTech = this.extractTechFromReadme(readmeContent || '').slice(0, 3);
        const allTech = [...new Set([...langTech, ...readmeTech])].slice(0, 5);
    
        if (allTech.length === 0) return '';
    
        return allTech.map(tech => {
            const techData = this.techIcons[tech];
            if (techData && techData.icon && techData.icon.startsWith('http')) {
                return `<img src="${techData.icon}" class="tech-icon" alt="${tech}" title="${tech}"/>`;
            }
            // If icon missing, show tech name as text for manual review
            return `<span class="tech-missing" title="Add icon for ${tech}">${tech}</span>`;
        }).join('');
    }
    
        getTechStackBadges(languages, readmeContent) {
        const langTech = Object.keys(languages || {}).slice(0, 3);
        const readmeTech = this.extractTechFromReadme(readmeContent || '').slice(0, 3);
        const allTech = [...new Set([...langTech, ...readmeTech])].slice(0, 5);
    
        if (allTech.length === 0) return '';
    
        return allTech.map(tech => {
            const techData = this.techStack[tech];
            if (techData && techData.badge) {
                // Extract image URL and link URL from markdown badge
                // Format: [![Name](image-url)](link-url)
                const imageMatch = techData.badge.match(/!\[.*?\]\((.*?)\)/);
                const linkMatch = techData.badge.match(/\]\((.*?)\)$/);
                
                if (imageMatch && linkMatch) {
                    const imageUrl = imageMatch[1];
                    const linkUrl = linkMatch[1];
                    return `<a href="${linkUrl}" target="_blank"><img src="${imageUrl}" alt="${tech}" class="badge-img"></a>`;
                }
            }
            return '';
        }).filter(badge => badge !== '').join('');
    }

    getMeaningfulStats(repo, readmeInfo) {
        const stats = [];
        const stars = repo.stargazers_count;
        const forks = repo.forks_count;
        const size = repo.size;
        
        stats.push({
            icon: 'fas fa-calendar',
            value: this.formatDate(repo.updated_at),
            tooltip: 'Last updated'
        });
        
        if (stars > 0) {
            stats.push({
                icon: 'fas fa-star',
                value: stars,
                tooltip: 'GitHub stars'
            });
        } else {
            const complexity = size > 1000 ? 'Large' : size > 100 ? 'Medium' : 'Small';
            stats.push({
                icon: 'fas fa-code',
                value: complexity,
                tooltip: `Project size: ${(size / 1024).toFixed(1)}MB`
            });
        }
        
        if (forks > 0) {
            stats.push({
                icon: 'fas fa-code-branch',
                value: forks,
                tooltip: 'Forks'
            });
        } else if (readmeInfo.features.length > 0) {
            stats.push({
                icon: 'fas fa-list',
                value: `${readmeInfo.features.length} features`,
                tooltip: 'Key features identified'
            });
        } else {
            const langCount = Object.keys(repo.languages || {}).length;
            if (langCount > 1) {
                stats.push({
                    icon: 'fas fa-layer-group',
                    value: `${langCount} langs`,
                    tooltip: 'Programming languages used'
                });
            }
        }
        
        return stats;
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 7) return `${diffDays}d ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)}w ago`;
        if (diffDays < 365) return `${Math.ceil(diffDays / 30)}mo ago`;
        
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short'
        });
    }

    showError(message) {
        document.getElementById('repo-grid').innerHTML = `<div class="loading">${message}</div>`;
    }

    loadDemoData() {
        this.demoMode = true;
        document.getElementById('profile-name').textContent = 'steadhac';
        document.getElementById('profile-bio').textContent = 'QA Automation Engineer & Security Testing Specialist';
        document.getElementById('repo-count').textContent = '6';
        document.getElementById('total-stars').textContent = '63';
        document.getElementById('total-commits').textContent = '250';
        document.getElementById('github-link').href = `https://github.com/${this.username}`;
        
        const demoRepos = [
            {
                name: 'apiautomation',
                description: 'Comprehensive REST API testing framework with advanced authentication and validation',
                html_url: '#',
                updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                stargazers_count: 25,
                forks_count: 5,
                size: 3072,
                languages: { Java: 80, Shell: 15, Makefile: 5 },
                readmeContent: '- Complete REST API testing with all HTTP methods\n- Advanced authentication support\n- Comprehensive response validation'
            },
            {
                name: 'ai-threat-analytica',
                description: 'AI-powered threat detection and analysis platform with LLM guardrails',
                html_url: '#',
                updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
                stargazers_count: 18,
                forks_count: 3,
                size: 2048,
                languages: { Python: 85, JavaScript: 10, Shell: 5 },
                readmeContent: '- Intelligent threat classification\n- LLM guardrails with prompt injection filtering\n- Automated anomaly detection'
            },
            {
                name: 'privilege-access-console',
                description: 'Apache Guacamole PAM testing framework for enterprise security validation',
                html_url: '#',
                updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                stargazers_count: 12,
                forks_count: 2,
                size: 1536,
                languages: { Java: 70, JavaScript: 20, Shell: 10 },
                readmeContent: '- Apache Guacamole PAM testing\n- Enterprise LDAP/Active Directory authentication\n- Security testing for input validation'
            },
            {
                name: 'database-qa-automation',
                description: 'Automated database quality assurance and testing framework',
                html_url: '#',
                updated_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
                stargazers_count: 8,
                forks_count: 1,
                size: 1024,
                languages: { Python: 60, SQL: 30, Shell: 10 },
                readmeContent: '- Automated database testing\n- Data integrity validation\n- Performance benchmarking'
            },
            {
                name: 'github-portfolio-generator',
                description: 'Modern portfolio generator with GitHub API integration and tech stack detection',
                html_url: '#',
                updated_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
                stargazers_count: 0,
                forks_count: 0,
                size: 768,
                languages: { JavaScript: 60, HTML: 25, CSS: 15 },
                readmeContent: '- GitHub API integration\n- Tech stack auto-detection\n- Responsive design'
            },
            {
                name: 'healium-testing-suite',
                description: 'Self-healing test automation framework with AI-powered element detection',
                html_url: '#',
                updated_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
                stargazers_count: 0,
                forks_count: 0,
                size: 512,
                languages: { Python: 80, JavaScript: 20 },
                readmeContent: '- Self-healing test automation\n- AI-powered element detection\n- Cross-browser compatibility'
            }
        ];
        
        this.renderRepositories(demoRepos);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new GitHubPortfolio();
});