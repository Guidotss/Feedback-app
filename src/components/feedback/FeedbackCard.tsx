import { ProductRequest } from "@/interface";
import { IconArrowUp, IconComments } from "../ui";
import { FC } from "react";
import { FeedbackUpvotesButton } from "./FeedbackUpvotesButton";

interface FeedbackCardProps {
  productRequest: ProductRequest;
}

export const FeedbackCard: FC<FeedbackCardProps> = ({ productRequest }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10">
        <FeedbackUpvotesButton
          upvotes={productRequest.upvotes}
          id={productRequest.id}
          isLiked={productRequest.isLiked}
        />
        <div className="h-20">
          <h3 className="text-button_3 hover:text-button_2 transition-all text-2xl">
            {productRequest.title}
          </h3>
          <p className="text-lg text-bg_labels_2 font-normal">
            {productRequest.description}
          </p>
          <span className="text-button_2  bg-bg_labels font-semibold text-sm p-2 px-4 rounded-lg absolute mt-2">
            {productRequest.category}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IconComments />
        <span className="text-lg text-header">
          {productRequest.comments?.length || 0}
        </span>
      </div>
    </div>
  );
};
