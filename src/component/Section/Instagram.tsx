import { Button } from "../ui/Button";
import PostCard from "../ui/PostCard";
import SocialTitle from "../ui/SocialTitle";
import { socialLinks } from "../../config/socialLink";
import {HomePageInstagramFeed} from "../../config/homePageData";
import { ProcessedPost, processPost } from "../../utils/postUtils";
const Instagram = () => {
  const posts = processPost(HomePageInstagramFeed);
  return (
    <div className="youtube-section flex flex-col justify-center gap-10">
      <SocialTitle tag="Feed" title="Latest Instagram Feed" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 z-10 ">
        {posts.map((post: ProcessedPost) => (
          <PostCard
            source="instagram"
            imageUrl={post.imageUrl}
            title={post.title}
            views={post.likes}
            date={post.daysUpload}
            url = {post.url}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button text="View More" url={socialLinks.Instagram} />
      </div>
    </div>
  );
};

export default Instagram;
