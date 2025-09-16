import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark font-display">Welcome to your Dashboard</h1>
          <p className="mt-6 text-xl text-gray-600">
            This is a placeholder page for authenticated users. You can now access your Findeet account features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;