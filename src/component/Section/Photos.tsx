import { useState, useRef } from "react";
import ImageCard from "../ui/ImageCard";
import arrowLeft from "../../assets/logo/arrow-left.svg";
import arrowRight from "../../assets/logo/arrow-right.svg";

interface PhotosProps {
  imageUrl: string;
  name?: string;
  caption: string;
}

interface PhotosComponentProps {
  photosData: PhotosProps[];
}

const Photos = ({ photosData }: PhotosComponentProps) => {
  const [page, setPage] = useState(1);
  const photosPerPage = 9;
  const totalPages = Math.ceil(photosData.length / photosPerPage);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startIndex = (page - 1) * photosPerPage;
  const paginatedPhotos = photosData.slice(startIndex, startIndex + photosPerPage);

  return (
    <div ref={sectionRef} className="flex flex-col justify-center gap-14 md:gap-28">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12">
        {paginatedPhotos.map((photo) => (
          <div key={photo.name || photo.imageUrl}>
            <ImageCard
              image={photo.imageUrl}
              name={photo.name}
              caption={photo.caption}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button
          className={`flex justify-center items-center w-12 h-12 border-[1.5px] border-text-grey rounded-lg font-semibold ${
            page === 1 ? "cursor-not-allowed bg-gray-200" : "cursor-pointer"
          }`}
          disabled={page === 1}
          onClick={() => handlePageChange(Math.max(page - 1, 1))}
        >
          <img src={arrowLeft} alt="left-arrow" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            className={`flex justify-center items-center w-12 h-12 border-[1.5px] rounded-lg font-semibold ${
              page === pageNum ? "border-primary-orange text-primary-orange" : "border-text-grey"
            }`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
        <button
          className={`flex justify-center items-center w-12 h-12 border-[1.5px] text-text-grey border-text-grey rounded-lg font-semibold ${
            page === totalPages
              ? "cursor-not-allowed bg-gray-200"
              : "cursor-pointer"
          }`}
          disabled={page === totalPages}
          onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
        >
          <img src={arrowRight} alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Photos;
