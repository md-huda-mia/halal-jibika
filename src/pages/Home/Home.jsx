import React from "react";
import Hero from "../../components/Hero/Hero";
import AllJobs from "../../components/Jobs/AllJobs";
import HomeJobCard from "../../components/HomeCard/HomeJobCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeJobCard />
    </div>
  );
};

export default Home;
