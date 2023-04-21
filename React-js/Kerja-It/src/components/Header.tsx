import MyButton from "./MyButton"
import MyBlackButton from "./MyBlackButton"

function Header (){
    return(<div>
        <header className="flex justify-between items-center mx-[200px] h-[80px]">
          <div className="flex items-center">
            <div className="w-[30px] h-[30px] rounded bg-black text-white text-center leading-[30px] font-mono">
              IT
            </div>
            <h1 className="mx-5 font-mono">kerja-IT.com</h1>
          </div>
  
          <div className="space-x-2">
            <MyButton text="🏹Talents" />
            <MyButton text="📢Post Jobs" />
            <MyBlackButton text="👋eman bukhori" />
          </div>
        </header>
      </div>)
}
export default Header