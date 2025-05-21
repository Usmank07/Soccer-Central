# ⚽ Soccer-Central

Soccer Central is a web-based application that provides real-time and static information related to soccer fixtures, team updates, news, and interactive quizzes for fans. Built using HTML, CSS, and JavaScript, the project is designed to deliver an engaging experience without requiring a backend database.

## Live Demo

Check out the live version here: [Soccer Central](https://usmank07.github.io/Soccer-Central/)

## Features

- **Fixtures Pages**:
  - **AFixtures** and **TFixtures** pages display upcoming and past matches using preloaded match data.

- **Team Updates (TUpdates)**:
  - Displays latest team-related news and updates.

- **Soccer Quiz**:
  - A multiple-choice quiz that tests users’ knowledge of soccer facts. Answers are validated in-browser using JavaScript.

- **Insights Pages**:
- **BarInsights** and **MadInsights** show statistical insights using simple visualization methods.

- **Live Score & News**:
- Simulated live score updates and curated soccer news articles.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js (for serving static content via `server.js`)
- **Data Handling**: Static JSON-like JS files (no database used)
- **Hosting**: GitHub Pages

## Project Structure

├── index.html
├── quiz.html
├── AFixtures.html
├── TFixtures.html
├── TUpdates.html
├── BarInsights.js
├── LiveScore.js
├── LatestNews.js
├── Quiz.js
├── styles.css
├── images/
├── server.js
└── README.md

yaml
Copy
Edit


## Future Improvements

- Add backend with database (e.g., MongoDB or Firebase) for persistent data
- Implement user authentication for quiz tracking
- Fetch real live scores and news via soccer APIs

## License

This project is open-source and available under the MIT License.
