import React from "react";
import Hero from "../../components/Hero/Hero";
import AllJobs from "../../components/Jobs/AllJobs";
import HomeJobCard from "../../components/HomeCard/HomeJobCard";
import HoldsUs from "../../components/HoldsUs/HoldsUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeJobCard />
      <HoldsUs />
    </div>
  );
};

export default Home;
