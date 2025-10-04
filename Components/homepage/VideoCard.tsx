import React, { useState } from 'react'

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-card">
      {isPlaying ? (
        <div className="video-player">
          <iframe
            src={video.videoUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="close-button" onClick={() => setIsPlaying(false)}>×</button>
        </div>
      ) : (
        <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
          <img className="thumbnail-image" src={video.thumbnail} alt={video.title} />
          <div className="play-button-overlay">
            <span className="play-button">▶</span>
          </div>
        </div>
      )}
      <div className="video-info">
        <h3>{video.title}</h3>
      </div>
    </div>
  )
}

export default VideoCard