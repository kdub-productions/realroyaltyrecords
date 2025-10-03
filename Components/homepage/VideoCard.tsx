import React from 'react'

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
  return (
    <div className="video-card">
      <img className="thumbnail-image" src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
    </div>
  )
}

export default VideoCard
