"use client";

import { Comment, ProductRequest, Reply } from "@/interface";
import { createContext } from "react";

interface FeedContextProps {
  productRequests: ProductRequest[] | undefined;
  sortBy: string;

  setSortBy: (sortBy: string) => void;
  setFilters: (filter: string) => void;
  createNewFeedback: (productReques: ProductRequest) => void;
  deleteFeedback: (id: number) => void;
  updateFeedback: (id: number, productRequest: ProductRequest) => void;
  updateUpvotes: (id: number) => void;
  AddComment: (id: number, comment: Comment) => void;
  AddReply: (commentId: number, reply: Reply, productRequestId: number) => void;
}

export const FeedBackContext = createContext({} as FeedContextProps);
