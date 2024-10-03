import React from 'react';
import { RiArrowLeftSLine, RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css";

type NavProps = { title: string };

const Navbar: React.FC<NavProps> = (props) => {
  const [isMuted, setIsMuted] = React.useState(true); // State for audio toggle
  const navigate = useNavigate(); // Get the navigate function

  const toggleVolume = () => {
    setIsMuted(!isMuted); // Toggles mute/unmute
  };

  return (
    <nav className="navbar flex-col w-full px-4 py-8">
      <div className="section-navbar flex justify-between items-center px-4 pb-4">
        <div className="title-section flex justify-start items-center gap-4 ">
          <RiArrowLeftSLine onClick={() => navigate(-1)} /> {/* Navigate to the previous page on click */}
          <h2 className="navTitle text-2xl">{props.title}</h2>
        </div>
        <div className="audio-section flex items-center" onClick={toggleVolume}>
          {isMuted ? <RiVolumeMuteFill /> : <RiVolumeUpFill />} {/* Show icon based on mute state */}
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
