import { Link } from "react-router-dom";
import { links } from "../../routes/routes";
import GyanTherapyLogo from "../../assets/logo/gyantherapylogo.svg";
import YoutubeIcon from "../../assets/logo/yt.svg";
import XIcon from "../../assets/logo/x.svg";
import TelegramIcon from "../../assets/logo/tele.svg";
import InstaIcon from "../../assets/logo/insta.svg";
import { socialLinks, SocialLinks } from "../../config/socialLink";

const Footer = () => {
  const openLink = (platform: keyof SocialLinks): void => {
    window.open(socialLinks[platform], "_blank");
  };

  return (
    <div>
      <div className="bottom-0 flex flex-col justify-center w-full bg-primary-grey px-4 py-8 mt-10 md:hidden">
        <div className="flex flex-col items-center gap-8">
          <img 
            src={GyanTherapyLogo} 
            alt="Gyan Therapy Logo" 
            className="w-24"
          />
          <div className="flex flex-col gap-4 items-center">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-text-heading font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <img
              src={YoutubeIcon}
              onClick={() => openLink("YouTube")}
              className="cursor-pointer w-6"
              alt="youtube icon"
            />
            <img
              src={InstaIcon}
              onClick={() => openLink("Instagram")}
              className="cursor-pointer w-6"
              alt="insta icon"
            />
            <img
              src={XIcon}
              onClick={() => openLink("X")}
              className="cursor-pointer w-6"
              alt="twitter icon"
            />
            <img
              src={TelegramIcon}
              onClick={() => openLink("Telegram")}
              className="cursor-pointer w-6"
              alt="telegram icon"
            />
          </div>
          <hr className="w-full mt-4 border-[1px] border-gray-300" />
          <div className="flex flex-col items-center text-text-heading">
            <span className="text-sm text-center">&#169; All rights reserved</span>
          </div>
        </div>
      </div>

      <div className="bottom-0 flex-col justify-center w-full bg-primary-grey py-8 mt-24 hidden md:flex px-[90px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 lg:gap-12">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-text-heading font-medium text-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-5 lg:gap-6">
            <img
              src={YoutubeIcon}
              onClick={() => openLink("YouTube")}
              className="cursor-pointer w-7 lg:w-8"
              alt="youtube icon"
            />
            <img
              src={InstaIcon}
              onClick={() => openLink("Instagram")}
              className="cursor-pointer w-7 lg:w-8"
              alt="insta icon"
            />
            <img
              src={XIcon}
              onClick={() => openLink("X")}
              className="cursor-pointer w-7 lg:w-8"
              alt="twitter icon"
            />
            <img
              src={TelegramIcon}
              onClick={() => openLink("Telegram")}
              className="cursor-pointer w-7 lg:w-8"
              alt="telegram icon"
            />
          </div>
        </div>
        <hr className="w-full mt-8 mb-4 border-[1px] border-gray-300" />
        <div className="flex justify-between items-center text-text-heading">
          <span className="text-base">&#169; All rights reserved</span>
          <img 
            src={GyanTherapyLogo} 
            alt="Gyan Therapy Logo" 
            className="w-32 "
          />
          <div className="flex gap-6 lg:gap-12 text-base">
            <span className="cursor-pointer">Jai Hind Doston</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;