import { CreateFeedbackForm } from "@/components/feedback/create";
import { IconArrowLeft, IconPlus } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const CreatePage = () => {
  return (
    <div className="flex flex-col w-full 2xl:px-52 py-7 items-center">
      <header className="flex w-full md:w-[540px] mb-24">
        <div className="flex items-center">
          <IconArrowLeft />
          <Link className="ml-2 font-bold text-bg_labels_2 text-lg" href="/">
            Go back
          </Link>
        </div>
        <div className="flex-1" />
      </header>
      <main className="md:w-[540px] h-[780px] bg-bg_comments rounded-xl flex flex-col">
        <div>
          <Image
            className="rounded-full h-[70px] w-[70px] absolute -mt-9 ml-10"
            src="/assets/suggestions/desktop/background-header.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <div className="absolute -mt-3 ml-[65px]">
            <IconPlus
              className="text-6xl mr-2 font-bold"
              strokeWidth={1}
              tspan={{
                x: 17,
                y: 50,
              }}
            />
          </div>
        </div>
        <div className="p-10">
          <h1 className="mt-10 font-bold text-3xl text-button_3 tracking-tighter">
            Create New Feedback
          </h1>
          <div className="mt-10">
            <CreateFeedbackForm />
          </div>
        </div>
      </main>
    </div>
  );
};
export default CreatePage;
