import { Suspense } from "react";
import Link from "next/link";
import Loading from "./loading";
import {
  Comments,
  AsyncFeedbackCard,
  AddCommentsForm,
} from "@/components/feedback";
import { IconArrowLeft } from "@/components/ui";
import { AsyncMobileCard } from "@/components/feedback/mobile/AsyncMobileCard";

interface FeedbackPageProps {
  params: {
    id: string;
  };
}

const FeedbackPage = ({ params }: FeedbackPageProps) => {
  return (
    <div className="bg-bg_app flex flex-col items-center justify-center px-4 lg:px-0">
      <header className="flex justify-between lg:w-1/2 w-full mt-20">
        <div className="flex items-center">
          <IconArrowLeft />
          <Link
            href="/"
            className="ml-2 font-semibold text-bg_labels_2 text-lg"
          >
            Go Back
          </Link>
        </div>
        <div>
          <Link
            href={`/feedback/edit/${params.id}`}
            className="bg-button_2 p-3 md:px-9 rounded-lg text-slate-50 font-semibold"
          >
            Edit Feedback
          </Link>
        </div>
      </header>
      <Suspense fallback={<Loading />}>
        <div className="mt-20 bg-bg_comments md:p-10 p-3 rounded-lg md:w-[650px] lg:w-1/2  md:h-48 2xl:h-auto">
          <div className="hidden md:block">
            {/* @ts-expect-error Server Component */}
            <AsyncFeedbackCard id={params.id} />
          </div>
          <div className="block md:hidden">
            {/* @ts-expect-error Server Component */}
            <AsyncMobileCard id={params.id} />
          </div>
        </div>
        <div className="mt-10 bg-bg_comments w-[400px] md:w-[650px] lg:w-1/2 p-10 rounded-lg">
          {/* @ts-expect-error Server Component */}
          <Comments id={params.id} />
        </div>
      </Suspense>
      <div className="flex flex-col bg-bg_comments w-[400px] md:w-[650px] lg:w-1/2 mt-10 rounded-lg p-10">
        <h2 className="text-2xl font-bold text-button_3 tracking-tighter">
          Add comment
        </h2>
        <div className="flex flex-col mt-5">
          <AddCommentsForm />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
