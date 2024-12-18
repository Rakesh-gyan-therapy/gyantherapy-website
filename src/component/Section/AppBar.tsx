import { Link, useLocation } from "react-router-dom";
import GyanTherapyLogo from "../../assets/logo/gyantherapylogo.svg";
import { links } from "../../routes/routes";
import { useEffect, useState } from "react";
import YoutubeIcon from "../../assets/logo/yt.svg";
import XIcon from "../../assets/logo/x.svg";
import TelegramIcon from "../../assets/logo/tele.svg";
import InstaIcon from "../../assets/logo/insta.svg";
import { socialLinks, SocialLinks } from "../../config/socialLink";
import Menu from "../../assets/logo/menu.svg";
import XCircle from "../../assets/logo/x-circle.svg";

const AppBar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  const openLink = (platform: keyof SocialLinks): void => {
    window.open(socialLinks[platform], "_blank");
  };

  return (
    <>
      <div className="hidden md:flex top-0 justify-between items-center w-full h-[90px] px-[20px] lg:px-[90px] fixed bg-white z-40">
        <div>
          <Link to="/home">
            <img src={GyanTherapyLogo} alt="Gyan therapy logo" />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg mx-4 ${
                location.pathname === link.to || (location.pathname === "/" && link.to === "/home")
                  ? "text-black font-extrabold"
                  : "text-text-grey font-normal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile Menu Trigger */}
      {!showMenu && (
        <div className="flex top-0 justify-between items-center w-full h-[90px] px-[20px] fixed backdrop-blur-2xl z-40 md:hidden">
          <div>
            <Link to="/home">
              <img src={GyanTherapyLogo} alt="Gyan therapy logo" />
            </Link>
          </div>
          <div>
            <button
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <img src={Menu} alt="menu" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          showMenu 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-full'
        }`}
        style={{ 
          visibility: showMenu ? 'visible' : 'hidden',
          pointerEvents: showMenu ? 'auto' : 'none'
        }}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setShowMenu(false)}
            className="transition-transform duration-200 hover:scale-110"
          >
            <img src={XCircle} alt="close" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 pt-4">
          <img
            src={GyanTherapyLogo}
            alt="Gyan Therapy Logo"
            className="w-24 transition-transform duration-300"
            style={{
              transform: `scale(${showMenu ? 1 : 0.8})`,
              opacity: showMenu ? 1 : 0
            }}
          />
          <div className="flex flex-col gap-4 items-center">
            {links.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-text-heading font-medium text-base transition-all duration-300 transform"
                style={{
                  transform: `translateY(${showMenu ? '0' : '20px'})`,
                  opacity: showMenu ? 1 : 0,
                  transitionDelay: `${index * 100}ms`
                }}
                onClick={() => setShowMenu(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div 
            className="flex gap-4 mt-auto mb-8 transition-all duration-300"
            style={{
              transform: `translateY(${showMenu ? '0' : '20px'})`,
              opacity: showMenu ? 1 : 0,
              transitionDelay: `${links.length * 100}ms`
            }}
          >
            <img
              src={YoutubeIcon}
              onClick={() => openLink("YouTube")}
              className="cursor-pointer w-6 transition-transform duration-200 hover:scale-110"
              alt="youtube icon"
            />
            <img
              src={InstaIcon}
              onClick={() => openLink("Instagram")}
              className="cursor-pointer w-6 transition-transform duration-200 hover:scale-110"
              alt="insta icon"
            />
            <img
              src={XIcon}
              onClick={() => openLink("X")}
              className="cursor-pointer w-6 transition-transform duration-200 hover:scale-110"
              alt="twitter icon"
            />
            <img
              src={TelegramIcon}
              onClick={() => openLink("Telegram")}
              className="cursor-pointer w-6 transition-transform duration-200 hover:scale-110"
              alt="telegram icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBar;