# Recipe-Finder
"Recipe Finder App is a simple React application that allows users to search for recipes, view detailed information like ingredients and instructions, and explore new cooking ideas. It uses the Spoonacular API to fetch and display recipe data. Whether you're a cooking enthusiast or just looking for meal inspiration, this app is perfect for you!"
# Recipe App (React + API Integration)

A simple **Recipe Finder App** built with **React** that allows users to search for recipes using an external API (Spoonacular). The app displays a list of recipes, including the ingredients and instructions for each recipe.

## Features:
- Search for recipes by name.
- View detailed recipe information, including ingredients and preparation instructions.
- Responsive UI to view recipes on both mobile and desktop.
- Integration with Spoonacular API for fetching recipes and details.

## Technologies Used:
- **React**: Frontend framework for building the user interface.
- **Axios**: Library for making API requests.
- **React Router**: For navigation between pages (home page and recipe details page).
- **Spoonacular API**: External API to fetch recipes and their details.

## Setup Instructions:
To get started with the project on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/recipe-app.git
    cd recipe-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Add your API key**:
    - Go to [Spoonacular API](https://spoonacular.com/food-api) and sign up for an API key.
    - Create a `.env` file in the root of the project and add your API key:
      ```
      REACT_APP_API_KEY=your_spoonacular_api_key
      ```

4. **Run the development server**:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## How It Works:
- The app allows users to search for recipes based on a keyword.
- It fetches the search results from the Spoonacular API and displays them as recipe cards.
- Users can click on a recipe to view detailed information, including ingredients and instructions.

## Contributing:
Feel free to fork this repository and contribute to the project! You can open issues or submit pull requests if you find any bugs or want to add new features.

## License:
This project is open-source and available under the [MIT License](LICENSE).
