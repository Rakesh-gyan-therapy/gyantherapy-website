import { Link, useNavigate, LinkProps } from "react-router-dom";
import { links } from "../../routes/routes";
import GyanTherapyLogo from "../../assets/logo/gyantherapylogo.svg";
import YoutubeIcon from "../../assets/logo/yt.svg";
import XIcon from "../../assets/logo/x.svg";
import TelegramIcon from "../../assets/logo/tele.svg";
import InstaIcon from "../../assets/logo/insta.svg";
import WhatsAppIcon from "../../assets/logo/whatsapp-black.svg";
import { socialLinks, SocialLinks } from "../../config/socialLink";
interface SocialIconConfig {
  platform: keyof SocialLinks;
  icon: string;
  className?: string;
}

const socialIcons: SocialIconConfig[] = [
  { platform: "YouTube", icon: YoutubeIcon },
  { platform: "Instagram", icon: InstaIcon },
  { platform: "X", icon: XIcon },
  { platform: "Telegram", icon: TelegramIcon },
  { platform: "WhatsApp", icon: WhatsAppIcon, className: "w-5 lg:w-6" }
];

const ScrollToTopLink = ({ children, to, className }: LinkProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

const Logo = ({ className }: { className: string }) => {
  const navigate = useNavigate();
  
  const handleHomeNavigation = () => {
    navigate('/home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img 
      src={GyanTherapyLogo} 
      alt="Gyan Therapy Logo" 
      className={className}
      onClick={handleHomeNavigation}
    />
  );
};

const SocialIcons = ({ className = "" }: { className?: string }) => {
  const openLink = (platform: keyof SocialLinks): void => {
    window.open(socialLinks[platform], "_blank");
  };

  return (
    <div className={`flex gap-4 lg:gap-6 ${className}`}>
      {socialIcons.map(({ platform, icon, className: iconClass }) => (
        <img
          key={platform}
          src={icon}
          onClick={() => openLink(platform)}
          className={`cursor-pointer w-6 md:w-7 lg:w-8 ${iconClass || ''}`}
          alt={`${platform} icon`}
        />
      ))}
    </div>
  );
};

const NavigationLinks = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    {links.map((link) => (
      <ScrollToTopLink
        key={link.to}
        to={link.to}
        className="text-text-heading font-medium text-base md:text-lg"
      >
        {link.label}
      </ScrollToTopLink>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div>
      {/* Mobile Footer */}
      <div className="bottom-0 flex flex-col justify-center w-full bg-primary-grey px-4 py-8 mt-10 md:hidden">
        <div className="flex flex-col items-center gap-8">
          <Logo className="w-24 cursor-pointer" />
          <NavigationLinks className="flex flex-col gap-4 items-center" />
          <SocialIcons />
          <hr className="w-full mt-4 border-[1px] border-gray-300" />
          <div className="flex flex-col items-center text-text-heading">
            <span className="text-sm text-center">&#169; All rights reserved</span>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="bottom-0 flex-col justify-center w-full bg-primary-grey py-8 mt-24 hidden md:flex px-[90px]">
        <div className="flex justify-between items-center">
          <NavigationLinks className="flex gap-6 lg:gap-12" />
          <SocialIcons />
        </div>
        <hr className="w-full mt-8 mb-4 border-[1px] border-gray-300" />
        <div className="flex justify-between items-center text-text-heading">
          <span className="text-base">&#169; All rights reserved</span>
          <Logo className="w-32 cursor-pointer" />
          <div className="flex gap-6 lg:gap-12 text-base">
            <span className="cursor-pointer">Jai Hind Doston</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;