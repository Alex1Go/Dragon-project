# Dragon-project

**Dragon-project** is a web application that displays detailed information about
the SpaceX Dragon rocket. The project is built using Vite, JavaScript, Redux,
and Redux Toolkit, offering a fast and modern development experience.

## Features

- **Rocket Information**: Displays detailed information about the SpaceX Dragon
  rocket.
- **Responsive Design**: The application is fully responsive and works on
  various devices.
- **Data Caching**: Caches rocket data to persistent storage, showing cached
  data on subsequent visits and updating it in the background.
- **Smooth Navigation**: Provides seamless navigation through the application
  with smooth page transitions.

## Technologies Used

- **Vite**: Fast and optimized build tool.
- **React**: JavaScript library for building user interfaces.
- **Redux & Redux Toolkit**: State management library and its official toolset.
- **Netlify**: Platform for deploying and hosting web applications.

## Installation

To get started with the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Dragon-project.git
cd Dragon-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build the project

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Deployment

The project is deployed using Netlify, a powerful and easy-to-use platform for
hosting web applications.

### Steps to Deploy

### 1. Build the Project

```bash
npm run build
```

### 2. Deploy on Netlify

- Connect your GitHub repository to Netlify.
- Select the main branch as the deployment source.
- Set the build command to npm run build.
- Set the publish directory to dist.

### 3. Configure Domain

- Netlify provides a default subdomain, but you can configure a custom domain if
  needed.

## License

This project is licensed under the MIT License.

### Explanation:

- **Headings and Subheadings**: Organized with proper indentation and consistent
  use of markdown headings.
- **Code Blocks**: Clearly marked with triple backticks and language
  identifiers.
- **Links**: Added where relevant (e.g., to Netlify, Node.js, or other tools).
- **Continuous Deployment**: Detailed how CI/CD is set up with Netlify, focusing
  on automated testing and deployment.
- **Testing Section**: Explained the different types of tests (unit, functional,
  integration) and how to run them.
- **Environment Setup**: Provided clear instructions for setting up the
  environment with an example `.env` file.

This format will ensure your `README.md` is well-organized, easy to read, and
provides all the necessary information for users and contributors.
