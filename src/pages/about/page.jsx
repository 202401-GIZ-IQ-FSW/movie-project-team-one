// import React from 'react'
// import Layout from "@/components/Layout";
// import "../../app/globals.css";

// function About() {
//   return (
//     <Layout>About</Layout>
//   )
// }

// export default About;

import React from 'react';
import Layout from "@/components/Layout";
import "../../app/globals.css";

function About() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 ">About Us</h1>
            <p className="text-lg mb-4">Welcome to our movie website! We are a team of passionate individuals dedicated to creating amazing products.</p>
            <p className="text-lg mb-4">Our mission is to provide high-quality solutions that meet our customers' needs.</p>
            <p className="text-lg">Feel free to contact us if you have any questions or inquiries. We're here to help!</p>
          </div>
        </div>
        {/* <footer className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            Footer Content
          </div>
        </footer> */}
      </div>
    </Layout>
  )
}

export default About;
