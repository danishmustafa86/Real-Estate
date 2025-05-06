// src/pages/home/Home.js
import React from 'react';
import MyMainPage from '../../components/mainpage';
import Featured from '../../components/featured';
import Residence from '../../components/residence';
import Chose from '../../components/choseus';
import HelpPeople from '../../components/helppeople';
import SimpleBegin from '../../components/simplybegin';
import Footer from '../../components/footer';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Home = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="home">
      <button onClick={handleLogout}>Logout</button>
      <MyMainPage />
      <Featured />
      <Residence />
      <Chose />
      <HelpPeople />
      <SimpleBegin />
      <Footer />
    </div>
  );
};

export default Home;
