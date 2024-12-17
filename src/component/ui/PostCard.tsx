import { useEffect, useState } from "react";
import YoutubeIcon from "../../assets/logo/youtube.svg";
import InstagramName from "../../assets/logo/instagram-name.svg";
import GtChannelDp from "../../assets/images/gyantherapy-channel-dp.webp";
import TwitterVerified from "../../assets/logo/twitter-verified.svg";
import TwitterNameLogo from '../../assets/logo/x-name-logo.svg';
interface PostCardProps {
  source: "youtube" | "twitter" | "instagram";
  url: string;
  imageUrl: string;
  title: string;
  views: string;
  date: string;
}
const PostCard = (props: PostCardProps) => {
  const [socialLogo, setSocialLogo] = useState<string>("");

  useEffect(() => {
    if (props.source === "youtube") {
      setSocialLogo(YoutubeIcon);
    } else if (props.source === "instagram") {
      setSocialLogo(InstagramName);
    } else if (props.source === "twitter") {
      setSocialLogo(TwitterNameLogo);
    }
  }, []);

  return (
    <div
      onClick={() => {
        window.open(props.url, "_blank");
      }}
      className="flex flex-col justify-normal w-full h-fit bg-white rounded-xl p-2 gap-2 shadow-postcard cursor-pointer"
    >
      {props.source === "twitter" && (
        <div className="flex items-center gap-2">
          <img
            src={GtChannelDp}
            className="rounded-full h-10 w-10"
            alt="gt-channel-dp"
          />
          <div className="flex flex-col ">
            <div className="text-text-heading font-bold text-sm flex items-center gap-1">
              <span>Rakesh</span>
              <span>
                <img src={TwitterVerified} alt="verified badge" />
              </span>
            </div>
            <div className="text-text-grey text-xs">@GyanTherapy</div>
          </div>
        </div>
      )}
      <div className="thumbnail w-full h-[220px] relative">
        <img
          src={props.imageUrl}
          alt="Post thumbnail"
          className={`w-full h-full ${props.source=='instagram'? 'object-contain': 'object-cover'} rounded-xl`}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl"></div>
        <div className="absolute bottom-1 left-2">
          <img src={socialLogo} alt="Social Media Logo" />
        </div>
      </div>
      <div className="info flex flex-col justify-start py-2">
        <div className="title font-bold text-sm text-text-heading">
          {props.title}
        </div>
        <div className="views-date flex items-center gap-2">
          <span className="text-text-grey text-xs">
            {props.views} {props.source == "instagram" ? "Likes" : "Views"}
          </span>
          <span className="text-text-grey">&middot;</span>
          <span className="text-text-grey text-xs">{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
