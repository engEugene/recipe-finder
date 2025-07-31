# Recipe Finder App 🍳

A modern, responsive web application that allows users to search and discover recipes from around the world using TheMealDB API.

## 🌟 Features

- **Recipe Search**: Search for recipes by keywords, ingredients, or meal names
- **Recipe Cards**: Beautiful card-based layout displaying recipe thumbnails and basic information
- **Detailed View**: Click on any recipe to view comprehensive details including:
  - Full recipe instructions
  - Complete ingredient list with measurements
  - Recipe category and origin
  - YouTube video links (when available)


## 🚀 Live Demo

[View the live application here](#) *(Add your deployment link)*

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Vanilla JavaScript with async/await
- **TheMealDB API**: Free recipe database API
- **Font Awesome**: Icons for enhanced UI
- **Responsive Design**: Mobile-first approach

## 📦 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or package managers required

### Setup Instructions

**Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-finder.git
   cd recipe-finder
   ```

## 🎯 Usage

### Basic Search
1. Enter a search term in the search box (e.g., "chicken", "pasta", "dessert")
2. Click the "Search" button or press Enter
3. Browse through the recipe cards that appear

### Viewing Recipe Details
1. Click on any recipe card
2. View the detailed recipe information including:
   - Recipe image
   - Complete ingredients list with measurements
   - Step-by-step cooking instructions
   - Recipe category
   - YouTube video link (if available)

### Navigation
- Use the "Back to recipes" button to return to the search results
- The search box is cleared after each successful search

## 🔌 API Integration

This application uses **TheMealDB API** - a free, open-source recipe database.

### API Endpoints Used

- **Search Meals**: `https://www.themealdb.com/api/json/v1/1/search.php?s={searchTerm}`
- **Get Meal Details**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}`

### API Features
- No API key required
- Free to use
- Comprehensive recipe database
- High-quality images
- Detailed ingredient lists
- Cooking instructions
- YouTube video links

## 📁 Project Structure

```
recipe-finder/
├── index.html          # Main HTML file
├── index.js            # JavaScript functionality
├── style.css           # CSS styling
├── README.md           # Project documentation
└── .git/              # Git repository
```

### File Descriptions

- **`index.html`**: Main HTML structure with semantic markup
- **`index.js`**: Core JavaScript functionality including:
  - API integration
  - Search functionality
  - DOM manipulation
  - Error handling
- **`style.css`**: Complete styling with responsive design


### UI Components
- Search input with validation
- Recipe cards with hover effects
- Modal-style detailed view
- Error message containers
- Loading states



### Common Issues

1. **No recipes found**
   - Try different search terms
   - Check your internet connection
   - Verify the API is accessible

2. **Images not loading**
   - TheMealDB occasionally has image loading issues
   - Refresh the page or try a different search

3. **Search not working**
   - Ensure JavaScript is enabled in your browser
   - Check browser console for error messages

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Contribution Guidelines
- Follow existing code style
- Add comments for new functionality
- Test on multiple browsers
- Ensure responsive design works
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TheMealDB** for providing the free recipe API
- **Font Awesome** for the beautiful icons
- **Open source community** for inspiration and tools

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review the API documentation at [TheMealDB](https://www.themealdb.com/api.php)

---

**Made with ❤️ for food lovers everywhere** 