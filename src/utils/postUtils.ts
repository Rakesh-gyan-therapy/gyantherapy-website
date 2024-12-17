export interface Post {
  url: string;
  title: string;
  dateUploaded: string;
  likes: string;
  imageUrl: string;
}

export interface ProcessedPost {
  url: string;
  title: string;
  likes: string;
  imageUrl: string;
  daysUpload: string;
}

export function processPost(post: Post[]): ProcessedPost[] {
  const currentDate = new Date();

  return post.map((post): ProcessedPost => {
    const uploadDate = new Date(
      post.dateUploaded.split("/").reverse().join("/")
    ); // Convert to ISO format
    const diffInDays = Math.floor(
      (currentDate.getTime() - uploadDate.getTime()) / (1000 * 60 * 60 * 24)
    );

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
      url: post.url,
      title: post.title,
      likes: post.likes,
      imageUrl: post.imageUrl,
      daysUpload: daysUpload,
    };
  });
}
