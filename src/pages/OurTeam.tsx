import Photos from "../component/Section/Photos";
import PageTitle from "../component/ui/PageTitle";
import { TeamMembers } from "../config/teamMember";

const OurTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <PageTitle title="Our Team" />
      <div className="w-full z-10 px-[20px] lg:px-[90px]">
        <Photos photosData={TeamMembers}/>
      </div>
    </div>
  );
};

export default OurTeam;
