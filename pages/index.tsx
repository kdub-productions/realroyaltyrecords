"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import Header from '@/Components/Universal-comps/header';
import VideoCard from '@/Components/homepage/VideoCard';
import Footer from '@/Components/Universal-comps/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const Home: NextPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const VIDEOS_PER_PAGE = 12;

  const fetchVideos = async (pageToken = '') => {
    try {
      setLoading(true);
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=${VIDEOS_PER_PAGE}&pageToken=${pageToken}`;
      console.log('API Request URL:', url); // Log the URL
      const response = await axios.get(url);

      const videoData = (response.data as { items: Array<{ id: { videoId: string }, snippet: { title: string, thumbnails: { medium: { url: string } } } }> }).items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
      }));

      setVideos(videoData);
      setNextPageToken((response.data as { nextPageToken?: string }).nextPageToken || '');
      setPrevPageToken((response.data as { prevPageToken?: string }).prevPageToken || '');
      setError('');
    } catch (err: any) {
      setError('We Are Sorry We Can Not Show You Videos At The Moment. We Have Hit The Youtube Quota Limit, Youtube Channel: Rahk Da Ahk');
      console.error('Error fetching videos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <p className="all-youtube-videos-title">
          All Youtube Videos
        </p>
        {error && !videos.length && (
          <div className="error-message">
            {error}
          </div>
        )}

        {loading ? (
          <div className="loading-spinner">
            <div className="animate-spin"></div>
          </div>
        ) : (
          <>
            <section className="grid">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </section>

            <nav className="next-prev-buttons">
              <button
                onClick={() => fetchVideos(prevPageToken)}
                disabled={!prevPageToken}
                className="button"
              >
                Previous
              </button>
              <button
                onClick={() => fetchVideos(nextPageToken)}
                disabled={!nextPageToken}
                className="button"
              >
                Next
              </button>
            </nav>
          </>
        )}
        <div className="social-media-links">
          <a href="https://www.instagram.com/rrrecords.12.144k/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.facebook.com/RealRoyaltyRecords/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://twitter.com/RealRoyaltyRec" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
