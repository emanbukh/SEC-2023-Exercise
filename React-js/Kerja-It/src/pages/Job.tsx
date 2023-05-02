import React from "react";
import { useParams } from "react-router-dom";

import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Subheader from "../components/Subheader";

function Job(props:any) {
  const param = useParams();

  const filteredArray = JobData.filter((item)=>String(item.id)===param.id)
  //destructuring

   // destructuring
  //   const array = [1, 2, 3];
  //   console.log(array);

  //   const [a, b, c, d, e] = array;
  //   console.log(a, b, c, d, e);


  const [filteredJob]=filteredArray
  console.log(filteredJob);
  // Single Job Page -id {param.id}
  return (
    <div>
      <div><Header/><Subheader/><p>Jobs
        </p></div>
    </div>
  );
}

export default Job;
