// src/pages/home/Home.js
import React from 'react';
import MyMainPage from '../../components/mainpage';
import Featured from '../../components/featured';
import Residence from '../../components/residence';
import Chose from '../../components/choseus';
import HelpPeople from '../../components/helppeople';
import SimpleBegin from '../../components/simplybegin';
import Footer from '../../components/footer';


const Home = () => {

  return (
    <div className="home">
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