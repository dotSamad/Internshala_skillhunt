import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Search from './components/SearchDiv/Search';
import Jobs from './components/JobDiv/Jobs';
import Value from './components/ValueDiv/Value';
import Footer from './components/FooterDiv/footer';

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App
