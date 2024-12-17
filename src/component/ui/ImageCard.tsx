interface ImageCardProps {
    image: string;
    name?: string;
    caption: string;
    }

const ImageCard = (props: ImageCardProps) => {
  return (
    <div className="w-[295px] h-[275px] md:w-[350px] md:h-[340px] relative" >
      <img
        src={props.image}
        alt="image"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl"></div>
      <div className="flex flex-col absolute bottom-3 left-3">
        <span className="font-medium text-xl text-white">{props.name}</span>
        <span className="text-sm text-white opacity-70 italic font-medium ">{props.caption}</span>
      </div>
    </div>
  );
};

export default ImageCard;
