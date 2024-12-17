const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative flex justify-center h-60 sm:h-72 md:h-80 lg:h-96 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] -mb-20 sm:-mb-28 md:-mb-32 lg:-mb-40">
      <div className="mt-12 sm:mt-20 md:mt-20 lg:mt-20">
        <div className="w-fit h-fit border-2 border-text-heading rounded-full px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4">
          <span className="text-text-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</span>
        </div>
      </div>
      <div className="absolute bottom-auto left-0 sm:left-2 top-0 h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] -translate-x-[20%] sm:-translate-x-[40%] md:-translate-x-[20%] lg:-translate-x-[5%] translate-y-[40%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[30px] sm:blur-[35px] md:blur-[40px]"></div>
      <div className="absolute bottom-auto right-0 sm:right-2 top-0 h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] translate-x-[0%] sm:translate-x-[40%] md:translate-x-[20%] lg:-translate-x-[5%] translate-y-[40%] rounded-full bg-[rgba(238,183,125,0.5)] opacity-50 blur-[30px] sm:blur-[35px] md:blur-[40px]"></div>
    </div>
  );
};

export default PageTitle;