"use client";
import { FC, useEffect, useReducer } from "react";
import { FeedBackContext, feedBackReducer } from "..";
import { Comment, FeedbackResponse, ProductRequest, Reply } from "@/interface";

export interface FeedBackState {
  productRequests: ProductRequest[] | undefined;
  allProductRequests: ProductRequest[] | undefined;
  sortBy: string;
}

interface FeedBackProviderProps {
  children: React.ReactNode;
}

const FEEDBACK_INITIAL_STATE: FeedBackState = {
  productRequests: undefined,
  allProductRequests: undefined,
  sortBy: "MostUpvotes",
};

export const FeedBackProvider: FC<FeedBackProviderProps> = ({ children }) => {
  useEffect(() => {
    loadFeedBack();
  }, []);

  const [state, dispatch] = useReducer(feedBackReducer, FEEDBACK_INITIAL_STATE);

  const setSortBy = (sortBy: string) => {
    dispatch({ type: "[FeedBack] - SortBy", payload: sortBy });
  };

  const loadFeedBack = async () => {
    const response = await fetch("/api/feedback");
    const feedback = await response.json();
    const { feedbacks } = feedback as FeedbackResponse;

    dispatch({
      type: "[FeedBack] - LoadFeedBack",
      payload: feedbacks.productsRequests,
    });
  };

  const setFilters = (filter: string) => {
    dispatch({ type: "[FeedBack] - FilterFeedback", payload: filter });
  };

  const createNewFeedback = async (productRequest: ProductRequest) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(productRequest),
      });
      const data = await response.json();

      dispatch({ type: "[FeedBack] - CreateFeedback", payload: data.feedback });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeedback = async (id: number) => {
    try {
      const response = await fetch(`/api/feedback/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "[FeedBack] - DeleteFeedback", payload: data.feedback });
    } catch (error) {
      console.log(error);
    }
  };

  const updateFeedback = async (id: number, productRequest: ProductRequest) => {
    try {
      const response = await fetch(`/api/feedback/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productRequest),
      });
      const data = await response.json();
      dispatch({ type: "[FeedBack] - UpdateFeedback", payload: data.feedback });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUpvotes = async (id: number) => {
    const feedback = state.productRequests?.find(
      (feedback) => feedback.id === id
    );
    if (!feedback) return;

    if (!feedback.isLiked) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("favorites") || "[]"),
          id,
        ])
      );
    } else {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const newFavorites = favorites.filter((favorite: number) => {
        return favorite !== id;
      });
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }

    try {
      const response = await fetch("api/feedback", {
        method: "PUT",
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "[FeedBack] - UpdateUpvotes", payload: id });
  };

  const AddComment = async (id: number, comment: Comment) => {
    dispatch({ type: "[FeedBack] - AddComment", payload: { comment, id } });

    try {
      await fetch(`/api/feedback/comments/${id}`, {
        method: "POST",
        body: JSON.stringify(comment),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const AddReply = async (
    commentId: number,
    reply: Reply,
    productRequestId: number
  ) => {
    dispatch({
      type: "[FeedBack] - AddReply",
      payload: { reply, commentId, productRequestId },
    });
    const response = await fetch(
      `/api/feedback/comments/replies/${productRequestId}`,
      {
        method: "POST",
        body: JSON.stringify({ commentId, ...reply }),
      }
    );
    const data = await response.json();
    console.log({ data });
  };

  return (
    <FeedBackContext.Provider
      value={{
        ...state,

        setSortBy,
        setFilters,
        createNewFeedback,
        deleteFeedback,
        updateFeedback,
        updateUpvotes,
        AddComment,
        AddReply,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};
