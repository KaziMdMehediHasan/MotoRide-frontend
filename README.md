# MotoRent : A Bike Rental Service Website

This is a web application for renting bikes. Users can browse available bikes, rent them for a specified period, and make secure payments through Stripe.

## Features

## Expanding the ESLint configuration

- **User Authentication:** Secure user registration and login.
- **Bike Browsing:** Browse available bikes with details like images, descriptions, and rental prices.
- **Bike Search:** Search for bikes by name.
- **Rental Management:** Users can book bikes for specific dates and times.
- **Payment Integration:** Secure payment processing via Stripe.
- **Rental History:** View past and current rentals.
- **Responsive Design:** Works seamlessly on various devices (desktops, tablets, and mobiles).
- **Admin Dashboard:** Manage bikes, users, and rentals.
- **Contact Through Email:** Send your opinions.

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS
- **Backend:** (Please replace with your actual backend tech stack)
  - Node.js (Example)
  - Express.js (Example)
  - PostgreSQL/MongoDB (Example)
- **Payment:**
  - Stripe
- **Other:**
  - Git (Version Control)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/KaziMdMehediHasan/MotoRide-frontend.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd MotoRide-frontend
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd client
    npm install or yarn install
    ```

4.  **Install backend dependencies:**

    ```bash
    cd server
    npm install or yarn install
    ```

    ```backend repo
    https://github.com/KaziMdMehediHasan/bike-rental.git

    ```

5.  **Set up environment variables:**

    - Create a `.env` file at the root of the project and add the following environment variables (replace with your actual values):

    ```
      VITE_STRIPE_PUBLISHABLE_KEY =
      VITE_EMAILJS_SERVICE_ID =
      VITE_EMAILJS_TEMPLATE_ID =
      VITE_STRIPE_PUBLIC_KEY =
    ```

6.  **Run the development servers:**

    ```bash
    # In the client directory
    npm run dev or yarn dev

    # In the server directory
    npm run start:dev or yarn start:dev
    ```

    The frontend will typically run on `http://localhost:3000`, and the backend on `http://localhost:5000` (or the port you configured).

## Usage

1.  Open your browser and navigate to the frontend URL.
2.  Register or log in to your account.
3.  Browse available bikes and select the one you want to rent.
4.  Choose the rental dates and times.
5.  Proceed to checkout and make a secure payment via Stripe.
6.  Manage your rentals in your account dashboard.
