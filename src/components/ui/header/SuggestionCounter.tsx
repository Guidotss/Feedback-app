"use client";
import { FeedBackContext } from "@/context";
import { useContext } from "react";

export const SuggestionCounter = async () => {
  const { productRequests } = useContext(FeedBackContext);
  return (
    <h1 className="lg:text-2xl text-lg font-bold ml-5 text-bg_comments hidden md:block">
      {productRequests?.length} Suggestions
    </h1>
  );
};
