import Photos from "../component/Section/Photos";
import PageTitle from "../component/ui/PageTitle";
import { gallery } from "../config/gallery";

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <PageTitle title="Our Gallery" />
      <div className="w-full z-10 px-[20px] lg:px-[90px]">
        <Photos photosData={gallery}/>
      </div>
    </div>
  );
};

export default Gallery;
