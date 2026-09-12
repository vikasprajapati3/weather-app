
## 🌤️ Weather App

A modern and responsive weather application built with **React + Vite**. Search for a city and view its current weather through a clean and simple interface.

> Built to practice **React, API integration, responsive UI, and modern frontend development**.

## ✨ Features

-   🔎 **Search weather** by city
-   🌡️ **Current temperature** and weather conditions
-   📱 **Responsive design**
-   ⚡ **Fast Vite setup**
-   🔐 **Environment-based API configuration**
-   🚨 **Error handling** for invalid searches

## 🛠️ Tech Stack

-   **React** — UI and components
-   **JavaScript** — Application logic
-   **Vite** — Development and build tool
-   **CSS** — Styling and responsive design
-   **Weather API** — Weather data
-   **ESLint** — Code quality

## 📁 Project Structure

```text
weather-app/
├── api/                  # Backend API routes
├── public/               # Static assets
├── src/                  # Main application source
├── .env.example          # Environment variables
├── .gitignore            # Git ignored files
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── package-lock.json     # Locked dependencies
└── vite.config.js        # Vite configuration

```

## 🔄 How It Works

```text
Search City
    ↓
API Request
    ↓
Weather Data
    ↓
React State
    ↓
UI Update

```

The app sends a request when a city is searched, receives the weather data, and updates the interface using React.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vikasprajapati3/weather-app.git
cd weather-app

```

### 2. Install dependencies

```bash
npm install

```

### 3. Get an API Key

Create a free account with **OpenWeather** and generate an API key from your account dashboard.

Then create your local environment file:

```bash
cp .env.example .env

```

Add your API key to `.env`:

```env
OPENWEATHER_API_KEY=your_openweather_api_key_here

```


### 4. Start the development server

```bash
npm run dev

```

Open the local URL provided by Vite in your browser.

## 🔮 Future Improvements

-   Multi-day forecast
-   Current location detection
-   Improved loading and error states
-   Dark / light mode
-   Weather-based animations

## 👨‍💻 Author

**Vikas Prajapati**

GitHub: https://github.com/vikasprajapati3
