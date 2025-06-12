import React, { useEffect, useState } from "react";
import type { Track } from "../types/tracks";
import axios from "axios";

const useMusic = (query: string) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const API_KEY = import.meta.env.VITE_X_RAPID_API_KEY;

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchTracks = async () => {
      try {
        const response = await axios.get(
          "https://deezerdevs-deezer.p.rapidapi.com/search",
          {
            params: { q: query },
            headers: {
              "x-rapidapi-key": API_KEY,
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            },
          }
        );

        console.log("Music data: ", response.data);
        const data = response.data.data.map((t: any) => ({
          id: t.id,
          title: t.title,
          artist: t.artist.name,
          albumArt: t.album.cover_medium,
          preview: t.preview,
        }));
        setTracks(data);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchTracks();
  }, [query]);
  return tracks;
};

export default useMusic;
