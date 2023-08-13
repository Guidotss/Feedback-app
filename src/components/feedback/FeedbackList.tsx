"use client";
import { FC, useContext } from "react";
import { useRouter } from "next/navigation";
import { ProductRequest } from "@/interface";
import { FeedbackCard } from "./FeedbackCard";
import { FeedBackContext } from "@/context";
import { EmptyIlustration } from "../ui";
import { AddFeedback } from "./AddFeedback";
import { FeedbackMobileCard } from "./mobile";

interface FeedBackListProps {
  feedbacks?: ProductRequest[] | undefined;
}

export const FeedbackList: FC<FeedBackListProps> = ({ feedbacks }) => {
  const { productRequests } = useContext(FeedBackContext);

  const router = useRouter();
  const navigateTo = (id: number) => {
    router.push(`/feedback/${id}`);
  };
  return (
    <div className="flex flex-col w-full gap-3 ">
      {productRequests?.length! > 0 ? (
        <>
          {productRequests?.map((feedback) => (
            <div
              key={feedback?.id}
              className="bg-bg_comments rounded-lg p-10 cursor-pointer"
              onClick={() => navigateTo(feedback?.id!)}
            >
              <div className="hidden md:block">
                <FeedbackCard productRequest={feedback} />
              </div>
              <div className="md:hidden">
                <FeedbackMobileCard productRequest={feedback} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col gap-5 mt-24 items-center justify-center">
          <EmptyIlustration />
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold text-bg_labels_2">
                There is no feedback yet.
              </h1>
              <p className="text-sm font-light text-bg_labels_2">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
            </div>
          </div>
          <AddFeedback />
        </div>
      )}
    </div>
  );
};
