import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import jobs from "../../assets/data";
import styles from "./FindJobs.module.css";
import AllJobs from "../../components/Jobs/AllJobs";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
const FindJobs = () => {
  const [jobData, setJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const searchTermValue = searchTerm.toLowerCase();

  const [isLoading, setIsLoading] = useState(false);

  //   ======== search data by location =====
  const locationSearchHandler = () => {
    const filteredData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );

    setJobData(filteredData);
  };

  // =====================================
  const filterJobData = (e) => {
    const filterValue = e.target.value;
    if (filterValue == "full-time") {
      const filteredData = jobs.filter((job) => job.contract == "Full Time");
      setJobData(filteredData);
    } else if (filterValue == "part-time") {
      const filteredData = jobs.filter((job) => job.contract == "Part Time");
      setJobData(filteredData);
    } else if (filterValue == "freelancer") {
      const filteredData = jobs.filter((job) => job.contract == "Freelancer");
      setJobData(filteredData);
    } else if (filterValue == "contract") {
      const filteredData = jobs.filter((job) => job.contract == "Contract");
      setJobData(filteredData);
    } else {
      setJobData(jobs);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/posts`);
        setJobData(res?.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`${styles.job_list}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.job_list_wrapper}`}>
          <div className={`${styles.search_panel}`}>
            <div className={`${styles.search_panel_01}`}>
              <span>
                <CiSearch className={`${styles.icon_search_form}`} />
              </span>
              <input
                type="text"
                placeholder="Search by title, companies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className={`${styles.search_panel_02}`}>
              <span>
                <IoLocation className={`${styles.icon_search_form}`} />
              </span>
              <input
                type="text"
                placeholder="Search by location"
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button
                className={`${styles.btn}`}
                onClick={locationSearchHandler}>
                Search
              </button>
            </div>
            <div className={`${styles.search_panel_03}`}>
              <select onChange={filterJobData}>
                <option> Filter job by </option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelancer">Freelancer</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
        </div>
        {/* ========= */}
        <div className="jobs_wrapper">
          <AllJobs
            jobData={jobData}
            searchTerm={searchTerm}
            searchTermValue={searchTermValue}
          />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
