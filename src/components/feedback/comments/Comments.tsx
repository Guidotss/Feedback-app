"use client";
import { CommentsCounter } from "./CommentsCounter";
import { CommentsList } from "./CommentsList";
import { useContext } from "react";
import { FeedBackContext } from "@/context";

interface CommentProps {
  id: string;
}

export const Comments = async ({ id }: CommentProps) => {
  const { productRequests } = useContext(FeedBackContext);
  if (!productRequests) return null;

  const productRequestIndex = productRequests.findIndex(
    (productRequest) => productRequest.id === +id
  );

  return (
    <div>
      <div className="flex">
        <CommentsCounter
          comments={productRequests[productRequestIndex!].comments?.length}
        />
        <span className="ml-2 text-xl font-bold">Comments</span>
      </div>
      <CommentsList comments={productRequests[productRequestIndex!].comments} />
    </div>
  );
};
