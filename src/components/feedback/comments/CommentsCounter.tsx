"use client";
import { FC, useContext } from "react";
import { useParams } from "next/navigation";
import { FeedBackContext } from "@/context";

interface CommentsCounterProps {
  comments?: number;
}

export const CommentsCounter: FC<CommentsCounterProps> = ({ comments }) => {
  const { productRequests } = useContext(FeedBackContext);
  const { id } = useParams();

  if (!productRequests) return null;
  const productRequest = productRequests?.find(
    (productRequest) => productRequest.id === +id
  );

  return (
    <div>
      <span className="font-bold text-xl">
        {productRequest?.comments?.length}
      </span>
    </div>
  );
};
