 # SpaceVue Dashboard
 
 SpaceVue Dashboard is a React-based application designed to display recent space mission data in tabular and graphical formats. This project utilizes AG-Grid for tabular data representation and Chart.js for creating charts.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Data](#api-data)
- [Technologies Used](#technologies-used)


## Overview

SpaceVue Dashboard serves as a monitoring tool for space missions, providing a user-friendly interface to visualize and analyze recent space mission data. The application consists of the following main components:

- **Login Page**: A simple form-based login page with hardcoded authentication.
- **Dashboard**: Displays space mission data using AG-Grid for a clear tabular view.
- **Mission Chart**: Presents mission outcomes using Chart.js in both pie and bar chart formats.


## Key Features

- User authentication via a login form.
- Tabular representation of space mission data using AG-Grid.
- Visualization of mission outcomes through pie and bar charts.
- React-based architecture for front-end development.
- Utilization of Chart.js for data visualization.
  
## Prerequisites

- Node.js installed on your machine
- Access to the internet to fetch data from an external API


## Installation

1. Clone the repository:
   ```bash
   https://github.com/Pooja54KR/spacevue.git
2. Navigate to the project directory:
     ## cd spacevue-dashboard
3. Install dependencies:
    ## npm install


# Usage
To start the application:
## npm start
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Folder Structure
The project structure is organized as follows:

- public/: Contains static assets, HTML template, and favicon.

- src/: Holds the main source code for the SpaceVue Dashboard application.

  -   components/: Contains React components for the login page, dashboard, and mission chart.

  - styles/: Holds CSS files for styling components.

- App.js: Main application component.

- index.js: Entry point of the application.

## API Data
The project fetches space mission data from the AG-Grid example API hosted at:
https://www.ag-grid.com/example-assets/space-mission-data.json

## Technologies Used
- React.js
- AG-Grid for tabular data rendering
- Chart.js for chart visualization
- Axios for fetching API data
- Bootstrap for styling components

## Login credentials 
- username : user
- password: password




