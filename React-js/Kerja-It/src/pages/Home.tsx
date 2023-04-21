import React from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import malaysiaIcon from "../assets/malaysia.png";
import MyBlackButton from "../components/MyBlackButton";
import MyWhiteButton from "../components/MyWhiteButton";
import rightArrow from "../assets/right-arrow.png";
import JobCard from "../components/JobCard";
import JobData from "../assets/job-directory-data.json";

function Home() {
  return (
    <div style={{ width: "100vw", height: "auto" }} className="bg-slate-100">
      <Header />
      <Subheader />
      {/* hero */}
      <div className="font-mono flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl font-bold">
          Find Tech Jobs In Malaysia{" "}
          <img
            className="inline-block w-10"
            src={malaysiaIcon}
            alt="malaysia-flag-icon"
          />
        </h1>{" "}
        <p className="text-gray-500">
          Let employers find you. Or apply to companies directly.
        </p>
        <div className="w-[500px] flex flex-row justify-center items-center space-x-2 mt-10">
          <MyBlackButton text="🎯 I want companies to find me" />
          <MyWhiteButton text="🔍 Search Jobs" />
        </div>
      </div>
      {/* card-container */}
      <div className="w-[1000px] mx-[50%] translate-x-[-50%] px-[60px]">
        <div className="font-mono mt-2">
          <h1>
            ⏳ Latest Jobs{" "}
            <img
              className="inline-block w-3"
              src={rightArrow}
              alt="right-arrow-icon"
            />
          </h1>
        </div>
        {/* Jobcard */}
        <div className="flex justify-start mt-2 flex-wrap gap-4 max-w-[900px]">
          {JobData.map((job, index) => {
            return <JobCard job={job} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;
