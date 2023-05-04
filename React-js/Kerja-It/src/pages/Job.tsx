import React from "react";
import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Stack from "../components/Stack";
import calendar from "../assets/calendar.png";
import briefcase from "../assets/briefcase.png";
import nav from "../assets/maps-and-flags.png";

function Job(props: any) {
  const param = useParams();

  const filteredArray = JobData.filter((item) => String(item.id) === param.id);

  
  //destructuring

  // destructuring
  //   const array = [1, 2, 3];
  //   console.log(array);

  //   const [a, b, c, d, e] = array;
  //   console.log(a, b, c, d, e);

  const [filteredJob] = filteredArray;
  const date = new Date(filteredJob.post_date);
  const isNew = date.getFullYear() === 2023;
  console.log(filteredJob);
  // Single Job Page -id {param.id}
  return (
    <div className="bg-slate-100 w-[1366px] h-[1447px]">
      <div>
        <Header />
        <Subheader />
      </div>{" "}
      <div className="font-mono flex flex-col items-center mt-10">
        <p className="w-[672px] text-left mb-4">
          Jobs / {filteredJob.job} -{" "}
          <span className="capitalize">{filteredJob.company}</span>
        </p>
        <div className="w-[672px] h-[934px] rounded-md bg-white border-solid border-2 border-gray-300 text-sm flex justify-center items-center">
          <div className="w-[600px] h-[870px] flex flex-col ">
            <div className="flex gap-3">
              {filteredJob.stacks.map((stack: string, index: number) => {
                return (
                  <p
                    key={index}
                    className="flex rounded-md p-2 max-w-[121px] max-h-[25px] bg-gray-200 justify-center items-center "
                  >
                    {stack}
                  </p>
                );
              })}
            </div>
            <h1 className="font-bold text-4xl mt-4">{filteredJob.job}</h1>
            <p className="text-base mt-2">{filteredJob.company}</p>
            <ul>
              <li>
                <img
                  className="w-4 inline-block"
                  src={calendar}
                  alt="calendar-icon"
                />
                <p className="mx-2 inline-block">{filteredJob.post_date}</p>
                {isNew ? (
                <span className="bg-green-300 inline-block px-1 text-sm text-gray-700 ml-2 rounded-sm">
                  New
                </span>
              ) : null}
              </li>
              <li>
                {" "}
                <img className="w-4 inline-block" src={nav} alt="nav-icon" />
                <p className="mx-2 inline-block">{filteredJob.district}</p>
              </li>
              <li>
                <img
                  className="w-4 inline-block"
                  src={briefcase}
                  alt="briefcase-icon"
                />
                <p className="mx-2 inline-block">{filteredJob.work_type}</p>
              </li>
              
            </ul>
            <button className="w-[200px] h-[40px] mt-10 rounded-md bg-[#0078FF] hover:bg-[#066ada] text-white font-[900]">Apply Now 🚀</button>
            <h2 className="mt-8 text-xl">✍️ Job Description</h2>
            <p className="w-[606px] h-[550px] p-7">{filteredJob.details.job_description}</p>
          </div>
        </div>
      </div>
      <h5 className="font-mono text-center hover:cursor-pointer hover:underline mt-10 text-s">
        Applied but no response? Drop your resume here 📥
      </h5>
      <div className="flex flex-row justify-between mt-10 m-10 text-[13px] font-mono text-gray-500 ">
        <ul className="flex gap-5">
          <li>
            <h5>Copyright 2023 Kerja IT</h5>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <h5>Open-Source</h5>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li className="hover:cursor-pointer hover:underline">Email</li>
          <li className="hover:cursor-pointer hover:underline">Twitter</li>
        </ul>
      </div>
    </div>
  );
}

export default Job;
