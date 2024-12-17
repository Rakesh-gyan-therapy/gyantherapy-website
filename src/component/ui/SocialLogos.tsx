import React, { useState } from "react";
import YtRedLogo from "../../assets/logo/yt-red.svg";
import XRedLogo from "../../assets/logo/x-red.svg";
import InstaRedLogo from "../../assets/logo/insta-red.svg";
import TeleRedLogo from "../../assets/logo/tele-red.svg";
import YtHoverLogo from "../../assets/logo/yt-original.svg";
import XHoverLogo from "../../assets/logo/x-original.svg";
import InstaHoverLogo from "../../assets/logo/insta-original.svg";
import TeleHoverLogo from "../../assets/logo/tele-original.svg";
import { socialLinks } from "../../config/socialLink";

type LogoItem = {
  id: string;
  defaultLogo: string;
  hoverLogo: string;
  alt: string;
  link?: string;
  hovertext?: string;
};

const SocialLogos: React.FC = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const logos: LogoItem[] = [
    {
      id: "yt",
      defaultLogo: YtRedLogo,
      hoverLogo: YtHoverLogo,
      alt: "YouTube",
      link: socialLinks.YouTube,
      hovertext: "Subscribe",
    },
    {
      id: "x",
      defaultLogo: XRedLogo,
      hoverLogo: XHoverLogo,
      alt: "X (Twitter)",
      link: socialLinks.X,
      hovertext: "Follow",
    },
    {
      id: "insta",
      defaultLogo: InstaRedLogo,
      hoverLogo: InstaHoverLogo,
      alt: "Instagram",
      link: socialLinks.Instagram,
      hovertext: "Follow",
    },
    {
      id: "tele",
      defaultLogo: TeleRedLogo,
      hoverLogo: TeleHoverLogo,
      alt: "Telegram",
      link: socialLinks.Telegram,
      hovertext: "Join",
    },
  ];

  return (
    <div className="flex items-center justify-start gap-6 mt-2">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="relative flex flex-col items-center group"
        >
          <div
            className="w-12 h-12 cursor-pointer relative"
            onMouseEnter={() => setHoveredLogo(logo.id)}
            onMouseLeave={() => setHoveredLogo(null)}
            onClick={() => logo.link && window.open(logo.link, "_blank")}
            role="button"
            aria-label={logo.alt}
          >
            <img
              src={hoveredLogo === logo.id ? logo.hoverLogo : logo.defaultLogo}
              alt={logo.alt}
              className="w-full h-full object-contain 
                transition-all duration-400 ease-in-out 
                group-hover:scale-125 
                group-hover:brightness-125"
            />
          </div>
          {logo.hovertext && (
            <div 
              className="
                absolute top-full mt-2 
                uppercase
                text-black
                text-xs font-normal
                px-3 py-1  
                hidden group-hover:block
                transition-all duration-300 
                z-10 
              "
            >
              {logo.hovertext}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialLogos;