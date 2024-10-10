import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import Logo from "../components/Logo";

const HomePage = () => {
  const [playlistUrl, setPlaylistUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch the Spotify playlist when the component mounts
  const fetchSpotifyPlaylist = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/api/spotify/top-tracks");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Received data from backend:', data); // Log received data
      if (data.success) {
        setPlaylistUrl(data.playlistUrl);
      } else {
        setError("Failed to fetch the Spotify playlist.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError(`An error occurred: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchSpotifyPlaylist(); // Call the function to fetch playlist
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <div className="flex space-x-4 mt-8">
        <Button text="Create a new quiz" path="/create" />
        <Button text="Explore our quizzes" path="/explore" />
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {playlistUrl && (
        <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
          Listen to the Top Tracks on Spotify
        </a>
      )}
    </div>
  );
};

export default HomePage;
