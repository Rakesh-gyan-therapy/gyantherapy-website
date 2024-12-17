import PageTitle from "../component/ui/PageTitle";
import Star from "../assets/logo/stars.svg";
import Smiley from "../assets/logo/face.svg";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <PageTitle title="About Us" />
      <div className="w-full z-10 px-[20px] lg:px-[90px]">
        <div className="flex flex-col gap-6 sm:gap-8 shadow-postcard bg-white rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          <span className="text-text-heading font-bold text-xl sm:text-2xl">
            Jai Hind Doston, Kya Haal Hai 🇮🇳
          </span>
          <span className="text-text-grey text-sm sm:text-base">
            We present tech products in simple and easy-to-understand language.
            Our goal is to provide tech-related information and help people make
            informed buying decisions.
            As the owner of Gyan Therapy, I take pride in the fact that we not
            only focus on tech product unboxing and reviews but have also helped
            many people avoid scams and frauds. We have stood up for consumer
            rights and raised our voice for them whenever needed.
            <br/><br/>
            We aim to inspire and motivate the youth with positive messages,
            whether through our YouTube channel or other social media platforms.
            <br/><br/>
            In Summary, I am here to learn, earn, grow, and most importantly,
            help my viewers make the right decisions when purchasing tech
            products through my reviews and bring a positive impact to my
            viewers' lives.
            <br/><br/>
            We collaborate only with good and reputed brands, and we strictly
            avoid promoting gambling or any platform that could negatively
            impact the lives of our youth.
          </span>
          <span className="font-semibold text-sm sm:text-base">Thank You</span>
          <div>
            <img 
              src={Star} 
              alt="star" 
              className="absolute -top-2 left-0 w-20" 
            />
            <img 
              src={Smiley} 
              alt="smiley" 
              className="absolute -bottom-6 right-4 w-24" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;