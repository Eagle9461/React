import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import Navbar from "components/Navbar.js";
import Header from "views/home/Dashboard.js";
import TrendingJobs from "views/home/TrendingJobs.js";
import TrendingJobsSearch from "views/home/TrendingJobsSearch.js";
import PopularCourses from "views/home/PopularCourses.js";
import LinkOtherJobsites from "views/home/LinkOtherJobsites.js";
import SupportForYou from "views/home/SupportForYou.js";
import Footer from "components/Footer.js";

// sections for this page


function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <TrendingJobs />
      <TrendingJobsSearch />
      <PopularCourses />
      <LinkOtherJobsites />
      <SupportForYou />
      <Footer />
    </div>
  );
}

export default Home;
