import { HomePageYoutubeVideo } from "../../config/homePageData";
import { ProcessedVideo, processVideos } from "../../utils/youtubeUtils";
import { Button } from "../ui/Button";
import PostCard from "../ui/PostCard";
import SocialTitle from "../ui/SocialTitle";
import { socialLinks } from "../../config/socialLink";
const Youtube = () => {
  const videos = processVideos(HomePageYoutubeVideo);
  return (
    <div className="youtube-section flex flex-col justify-center gap-10">
      <SocialTitle title="Latest YouTube Videos" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 ">
        {videos.map((video: ProcessedVideo) => (
          <PostCard
            source="youtube"
            imageUrl={video.imageUrl.high}
            title={video.title}
            views={video.views}
            date={video.daysUpload}
            url = {video.url}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button text="View More" url={socialLinks.YouTube} />
      </div>
    </div>
  );
};

export default Youtube;
