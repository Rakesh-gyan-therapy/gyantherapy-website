import GTLandingImage from "../assets/images/gt-landing.webp";
import GTLandingMobileImage from "../assets/images/gt-landing-mobile.webp";
import Smiley from "../assets/logo/face-xl.svg";
import Scribble from "../assets/logo/scribble.svg";
import ArrowStraight from "../assets/logo/arrow-straight.svg";
import TitleArrow from "../assets/logo/title-arrow.svg";
import LineArrow from "../assets/logo/line.svg";
import GTChannelDp from "../assets/images/gyantherapy-channel-dp.webp";
import GTPlusChannelDp from "../assets/images/gtplus-channel-dp.webp";
import Youtube from "../component/Section/Youtube";
import SocialLogos from "../component/ui/SocialLogos";
import ThreeLines from "../assets/logo/3-lines.svg";
import Crown from "../assets/logo/crown.svg";
import Instagram from "../component/Section/Instagram";
import Face2 from "../assets/logo/face-2.svg";
import WideArrow from "../assets/logo/wide-arrow.svg";
import Twitter from "../component/Section/Twitter";
import Circle from "../assets/logo/circle.svg";
import CircleDash from "../assets/logo/circle-slash.svg";
import Stars from "../assets/logo/stars.svg";
import ScribbleArrow from "../assets/logo/scribble-arrow.svg";
import { socialLinks } from "../config/socialLink";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[20px] lg:px-[90px] overflow-hidden">
      <HomeImageSecton />
      <div className="mt-20 sm:mt-24 w-full flex flex-col gap-20 justify-center">
        <div className="relative">
          <Youtube />
          <img
            src={Face2}
            alt=""
            className="hidden lg:block absolute bottom-64 -left-20"
          />
          <img
            src={WideArrow}
            alt=""
            className="hidden lg:block absolute -top-20 -right-10"
          />
        </div>
        <div className="relative">
          <Twitter />
          <img
            src={CircleDash}
            alt=""
            className="hidden lg:block absolute -top-12 -left-32"
          />
          <img
            src={Circle}
            alt=""
            className="hidden lg:block absolute -top-28 -right-44"
          />
        </div>
        <div className="relative">
          <Instagram />
          <img
            src={Stars}
            alt=""
            className="hidden lg:block absolute -top-12 -left-24"
          />
          <img
            src={ScribbleArrow}
            alt=""
            className="hidden lg:block absolute -top-24 -right-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

