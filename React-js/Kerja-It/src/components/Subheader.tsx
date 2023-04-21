import MyBlackButton from "./MyBlackButton";
import MyBlackButtonBorder from "./MyBlackButtonBorder";
import MyButton from "./MyButton";
import MyWhiteButton from "./MyWhiteButton";


function Subheader() {
  return (
    <div className="font-mono">
      <div className="bg-black h-[108px] flex flex-col justify-center items-center">
        <p className=" text-white">
          👻 Tired of being ghosted by employers? Apply for jobs through
          referrals instead with CariKabel.com
        </p>
        <div className="flex-wrap mt-2 space-x-2">
          <MyWhiteButton text="Go to CariKabel.com 🤝" />
          <MyBlackButtonBorder text="No, thank you." />
        </div>
      </div>
      <div className="flex justify-between items-center px-[300px] h-[80px] bg-blue-600">
        <p className="text-white">🚨 Your profile is invisible – employers can't find you.</p>
        <MyWhiteButton text="Edit My Profile"/>
      </div>
    </div>
  );
}
export default Subheader;
