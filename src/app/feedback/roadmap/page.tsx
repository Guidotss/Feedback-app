import { AddFeedback } from "@/components/feedback";
import { RoadmapList, RoadmapMobileList } from "@/components/roadmap";
import { IconArrowLeft } from "@/components/ui";
import Link from "next/link";

const RoadMapPage = () => {
  return (
    <div className="flex flex-col items-center 2xl:px-72 2xl:py-20 lg:px-36 lg:py-14">
      <header className="flex justify-between w-full bg-header py-5 px-3 md:px-10 md:rounded-lg  items-center">
        <div className="flex flex-col">
          <div className="flex items-center">
            <IconArrowLeft stroke="#F7F8FD" className="mr-2" />
            <Link
              href="/"
              className="ml-2 text-bg_app text-md font-semibold underline tracking-wide"
            >
              Go Back
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-bg_app mt-2 tracking-tight">
            Roadmap
          </h1>
        </div>
        <AddFeedback />
      </header>
      <main className="w-full mt-10 md:p-3 md:px-2">
        <div className="hidden md:block">
          <RoadmapList/>
        </div>
        <div className="md:hidden block">
          <RoadmapMobileList/>
        </div>
      </main>
    </div>
  );
};

export default RoadMapPage;