export const HomeImageSecton = () => {
  return (
    <>
      <div className="-mb-20 sm:-mb-28 mt-16">
        <img
          className=" hidden sm:block m-auto w-[320px] h-[380px] md:w-[550px] md:h-[550px] lg:w-[670px] lg:h-[670px] relative drop-shadow-xl"
          src={GTLandingImage}
          alt="Gyan Therapy"
        />
        <img
          className="block sm:hidden m-auto w-[320px] h-[380px] md:w-[550px] md:h-[550px] lg:w-[670px] lg:h-[670px] relative drop-shadow-xl"
          src={GTLandingMobileImage}
          alt="Gyan Therapy"
        />
        <div className="hidden md:block absolute top-96 right-12">
          <img src={Smiley} alt="smiley face" />
        </div>
        <div className="hidden md:block absolute md:left-[350px] top-24 lg:left-[450px] xl:left-[700px]">
          <img src={Crown} alt="crown" />
        </div>
        <div className="scale-x-[-1] absolute md:hidden top-28">
          <img src={Crown} alt="crown" />
        </div>
        <div className="md:block absolute top-24 right-1 md:top-40 md:right-10 lg:top-52 lg:right-4 xl:top-52 xl:right-60">
          <HomeTitile />
        </div>
        <div className="hidden top-48 left-6 lg:block absolute xl:top-48 xl:left-24">
          <GyanTherapyTitle />
        </div>
      </div>
      <div className="shadow-postcard bg-white z-10 w-full h-full md:h-[200px] p-2 relative rounded-xl">
        <div className="flex flex-col md:flex-row h-full ">
          <div className="flex justify-between w-full md:w-3/5 bg-primary-orange py-2 rounded-t-xl md:rounded-tr-none md:rounded-l-xl ">
            <div className="flex flex-col w-1/3 px-2  items-center justify-center text-white relative overflow-hidden">
              <div className="flex flex-col items-center z-20">
                <h1 className="text-lg md:text-3xl font-bold ">45L+</h1>
                <p className="text-xs md:text-lg text-center">
                  Total followers
                </p>
              </div>
              <div className="absolute left-10 ">
                <img
                  src={Scribble}
                  className="w-[600px] h-[450px] scale-150"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col w-1/3 px-2 items-center justify-center text-white relative overflow-hidden">
              <div className="flex flex-col items-center z-20">
                <h1 className="text-lg md:text-3xl font-bold">#5</h1>
                <p className="text-xs md:text-lg text-center">
                  Indian Creator Forbes India 2023
                </p>
                <p className="text-xs md:text-lg font-semibold">Tech rank #1</p>
              </div>
              <div className="absolute left-1/3">
                <img src={ArrowStraight} alt="" />
              </div>
            </div>
            <div className="flex flex-col w-1/3 px-2 items-center justify-center text-white relative overflow-hidden">
              <div className="flex flex-col items-center z-20 text-center">
                <h1 className="text-lg md:text-3xl font-bold">#20</h1>
                <p className="text-xs md:text-lg">
                  Indian Creator Forbes India 2024
                </p>
                <p className="text-xs md:text-lg font-semibold">Tech rank #1</p>
              </div>
              <div className="absolute">
                <img src={Scribble} alt="scribble-art" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full rounded-b-xl md:rounded-bl-none md:rounded-r-xl md:w-2/5 bg-gradient-to-r from-gray-300 to-white p-3 md:p-0">
            <div className="flex justify-center flex-col gap-2">
              <div className="w-full flex justify-start items-center gap-2">
                <span className="font-bold text-base md:text-lg text-text-heading">
                  I'm Founder of
                </span>
                <img
                  src={LineArrow}
                  alt="long right arrow"
                  className=" w-40 md:w-32 lg:w-60"
                />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div
                  onClick={() => {
                    window.open(socialLinks.YouTube, "_blank");
                  }}
                  className=" cursor-pointer flex gap-2 items-center"
                >
                  <img
                    src={GTChannelDp}
                    className="rounded-full h-12 w-12 lg:h-14 lg:w-14"
                    alt="gt-channel-dp"
                  />
                  <div className="flex flex-col justify-start">
                    <p className="font-bold text-text-heading text-sm lg:text-lg">
                      Gyan Therapy
                    </p>
                    <p className="text-text-grey text-xs md:text-base">
                      3.44M Sub
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    window.open(socialLinks.YoutubeGTPlus, "_blank");
                  }}
                  className=" cursor-pointer flex gap-2 items-center"
                >
                  <img
                    src={GTPlusChannelDp}
                    className="rounded-full h-12 w-12 lg:h-14 lg:w-14"
                    alt="gt-channel-dp"
                  />
                  <div className="flex flex-col justify-start">
                    <p className="font-bold text-text-heading text-sm lg:text-lg">
                      GT Plus
                    </p>
                    <p className="text-text-grey text-xs lg:text-base">
                      304K Sub
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute hidden lg:block lg:-top-20 lg:-left-16">
          <img src={ThreeLines} alt="Three-line" />
        </div>
      </div>
      <div className="lg:hidden mt-10">
        <GyanTherapyTitle />
      </div>
    </>
  );
};
const HomeTitile = () => {
  return (
    <div className="flex items-center gap-6">
      <img className="hidden md:block" src={TitleArrow} alt="" />
      <div className="flex flex-col justify-end w-36 md:w-44 lg:w-80 gap-2">
        <h1 className="leading-none font-extrabold text-xl md:text-3xl text-text-heading">
          One of Most <span className="text-primary-orange">Loved Tech</span>{" "}
          creator by <span className="text-primary-orange">Viewers</span>
        </h1>
        <p className="text-text-grey text-xs md:text-sm">
        -Thank you❤️
        </p>
        <img className="w-16 h-16 md:hidden" src={TitleArrow} alt="" />
      </div>
    </div>
  );
};

const GyanTherapyTitle = () => {
  return (
    <div className="flex flex-col items-center sm:items-start justify-start gap-2 w-full lg:w-64 xl:w-96">
      <h1 className="text-3xl font-bold text-text-heading">Gyan Therapy</h1>
      <p className="text-text-heading">
        Our mission is to help you make confident, informed choices on the
        latest gadgets, smartphones, and tech essentials in a straightforward,
        engaging style, making technology easy to understand for viewers.
      </p>
      <div className="hidden lg:block">
        <SocialLogos />
      </div>
    </div>
  );
};
