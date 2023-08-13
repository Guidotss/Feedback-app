"use client";
import { FC, useContext } from "react";
import { IconArrowUp } from "../ui";
import { FeedBackContext } from "@/context";

interface ProductRequestUpvotesButtonProps {
  upvotes: number;
  id?: number;
  isLiked: boolean;
}

export const FeedbackUpvotesButton: FC<ProductRequestUpvotesButtonProps> = ({
  upvotes,
  id,
  isLiked,
}) => {
  const { updateUpvotes } = useContext(FeedBackContext);

  const handleUpvote = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    updateUpvotes(id!);
  };

  return (
    <button
      className={`${
        !isLiked ? "bg-bg_labels" : "bg-button_2"
      } md:h-14 h-10 md:p-2 md:px-3 px-7 rounded-lg text-sm flex md:flex-col items-center justify-center gap-2 md:gap-0`}
      onClick={(event) => handleUpvote(event)}
    >
      <IconArrowUp color={`${!isLiked ? "#4661E6" : "#fff"}`} />
      <span className={`mt-1 ${!isLiked ? "" : "text-white"}`}>{upvotes}</span>
    </button>
  );
};
