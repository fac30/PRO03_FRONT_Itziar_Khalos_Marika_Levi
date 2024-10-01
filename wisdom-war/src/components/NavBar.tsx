import { RiArrowLeftSLine } from "react-icons/ri";
import { RiVolumeMuteFill } from "react-icons/ri";
import { RiVolumeUpFill } from "react-icons/ri";
import "../App.css";

type NavProps = { title: string };

function Navbar(props: NavProps) {
  return (
    <>
      <nav className="navbar">
        <div className="section-navbar">
          <div className="title-section">
            <RiArrowLeftSLine />
            <h2>{props.title}</h2>
          </div>
          <div className="audio-section">
            {/* Add event listener to change on click + connect to the spotify */}
            <RiVolumeMuteFill />
            <RiVolumeUpFill />
          </div>
        </div>
        <hr></hr>
      </nav>
    </>
  );
}

export default Navbar;
