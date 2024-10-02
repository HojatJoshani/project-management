import React from "react";
import Navbar from "./(components)/Navbar";

const dashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar */}
      نوار کناری
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pr-64`}
      >
        {/* Navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default dashboardWrapper;
