class GitHubPortfolioDemo {
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
            'REST API': { icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png', color: '#6366F1' },
            'Chrome DevTools': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg', color: '#4285F4' },
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
            'Requests': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', color: '#3776AB' },
            'TestNG': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/junit/junit-original.svg', color: '#25A162' },
            'Playwright': { icon: 'https://playwright.dev/img/playwright-logo.svg', color: '#2EAD33' },
            'Makefile': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cmake/cmake-original.svg', color: '#064F8C' },
            'SQL': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', color: '#336791' },
            'Healenium': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg', color: '#FF6B6B' },
            'REST API': { icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png', color: '#6366F1' },
            'REST-Assured': { icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png', color: '#6366F1' },
            'ExtentReports': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg', color: '#F46800' },
            'Hamcrest': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/junit/junit-original.svg', color: '#25A162' },
            'Jackson': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-original.svg', color: '#000000' },
            'Apache Guacamole': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg', color: '#4CAF50' },
            'PAM': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', color: '#FF9800' },
            'Maven': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg', color: '#C71A36' },
            'PyYAML': { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/yaml/yaml-original.svg', color: '#CB171E' },
        };
        this.init();
    }

    init() {
        this.loadStaticData();
    }

    loadStaticData() {
        // Load profile data
        document.getElementById('profile-name').textContent = 'Carolina Steadham';
        document.getElementById('profile-bio').textContent = 'QA Automation Engineer & Security Testing Specialist';
        document.getElementById('repo-count').textContent = '8';
        
        // Calculate total stars from repositories
        const totalStars = DEMO_DATA.repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('total-stars').textContent = totalStars;
        
        // Calculate total commits from mock data
        const totalCommits = Object.values(DEMO_DATA.commitActivity).reduce((sum, commits) => sum + commits, 0);
        document.getElementById('total-commits').textContent = totalCommits;
        
        document.getElementById('github-link').href = `https://github.com/${this.username}`;
        document.title = `Carolina Steadham - GitHub Portfolio`;

        // Load repositories with enhanced data
        this.renderRepositories(this.enhanceRepositories(DEMO_DATA.repositories));
    }

    enhanceRepositories(repos) {
        return repos.map(repo => {
            const languages = DEMO_DATA.languages[repo.name] || {};
            const readmeContent = this.generateReadmeContent(repo);
            return {
                ...repo,
                languages,
                readmeContent
            };
        });
    }

    generateReadmeContent(repo) {
        const name = repo.name.toLowerCase();
        
        if (name.includes('apitest') || name.includes('api')) {
            return `# API Test Automation Framework
            
## Features
- Complete REST API testing with all HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Advanced authentication support (Basic, Digest, Bearer Token chaining)
- Comprehensive response validation with JSON Schema and Hamcrest matchers
- Data-driven testing with CSV and JSON test data
- Detailed HTML reporting with screenshots and logs

## Technologies
- Java with TestNG framework
- RestAssured for API testing
- Maven for dependency management
- Allure for reporting`;
        }
        
        if (name.includes('healenium')) {
            return `# Healenium Selenium Demo
            
## Features
- Self-healing Selenium test automation framework with Healenium integration
- Automatic element locator healing when UI changes occur
- Cross-browser testing support (Chrome, Firefox, Safari)
- Page Object Model design pattern implementation
- Comprehensive test reporting and failure analysis

## Technologies
- Java with Selenium WebDriver
- Healenium for self-healing capabilities
- TestNG for test execution
- Docker for containerized testing`;
        }
        
        if (name.includes('database')) {
            return `# Database QA Automation
            
## Features
- Automated database schema validation and testing
- Data integrity checks and constraint validation
- Performance testing for database operations
- SQL injection vulnerability testing
- Automated backup and recovery testing

## Technologies
- Python with pytest framework
- SQLAlchemy for database operations
- PostgreSQL and MySQL support
- Docker for test environment setup`;
        }
        
        if (name.includes('privileged') || name.includes('access')) {
            return `# Privileged Access Console Automation
            
## Features
- QA Automation Framework for Apache Guacamole PAM Testing - Playwright + TypeScript
- Enterprise LDAP/Active Directory authentication testing
- Remote desktop protocol validation (RDP, VNC, SSH)
- Security testing for input validation and session management
- Multi-user concurrent access testing

## Technologies
- TypeScript with Playwright framework
- Apache Guacamole integration
- Docker for containerized testing
- LDAP authentication testing`;
        }
        
        if (name.includes('browser') || name.includes('extension')) {
            return `# Browser Extension QA Framework
            
## Features
- Cross-browser extension testing framework
- Automated UI testing for browser extensions
- Chrome and Firefox extension support
- Background script and content script testing
- Extension performance and memory leak testing

## Technologies
- TypeScript with Playwright
- Chrome Extension APIs
- WebDriver for automation
- Jest for unit testing`;
        }
        
        if (name.includes('port') || name.includes('scanner')) {
            return `# Port Scanner
            
## Features
- Network port scanning and discovery
- Service detection and version identification
- TCP and UDP port scanning capabilities
- Multi-threaded scanning for performance
- Export results in multiple formats

## Technologies
- C programming language
- Socket programming
- Makefile for build automation
- Cross-platform compatibility`;
        }
        
        if (name.includes('finbot') || name.includes('ctf')) {
            return `# FinBot CTF Challenge
            
## Features
- Capture The Flag (CTF) security challenges
- Financial application security testing
- Web application vulnerability assessment
- OWASP Top 10 security testing scenarios
- Educational cybersecurity content

## Technologies
- HTML/CSS/JavaScript frontend
- Security testing scenarios
- Web application vulnerabilities
- Educational security content`;
        }
        
        if (name.includes('ai') || name.includes('threat')) {
            return `# AI Threat Analytics Framework
            
## Features
- Machine learning-based threat detection
- Anomaly detection algorithms
- Real-time security monitoring
- Threat intelligence integration
- Automated incident response

## Technologies
- Python with scikit-learn
- TensorFlow for deep learning
- Pandas for data analysis
- Flask for web interface`;
        }
        
        return `# ${repo.name}
        
## Features
- Modern software development practices
- Clean and maintainable code architecture
- Comprehensive testing coverage
- Documentation and examples

## Technologies
- ${Object.keys(DEMO_DATA.languages[repo.name] || {}).join(', ')}`;
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
        const techStack = this.getTechStack(repo.languages, repo.readmeContent);
        
        return `
            <div class="repo-card">
                <h3><a href="${repo.html_url}" target="_blank" class="repo-title">${repo.name}</a></h3>
                <p class="repo-description">${repo.description || this.generateSmartDescription(repo) || 'A software project'}</p>
                <div class="tech-stack">
                    ${techStack}
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
            status: 'Active',
            description: description || readmeInfo.description
        };
    }
    
    generateSmartFeatures(repo) {
        const name = repo.name.toLowerCase();
        const languages = Object.keys(repo.languages || {});
        const features = [];
        
        if (name.includes('apitest') || name.includes('api')) {
            features.push('Complete REST API testing with all HTTP methods');
            features.push('Advanced authentication support with token chaining');
            features.push('Comprehensive response validation with JSON Schema');
        }
        else if (name.includes('healenium')) {
            features.push('Self-healing Selenium test automation framework');
            features.push('Automatic element locator healing for UI changes');
            features.push('Cross-browser testing with comprehensive reporting');
        }
        else if (name.includes('database')) {
            features.push('Automated database schema validation and testing');
            features.push('Data integrity checks and performance testing');
            features.push('SQL injection vulnerability assessment');
        }
        else if (name.includes('privileged') || name.includes('access')) {
            features.push('Apache Guacamole PAM testing framework');
            features.push('Enterprise LDAP/Active Directory authentication');
            features.push('Remote desktop protocol validation (RDP, VNC, SSH)');
        }
        else if (name.includes('browser') || name.includes('extension')) {
            features.push('Cross-browser extension testing framework');
            features.push('Automated UI testing for browser extensions');
            features.push('Performance and memory leak testing');
        }
        else if (name.includes('port') || name.includes('scanner')) {
            features.push('Network port scanning and service discovery');
            features.push('Multi-threaded scanning for performance');
            features.push('Export results in multiple formats');
        }
        else if (name.includes('ai') || name.includes('threat')) {
            features.push('Machine learning-based threat detection');
            features.push('Real-time security monitoring and analysis');
            features.push('Automated incident response capabilities');
        }
        else if (name.includes('finbot') || name.includes('ctf')) {
            features.push('Capture The Flag security challenges');
            features.push('Financial application security testing');
            features.push('OWASP Top 10 vulnerability scenarios');
        }
        else {
            if (languages.length > 0) {
                features.push(`${languages[0]}-based implementation`);
                features.push('Clean and maintainable code architecture');
                if (languages.length > 1) features.push('Multi-language integration');
            }
        }
        
        return features.slice(0, 3);
    }
    
    generateSmartDescription(repo) {
        const name = repo.name.toLowerCase();
        
        if (name.includes('api') || name.includes('test')) {
            return 'Comprehensive API testing framework with advanced validation and reporting capabilities.';
        }
        if (name.includes('healenium')) {
            return 'Self-healing Selenium test automation framework with AI-powered element detection.';
        }
        if (name.includes('database')) {
            return 'Automated database quality assurance and performance testing framework.';
        }
        if (name.includes('privileged') || name.includes('access')) {
            return 'Enterprise privileged access management testing framework for security validation.';
        }
        if (name.includes('browser') || name.includes('extension')) {
            return 'Cross-browser extension testing framework with automated UI validation.';
        }
        if (name.includes('port') || name.includes('scanner')) {
            return 'Network security scanning tool for port discovery and service identification.';
        }
        if (name.includes('ai') || name.includes('threat')) {
            return 'AI-powered threat detection and analysis platform with machine learning capabilities.';
        }
        if (name.includes('finbot') || name.includes('ctf')) {
            return 'Financial security CTF challenges for cybersecurity education and training.';
        }
        
        return null;
    }

    extractReadmeInfo(readmeContent) {
        if (!readmeContent) return { features: [], status: 'Active', description: null };
        
        const features = [];
        const lines = readmeContent.split('\n');
        let description = null;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Extract features from lists
            if ((line.startsWith('- ') || line.startsWith('* ') || /^\d+\. /.test(line)) && 
                line.length > 15 && line.length < 150) {
                let feature = line.replace(/^[-*]\s*|^\d+\.\s*/, '').replace(/[*_`]/g, '').trim();
                
                if (feature && !feature.toLowerCase().includes('todo') && 
                    !feature.toLowerCase().includes('coming soon') &&
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
        
        return { features: features.slice(0, 3), status: 'Active', description };
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
            'Redis': /redis/i,
            'Nginx': /nginx/i,
            'Docker': /docker/i,
            'Selenium': /selenium/i,
            'Playwright': /playwright/i,
            'Healenium': /healenium/i,
            'TestNG': /testng/i,
            'JUnit': /junit/i,
            'Pytest': /pytest/i,
            'Jest': /jest/i,
            'Cypress': /cypress/i,
            'Apache Guacamole': /guacamole/i,
            'PAM': /pam|privileged.*access/i
        };
        
        return Object.keys(techPatterns).filter(tech => 
            techPatterns[tech].test(readmeContent)
        );
    }

    getTechStack(languages, readmeContent) {
        const langTech = Object.keys(languages || {}).slice(0, 5);
        const readmeTech = this.extractTechFromReadme(readmeContent || '').slice(0, 3);
        const allTech = [...new Set([...langTech, ...readmeTech])].slice(0, 6);
        
        if (allTech.length === 0) return '';
        
        return allTech.map(tech => {
            const techData = this.techIcons[tech] || { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/devicon/devicon-original.svg', color: '#6366F1' };
            
            return `<img src="${techData.icon}" class="tech-icon" alt="${tech}" title="${tech}"/>`;
        }).join('');
    }

    getMeaningfulStats(repo, readmeInfo) {
        const stats = [];
        const stars = repo.stargazers_count;
        const forks = repo.forks_count;
        const commits = DEMO_DATA.commitActivity[repo.name] || 0;
        
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
            stats.push({
                icon: 'fas fa-code-branch',
                value: `${commits} commits`,
                tooltip: 'Recent commits (30 days)'
            });
        }
        
        if (forks > 0) {
            stats.push({
                icon: 'fas fa-code-branch',
                value: forks,
                tooltip: 'Forks'
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
}

document.addEventListener('DOMContentLoaded', () => {
    new GitHubPortfolioDemo();
});