import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import { StickyScroll } from './components/ui/sticky-scroll-reveal';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  // Define your content array here with title, description, and image URL
  const content = [
    {
      title: "Title 1",
      description: "Description 1",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_KlOOGJu71gbYEPxd25FZGd5nemMcES9SkdODyBlMQ&s",
      content: "Content 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgCEUgfNmMLH_kYpcXQEBF5URGUIZF6kDGXoi7ur6DNTjv8xo0IUe4JJc2ZpW4YVQyyE&usqp=CAU",
      content: "Content 2",
    },
    {
      title: "Title 1",
      description: "Description 1",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_KlOOGJu71gbYEPxd25FZGd5nemMcES9SkdODyBlMQ&s",
      content: "Content 1",
    },

    {
      title: "Title 2",
      description: "Description 2",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgCEUgfNmMLH_kYpcXQEBF5URGUIZF6kDGXoi7ur6DNTjv8xo0IUe4JJc2ZpW4YVQyyE&usqp=CAU",
      content: "Content 2",
    },
    // Add more items as needed
  ];


  return (
    <div className='bg-black'>
      <Navbar />
      <Header />
      <Cards />
    
      <StickyScroll content={content} />
     <GetStarted/>
     <Footer/>
    </div>
  );
}

export default App;
