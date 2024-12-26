# Restaurant Search App

## Home Screen
![Home Screen](/assets/IMG_4110.png)

## Search Results
![Search Results](/assets/IMG_4109.png)
![Search Results](/assets/IMG_4108.png)

## Food

![Food Results](/assets/food.png)

## Overview
This is a mobile application that allows users to search for restaurants in any location within the United States. Users can input a specific location, browse restaurant categories, and view relevant results. The app provides a seamless way to discover dining options based on preferences and budget.

## Features
- **Search Functionality:** Enter a location to find restaurants in that area.
- **Restaurant Categories:** Filter results based on price ranges and dining preferences.
- **Real-Time API Integration:** Fetch live data from restaurant services for accurate and up-to-date results.
- **Interactive UI:** A clean and responsive interface that enhances the user experience.
- **Cancel Search:** Allows users to easily dismiss the keyboard or cancel a search input.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/restaurant-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd restaurant-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Usage
1. Launch the app on your mobile device or emulator.
2. Enter the desired location (e.g., "New York") in the search bar.
3. Tap the search button or hit "Enter" to view restaurant results.
4. Explore different restaurant categories:
   - Cost Effective ($)
   - Bit Pricer ($$)
   - Big Spender ($$$)
   - Executive Spender ($$$$)
5. Use the **Cancel** button to clear the search input or dismiss the keyboard if needed.

## Technologies Used
- **React Native:** For building the mobile application.
- **Context API & Reducer:** To manage application state effectively.
- **API Integration:** Fetching restaurant data via external APIs.
- **JavaScript/ES6:** Core programming language for development.
- **Flexbox:** For creating responsive layouts.

## Project Structure
```
restaurant-search-app
├── src
│   ├── components
│   │   ├── SearchBar.js
│   │   ├── FoodCategory.js
│   │   └── Details.js
│   ├── screens
│   │   ├── HomeScreen.js
│   │   ├── SearchScreen.js
│   │   └── ItemScreen.js
│   ├── reducers
│   │   └── searchReducer.js
│   ├── utils
│   │   └── api.js
│   └── App.js
├── package.json
└── README.md
```

## API Integration
The app uses an external restaurant API to fetch real-time data. Replace the `getAData` function in `utils/api.js` with your API call implementation.

## Future Enhancements
- Add user authentication for personalized recommendations.
- Enable sorting and advanced filtering options (e.g., by rating or distance).
- Integrate maps to display restaurant locations visually.
- Implement a favorites feature to save preferred restaurants.

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments
- Thanks to [OpenAI](https://openai.com) for assistance with development resources.
- Special thanks to external APIs providing restaurant data.

---

Happy dining! 🍽

