import { useState, useRef } from "react";
import PageTitle from "../component/ui/PageTitle";
import YoutubeVideoCard from "../component/ui/YoutubeVideoCard";
import { eventVideos } from "../config/eventsVideos";
import { processVideos, ProcessedVideo } from "../utils/youtubeUtils";
import arrowLeft from "../assets/logo/arrow-left.svg";
import arrowRight from "../assets/logo/arrow-right.svg";

const Events = () => {
  const [page, setPage] = useState(1);
  const videosPerPage = 4;
  const WorkVideos = processVideos(eventVideos);
  const totalPages = Math.ceil(WorkVideos.length / videosPerPage);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    document.documentElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const startIndex = (page - 1) * videosPerPage;
  const paginatedVideos = WorkVideos.slice(startIndex, startIndex + videosPerPage);

  return (
    <div ref={sectionRef} className="flex flex-col justify-center items-center ">
      <PageTitle title="Events" />
      <div className="flex flex-col w-full z-10 gap-10 md:gap-16 px-[20px] lg:px-[90px]">
        {paginatedVideos.map((video: ProcessedVideo) => (
          <YoutubeVideoCard
            key={video.url}
            {...video} 
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-14 md:mt-28">
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

export default Events;