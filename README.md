# My Interior Bud

Welcome to **My Interior Bud**, an innovative web application designed to transform your interior design experience using the power of AI. This project leverages cutting-edge technology to provide users with a seamless and interactive platform for redesigning interiors.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **AI-Powered Interior Redesign**: Reimagine your living spaces with advanced AI algorithms.
- **User-Friendly Interface**: Navigate through various design options with ease.
- **Customizable Options**: Tailor the redesign to your specific needs and preferences.
- **Real-Time Updates**: Experience real-time updates and previews as you make changes.
- **Secure and Scalable**: Built with modern web technologies for a secure and scalable solution.

## Technologies Used

- **Next.js**: For server-side rendering and optimized performance.
- **React**: To create dynamic and responsive user interfaces.
- **Tailwind CSS**: For rapid styling and design consistency.
- **Firebase**: For secure storage and data management.
- **Replicate API**: To integrate AI capabilities for image processing.
- **Neon.tech**: For advanced cloud-based solutions.
- **Clerk.com**: For user authentication and management.
- **PayPal Developer**: For secure payment processing.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/gohar-wahidy/MyInteriorBudAI.git
   cd MyInteriorBudAI
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add the necessary environment variables:
   ```plaintext
   NEXT_PUBLIC_DATABASE_URL=
   DATABASE_URL=" NEXT_PUBLIC_DATABASE_URL in quotes "
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   NEXT_PUBLIC_REPLICATE_API_TOKEN=
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

Once the server is running, you can start using My Interior Bud to redesign your interiors. Upload images, select your preferences, and watch as the AI transforms your space.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Submit a pull request to the main repository.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.
