export interface Video {
  url: string;
  title: string;
  description: string;
  dateUploaded: string;
  views: string;
}

export interface ProcessedVideo {
  url: string;
  title: string;
  views: string;
  description: string;
  imageUrl: {
    high: string;
    standard: string;
  };
  daysUpload: string;
}

export function processVideos(videos: Video[]): ProcessedVideo[] {
  const currentDate = new Date();

  return videos.map((video): ProcessedVideo => {
    const videoId = video.url.split("v=")[1];
    const uploadDate = new Date(video.dateUploaded.split("/").reverse().join("/")); // Convert to ISO format
    const diffInDays = Math.floor((currentDate.getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24));

    let daysUpload = "";
    if (diffInDays < 1) {
      daysUpload = "Uploaded recently";
    } else if (diffInDays < 30) {
      daysUpload = `${diffInDays} days ago`;
    } else if (diffInDays < 365) {
      daysUpload = `${Math.floor(diffInDays / 30)} months ago`;
    } else {
      daysUpload = `${Math.floor(diffInDays / 365)} years ago`;
    }

    return {
      url: video.url,
      title: video.title,
      views: video.views,
      description: video.description.length > 79
        ? video.description.slice(0, 79).padEnd(82, ".")
        : video.description,
      imageUrl: {
        high: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        standard: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
      },
      daysUpload: daysUpload,
    };
  });
}
