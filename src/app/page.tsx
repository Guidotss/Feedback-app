import { Suspense } from "react";
import {
  Sidebar,
  SidebarFilters,
  SidebarRoadmap,
  IconsSuggestion,
  SuggestionCounter,
  MobileNavbar,
  MobileSidebar,
} from "@/components/ui";
import { AddFeedback, FeedbackGrid, SortBy } from "@/components/feedback";
import { filters, sortBy } from "@/constants";
import Loading from "./loading";

const Home = () => {
  return (
    <div className="md:text-2xl md:ml-2 md:font-bold md:flex md:flex-col lg:flex-row 2xl:px-52 md:py-20 md:px-10">
      <aside className="hidden md:flex md:items-center md:justify-center lg:block w-screen md:w-auto">
        <Sidebar>
          <Sidebar.Header />
          <Sidebar.Body>
            <SidebarFilters filters={filters} />
            <SidebarRoadmap />
          </Sidebar.Body>
        </Sidebar>
      </aside>
      <main className="md:ml-10 lg:w-full">
        <div className="w-full md:hidden">
          <div>
            <MobileNavbar />
          </div>
          <div className="w-full flex justify-end">
            <MobileSidebar/>
          </div>
        </div>
        <header className="flex items-center justify-between bg-header p-3 md:p-6 md:rounded-xl ">
          <div className="flex">
            <IconsSuggestion />
            <Suspense
              fallback={
                <div className="w-[120px] h-[20px] rounded-lg mt-1 ml-4 animate-pulse bg-bg_labels" />
              }
            >
              {/* @ts-expect-error Server Component */}
              <SuggestionCounter />
            </Suspense>
            <SortBy
              className="md:ml-10 lg:text-lg font-light text-bg_labels_2"
              sortBy={sortBy}
            />
          </div>
          <AddFeedback />
        </header>
        <section className="flex items-center justify-center mt-10">
          <Suspense fallback={<Loading />}>
            {/* @ts-expect-error Server Component */}
            <FeedbackGrid />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default Home;
