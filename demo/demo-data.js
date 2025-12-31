// Static demo data for steadhac GitHub profile
// This data was fetched once from GitHub API to avoid rate limits during development

const DEMO_DATA = {
    user: {
        login: "steadhac",
        name: "Carolina Steadham",
        avatar_url: "https://avatars.githubusercontent.com/u/149729635?v=4",
        bio: null,
        public_repos: 8,
        followers: 0,
        following: 0,
        created_at: "2023-11-02T22:25:24Z"
    },
    repositories: [
        {
            name: "assured",
            description: null,
            html_url: "https://github.com/steadhac/rest-assured-api-automation",
            language: "HTML",
            stargazers_count: 0,
            forks_count: 0,
            updated_at: "2025-12-25T02:16:18Z",
            pushed_at: "2025-12-24T18:45:05Z",
            fork: false,
            topics: []
        },
        {
            name: "healenium-selenium-demo",
            description: "Self-healing Selenium test automation framework with Healenium integration",
            html_url: "https://github.com/steadhac/healenium-selenium-demo",
            language: "HTML",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2025-12-24T18:44:27Z",
            pushed_at: "2025-12-24T18:44:23Z",
            fork: false,
            topics: []
        },
        {
            name: "database-qa-automation",
            description: null,
            html_url: "https://github.com/steadhac/database-qa-automation",
            language: "HTML",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2025-12-24T18:43:36Z",
            pushed_at: "2025-12-24T18:43:33Z",
            fork: false,
            topics: []
        },
        {
            name: "privileged-access-console-automation",
            description: "QA Automation Framework for Apache Guacamole PAM Testing - Playwright + TypeScript",
            html_url: "https://github.com/steadhac/privileged-access-console-automation",
            language: "TypeScript",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2025-12-24T18:42:47Z",
            pushed_at: "2025-12-24T18:42:44Z",
            fork: false,
            topics: []
        },
        {
            name: "browser-extension-qa-framework",
            description: null,
            html_url: "https://github.com/steadhac/browser-extension-qa-framework",
            language: "TypeScript",
            stargazers_count: 0,
            forks_count: 0,
            updated_at: "2025-12-24T18:41:28Z",
            pushed_at: "2025-12-24T18:41:24Z",
            fork: false,
            topics: []
        },
        {
            name: "port-scanner",
            description: null,
            html_url: "https://github.com/steadhac/port-scanner",
            language: "Makefile",
            stargazers_count: 0,
            forks_count: 0,
            updated_at: "2025-12-20T19:02:23Z",
            pushed_at: "2025-12-20T19:02:19Z",
            fork: false,
            topics: []
        },
        {
            name: "finbot-ctf",
            description: null,
            html_url: "https://github.com/steadhac/finbot-ctf",
            language: "HTML",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2025-12-18T03:33:13Z",
            pushed_at: "2025-12-07T13:01:10Z",
            fork: true,
            topics: []
        },
        {
            name: "ai-threat-analytics-framework",
            description: null,
            html_url: "https://github.com/steadhac/ai-threat-analytics-framework",
            language: "Python",
            stargazers_count: 1,
            forks_count: 0,
            updated_at: "2025-12-17T16:23:35Z",
            pushed_at: "2025-12-17T16:23:32Z",
            fork: false,
            topics: []
        }
    ],
    // Mock language data for repositories
    languages: {
        "rest-assured-api-automation": { "Java": 45231, "REST-Assured": 12456, "TestNG": 8934, "ExtentReports": 5000, "Maven": 3000 },
        "healenium-selenium-demo": { "Java": 78234, "Selenium": 23456, "Maven": 12000, "TestNG": 8000 },
        "database-qa-automation": { "SQL": 34567, "Python": 23456 },
        "privileged-access-console-automation": { "TypeScript": 89234, "JavaScript": 12345, "Playwright": 8000 },
        "browser-extension-qa-framework": { "TypeScript": 56789, "CSS": 8765 },
        "port-scanner": { "C": 45678, "Makefile": 2345 },
        "finbot-ctf": { "Python": 67890, "FastAPI": 23456, "Pytest": 12345, "HTML": 8000 },
        "ai-threat-analytics-framework": { "Python": 78901, "Pytest": 5000, "PyYAML": 3000, "Requests": 2000 }
    },
    // Mock commit activity (commits in last 30 days)
    commitActivity: {
        "rest-assured-api-automation": 5,
        "healenium-selenium-demo": 8,
        "database-qa-automation": 3,
        "privileged-access-console-automation": 12,
        "browser-extension-qa-framework": 6,
        "port-scanner": 2,
        "finbot-ctf": 1,
        "ai-threat-analytics-framework": 4
    }
};

// Export for use in demo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEMO_DATA;
}