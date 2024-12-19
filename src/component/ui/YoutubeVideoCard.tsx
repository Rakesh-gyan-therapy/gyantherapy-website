import YoutubeLogo from "../../assets/logo/youtube-black.svg";
import { ProcessedVideo } from "../../utils/youtubeUtils";
import PostCard from "./PostCard";
import { Button } from "./Button";

const YoutubeVideoCard = (props: ProcessedVideo) => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="youtube-video-card hidden md:flex shadow-postcard gap-5 justify-between items-center rounded-xl bg-white p-5 w-full">
        <div className="w-1/2 h-auto overflow-hidden rounded-xl">
          <img
            src={props.imageUrl.high}
            alt="thumbnail"
            className="w-full h-auto max-h-[350px] object-cover scale-150 xl:scale-100 "
          />
        </div>
        <div className="flex flex-col justify-between gap-4 w-1/2">
          <div className="border-2 py-2 px-4 rounded-full w-fit">
            <img className="text-black" src={YoutubeLogo} alt="YouTube Logo" />
          </div>
          <div className="text-text-heading font-bold text-xl md:text-2xl lg:text-3xl">
            {props.title}
          </div>
          <div className="flex gap-2 text-text-grey text-sm md:text-base">
            <span>{props.views} Views</span>
            <span>&middot;</span>
            <span>{props.daysUpload}</span>
          </div>
          <div className="bg-gray-100 text-text-grey rounded-xl p-3 md:p-4 text-sm md:text-base">
            {props.description}
          </div>
          <div>
            <Button url={props.url} text="Watch Now" />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex w-full md:hidden">
        <PostCard
          source="youtube"
          imageUrl={props.imageUrl.high}
          title={props.title}
          views={props.views}
          date={props.daysUpload}
          url={props.url}
        />
      </div>
    </>
  );
};

export default YoutubeVideoCard;