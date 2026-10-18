# 🚀 DigiTools — Digital Tools Buying Website

A modern, responsive digital marketplace where users can explore premium digital products, view product details, and add their favorite tools to a shopping cart.

🌐 **Live Website:** [https://digi-tools-pi.vercel.app/](https://digi-tools-pi.vercel.app/)

## 📌 Project Overview

**DigiTools** is a digital tools buying website designed to provide a simple, user-friendly shopping experience. It showcases digital products such as AI writing tools, design templates, stock assets, automation tools, resume builders, and social media content kits.

The website features a clean interface, modern purple gradients, responsive product cards, and interactive cart functionality.

## ✨ Features

- **Premium Product Catalog:** Browse a collection of digital tools with product names, descriptions, prices, icons, tags, and features.
- **Dynamic Product Cards:** Display product information dynamically using JSON data.
- **Products & Cart Toggle:** Switch between the product catalog and shopping cart.
- **Add to Cart:** Add selected products using the Buy Now button.
- **Dynamic Cart Counter:** Automatically updates the number of selected cart items.
- **Remove Products:** Remove individual items from the cart.
- **Empty Cart State:** Displays a helpful message when the cart has no items.
- **Cart Total:** Calculates the combined listed prices of selected items.
- **Checkout Interaction:** Clears all cart items when Proceed to Checkout is clicked.
- **Responsive Design:** Adapts the layout for desktop, tablet, and mobile screens.
- **Modern UI:** Uses purple gradients, clean typography, product badges, and consistent spacing.

## 🛠️ Technologies & Tools

| Technology | Purpose |
|---|---|
| React.js | Component-based user interface development |
| JavaScript (ES6+) | Application logic and interactivity |
| Tailwind CSS | Responsive styling and layout |
| DaisyUI | Additional UI components and styling utilities |
| JSON | Structured product data management |
| React-Toastify | Toast notifications, when integrated |
| Vite | Development server and production build |
| npm | Package management |
| Git & GitHub | Version control and source code management |
| Vercel | Website deployment and hosting |
| VS Code | Code editor and development environment |

## 🛍️ Product Categories

The website includes six sample digital products:

1. **AI Writing Pro** — AI-assisted writing and content generation.
2. **Design Templates Pack** — Templates for presentations, social media, and marketing.
3. **Premium Stock Assets** — Stock photos, videos, and graphics.
4. **Automation Toolkit** — Tools for automating repetitive workflows.
5. **Resume Builder Pro** — Resume and cover letter creation.
6. **Social Media Content Kit** — Assets and tools for social media content.

Product information is maintained in a JSON file, making it easy to add, remove, or update products without rewriting the product card component.



## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites

Install the following before starting:

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Git (optional, for version control)

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Navigate to the project directory

```bash
cd digital-tools-buying-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the website.

### 5. Create a production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 💡 Project Impact

DigiTools demonstrates how a digital product marketplace can present multiple products through a structured, interactive interface.

- **Simplifies product discovery:** Users can browse several digital tools in one place.
- **Improves shopping interaction:** The cart provides immediate feedback when products are added or removed.
- **Supports maintainability:** Separating product data from UI components makes updates easier.
- **Encourages reusable development:** React components help keep the code organized and easier to extend.
- **Promotes responsive accessibility:** A responsive layout helps users browse on different screen sizes.

## 🎯 Benefits

### For Users

- Browse digital products in an organized catalog.
- Compare product prices, descriptions, and included features.
- Track selected products through the cart counter.
- Remove unwanted items and review the combined price.
- Use the website on desktop, tablet, or mobile devices.

### For Developers

- Practice React components, props, and state management.
- Learn to render JSON data dynamically with JavaScript `map()`.
- Understand event handling and conditional rendering.
- Build responsive layouts using Tailwind CSS.
- Develop a foundation for adding authentication, payment integration, and backend services.

## 🧠 Key Learning Outcomes

This project provides practical experience with:

- React functional components and `useState`.
- Passing data and event handlers through props.
- Rendering dynamic product lists from JSON.
- Managing shared cart state.
- Adding and removing cart items.
- Calculating totals using JavaScript array methods.
- Building responsive interfaces.
- Preparing a React application for production deployment.

## 🔮 Future Improvements

Potential enhancements include:

- User registration and authentication.
- Product search, filtering, and sorting.
- Persistent cart data using local storage.
- Product detail pages.
- Wishlist functionality.
- Real payment gateway integration.
- Backend API and database integration.
- Order history and purchase management.
- React-Toastify notifications for cart actions.
- Accessibility improvements and automated testing.

## ⚠️ Current Limitations

This project demonstrates the frontend shopping experience. The current cart and checkout interactions do not process real payments or create actual orders. Product data is stored locally in JSON, and cart state resets when the page is refreshed unless persistence is added.

## 👨‍💻 Author: Abdullah Tawsif  

**Project:** DigiTools — Digital Tools Buying Website

**Live Demo:** [https://digi-tools-pi.vercel.app/](https://digi-tools-pi.vercel.app/)

---

⭐ If you find this project useful, consider giving the repository a star on GitHub.

*Built with React.js, Tailwind CSS, and JavaScript.*