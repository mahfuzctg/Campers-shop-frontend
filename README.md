# Campers Shop

Campers Shop is an e-commerce website tailored for camping enthusiasts, offering a range of camping gear and accessories. This project features a clean, user-friendly interface and incorporates various functionalities to enhance the shopping experience.

## Project Overview

The Campers Shop website includes the following core pages and functionalities:

- **Homepage:** Features a header, navbar, hero section, best-selling products, categories, featured products, a unique section, FAQ, and footer.
- **Products Page:** Displays all products with search, filtering, and sorting options.
- **Product Details Page:** Provides detailed product information and an "Add to Cart" button.
- **Product Management:** Admin interface for managing products, including creation, updates, and deletions.
- **Cart Page:** Manages cart items with quantity controls and pricing details.
- **Checkout Page:** Collects user details and processes orders via cash on delivery or Stripe.
- **About Us Page:** Displays contact information, a Google Map, social media links, mission statement, and team member bios.

### UI/UX Enhancements

- Fully responsive design for various devices.
- State management using Redux.
- Optimized for fast loading times.
- Intuitive navigation and consistent design language.
- Optional accessibility improvements and interactive elements.

### Bonus Features

- Image gallery with a magnifier effect.
- Warning message on page refresh if the cart is not empty.

### Optional Features

- Stripe integration for payment processing.
- Randomly featured products using RTK Query.

## Live Links

- **Netlify Deployment:** [Campers Shop on Netlify](https://camper-shop-frontend.netlify.app/)
- **Vercel Deployment:** [Campers Shop on Vercel](https://campers-shop-backend-tan.vercel.app/)

## Repositories

- **Frontend GitHub Repository:** [Campers Shop Client](https://github.com/mahfuzctg/Campers-shop-frontend)
- **Backend GitHub Repository:** [Campers Shop Backend](https://github.com/mahfuzctg/Campers-shop-backend)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repositories:

   ```bash
   git clone YOUR_GITHUB_CLIENT_REPO_LINK_HERE
   git clone YOUR_GITHUB_BACKEND_REPO_LINK_HERE
   ```

2. Install dependencies for both client and backend:

   ```bash
   cd client
   npm install
   # or
   yarn install

   cd ../backend
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - For the backend, create a `.env` file in the root directory with necessary environment variables.
   - For the frontend, configure environment variables as needed.

4. Start the development servers:

   ```bash
   cd client
   npm start
   # or
   yarn start

   cd ../backend
   npm start
   # or
   yarn start
   ```

## Usage

- Navigate to [http://localhost:3000](http://localhost:3000) for the frontend.
- The backend server will run on [http://localhost:5000](http://localhost:5000).

## Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [YOUR_EMAIL_ADDRESS_HERE].
