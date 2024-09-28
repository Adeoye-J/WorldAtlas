# World Atlas

This is a React-based web application that provides detailed information about countries around the world. The app fetches data from the [REST Countries API](https://restcountries.com) and displays it in an intuitive and user-friendly interface.

## Features

- Browse country details including native name, population, region, subregion, capital, top-level domain, currencies, languages, and more.
- Search for countries by name.
- Filter countries by region.
- View border countries with their full common names.
- Responsive and mobile-friendly design.
  
## Project Structure

The project is organized into components for better modularity and scalability:

- `CountryProvider`: Handles fetching country data and manages global state.
- `CountryDetails`: Displays detailed information about a selected country.
- `DropdownFilter`: Allows users to filter countries by region.
  
## Screenshots

- **Homepage:** Displays a list of countries with search and filter functionality.
- **Country Details Page:** Shows detailed information about a selected country, including borders.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/country-info-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd country-info-app
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

- On the homepage, you can search for countries by name or filter by region.
- Click on a country to view detailed information such as native names, population, region, and more.
- Explore border countries by clicking on the country names shown under the borders section.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **SCSS**: Used for styling the components with more flexibility and reusable CSS.
- **REST Countries API**: Provides country data.
- **React Router**: For navigating between different pages.
- **React Icons**: To display icons like the back button (`FaBackward`).

## Code Overview

### `CountryProvider`

This component provides the global state for country data and handles fetching data from the REST Countries API. It includes the following key features:

- **State Management**: Manages loading states, errors, search term, and region filters.
- **Context API**: Shares state across components via React's Context API.

### `CountryDetails`

Displays detailed information about a specific country:

- **Native Name**: Shows the native names for the selected country.
- **Currencies & Languages**: Lists the country's currencies and languages.
- **Borders**: Shows neighboring countries with buttons linked to their details.

### `DropdownFilter`

Handles region-based filtering by allowing the user to select a region from a dropdown menu.

## Folder Structure

```
src/
├── assets/            # Images and icons
├── components/        # Reusable UI components
├── context/           # React Context for global state
├── pages/             # Different pages of the app (e.g., CountryDetails)
├── styles/            # Global styles and SCSS files
└── App.js             # Main app component
```

## Future Improvements

- Add pagination for improved navigation through a large number of countries.
- Improve error handling with user-friendly messages.
- Implement caching to reduce API calls and improve performance.
  
## Contributing

If you would like to contribute to this project, please feel free to submit a pull request or open an issue. Contributions are welcome and appreciated!

## License

This project is licensed under the MIT License.
