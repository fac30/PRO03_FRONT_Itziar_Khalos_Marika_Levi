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
      
      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received data from backend:', data); // Log received data
      
      if (data.success) {
        setPlaylistUrl(data.playlistUrl); // Set playlist URL from response
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
        <div className="mt-4">
          {/* Embed a smaller Spotify player */}
          <iframe 
            src={`https://open.spotify.com/embed/playlist/${playlistUrl.split('/').pop()}`} 
            width="300" // Adjust width to 300px
            height="80" // Adjust height to 80px for a smaller player
            frameBorder="0" 
            allow="encrypted-media" 
            title="Spotify Playlist"
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
