import React from 'react';
import Navigation from '../components/Navigation.jsx';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is a simple Next.js app with a Tailwind CSS navigation bar.
        </p>
      </div>
    </div>
  );
};

export default Home;
