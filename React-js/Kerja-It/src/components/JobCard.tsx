import briefcase from "../assets/briefcase.png";
import calendar from "../assets/calendar.png";
import nav from "../assets/maps-and-flags.png";
import newSticker from "../assets/new-product.png";
import Stack from "../components/Stack";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../constant/config";

function JobCard(props: any) {
  // function to detect if the year is 2023
  const date = new Date(props.job.post_date);
  const isNew = date.getFullYear() === 2023;

  // navigation function
  const navigate = useNavigate();

  return (
    <div
      className="w-[428px] h-[219.6px] font-mono text-sm rounded-md bg-white border-solid border-2 border-gray-300 cursor-pointer"
      onClick={() => {
        navigate(`${BASEURL}/job/${props.job.id}`);
      }}
    >
      <div className="p-3">
        <h1 className="text-base">{props.job.job}</h1>
        <p className="text-gray-500">{props.job.company}</p>
        <ul className="text-gray-500">
          <li>
            <img
              className="w-4 inline-block"
              src={calendar}
              alt="calendar-icon"
            />
            <p className="mx-2 inline-block">{props.job.post_date}</p>
            {isNew ? (
                <span className="bg-green-300 inline-block px-1 text-sm text-gray-700 ml-2 rounded-sm">
                  New
                </span>
              ) : null}
          </li>
          <li>
            <img className="w-4 inline-block" src={nav} alt="nav-icon" />
            <p className="mx-2 inline-block">{props.job.district}</p>
          </li>
          <li>
            <img
              className="w-4 inline-block"
              src={briefcase}
              alt="briefcase-icon"
            />
            <p className="mx-2 inline-block">{props.job.work_type}</p>
          </li>
        </ul>
        <div className="mt-5 flex gap-2">
          {props.job.stacks.map((stack: string, index: number) => {
            return <Stack key={index} text={stack} />;
          })}
        </div>
        <p className="mt-8 text-gray-500">{props.job.post_date}</p>
      </div>
    </div>
  );
}
export default JobCard;
