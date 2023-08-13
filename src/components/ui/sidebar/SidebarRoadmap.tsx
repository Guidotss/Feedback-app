import Link from "next/link";

export const SidebarRoadmap = () => {
  return (
    <div className="bg-bg_comments text-lg flex flex-col w-[280px] mt-6 h-[180px] rounded-lg p-4">
      <div className="flex justify-between">
        <h2 className="text-header font-bold">Roadmap</h2>
        <Link
          href="/feedback/roadmap"
          className="text-md font-semibold underline underline-offset-2 md:text-sm text-button_2 hover:opacity-[0.9] hover:underline transition-all"
        >
          View
        </Link>
      </div>
      <div className="mt-4">
        <ul>
          <li>
            <div className="flex justify-between">
              <div className="flex">
                <div className="bg-planned w-2 h-2 rounded-full mt-2 mr-2" />
                <p className="font-semibold text-lg ml-2 text-bg_labels_2">Planned</p>
              </div>
              <p className="text-bg_labels_2">2</p>
            </div>
          </li>
          <li className="mb-2 mt-2">
            <div className="flex justify-between">
              <div className="flex">
                <div className="bg-in_progress w-2 h-2 rounded-full mt-2 mr-2" />
                <p className=" font-semibold text-lg ml-2 text-bg_labels_2">In-Progress</p>
              </div>
              <p className="text-bg_labels_2">3</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <div className="flex">
                <div className="font-semibold bg-live w-2 h-2 rounded-full mt-2 mr-2" />
                <p className=" text-lg ml-2 text-bg_labels_2">Live</p>
              </div>
              <p className="text-bg_labels_2">1</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
