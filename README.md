# Movieapp

## Overview

Movieapp is a React-based project designed to search and track save movies. The application demonstrates the implementation of key React concepts, showcasing best practices and methodologies.

## Features

- **Search bar**: Implemented a typical search bar for finding movies based on their name.
- **Watchlist**: Second page so the users can save their favorite movies for later watching.
- **Filters**: Implemented a Genre and rating filter for better user searching.

## Prerequisites

- Node.js (version 14.x or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movieapp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movieapp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
├── src
│   ├── components      # Contains reusable React components
│   ├── styles          # CSS/SCSS files for styling
│   ├── App.js          # Main application component
│   └── index.js        # Entry point of the application
├── public
│   └── images          # Contains all movies images
│   └── index.html      # HTML template
│   └── manifest.json   # JSON with the manifest
│   └── movies.json     # JSON with all movie
└── package.json        # Project dependencies and scripts
```

## Key Concepts

- **useState**: Manages individual component state, ensuring dynamic UI updates based on user interactions.
- **useReducer**: Handles centralized and more complex state logic with predictable updates, suitable for larger state management needs.
- **useEffect**: Allows side effects such as fetching data or directly interacting with the DOM, enhancing component functionality.
- **Filter**: Provides a way to create refined data views by iterating through collections based on specific conditions.
- **Map**: Transforms arrays into new structures, simplifying the rendering of lists in the UI.
- **Prop Drilling**: Facilitates controlled communication between deeply nested components by passing props through intermediate layers.
- **Case Scenarios**: Demonstrates how the application handles different user workflows and edge cases with robust logic.


## License

This project is licensed under the MIT License. See the LICENSE file for details.
