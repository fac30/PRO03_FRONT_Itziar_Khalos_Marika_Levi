import { RiArrowLeftSLine } from "react-icons/ri";
import { RiVolumeMuteFill } from "react-icons/ri";
import { RiVolumeUpFill } from "react-icons/ri";
import "../App.css";

type NavProps = { title: string };

function Navbar(props: NavProps) {
  return (
    <>
      <nav className="navbar flex-col w-full px-4 py-8">
        <div className="section-navbar flex justify-between items-center px-4 pb-4">
          <div className="title-section flex justify-start items-center gap-4 ">
            <RiArrowLeftSLine />
            <h2 className="navTitle text-2xl">{props.title}</h2>
          </div>
          <div className="audio-section flex items-center">
            {/* Add event listener to change on click + connect to the spotify */}
            <RiVolumeMuteFill />
            <RiVolumeUpFill />
          </div>
        </div>
        <hr className=""></hr>
      </nav>
    </>
  );
}

export default Navbar;
