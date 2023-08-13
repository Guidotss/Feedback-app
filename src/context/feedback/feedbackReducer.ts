import { Comment, ProductRequest, Reply } from "@/interface";
import { FeedBackState } from "..";

type FeedBackActionType =
  | { type: "[FeedBack] - SortBy"; payload: string }
  | { type: "[FeedBack] - LoadFeedBack"; payload: ProductRequest[] }
  | { type: "[FeedBack] - FilterFeedback"; payload: string }
  | { type: "[FeedBack] - CreateFeedback"; payload: ProductRequest }
  | { type: "[FeedBack] - DeleteFeedback"; payload: ProductRequest }
  | { type: "[FeedBack] - UpdateFeedback"; payload: ProductRequest }
  | { type: "[FeedBack] - UpdateUpvotes"; payload: number }
  | {
      type: "[FeedBack] - AddComment";
      payload: { comment: Comment; id: number };
    }
  | {
      type: "[FeedBack] - AddReply";
      payload: { reply: Reply; commentId: number; productRequestId: number };
    };

export const feedBackReducer = (
  state: FeedBackState,
  action: FeedBackActionType
): FeedBackState => {
  switch (action.type) {
    case "[FeedBack] - SortBy":
      return {
        ...state,
        sortBy: action.payload,
        productRequests: state.productRequests?.sort(
          (a: ProductRequest, b: ProductRequest) => {
            if (action.payload === "Most Upvotes") return b.upvotes - a.upvotes;
            if (action.payload === "Least Upvotes")
              return a.upvotes - b.upvotes;
            if (action.payload === "Most Comments")
              return b.comments?.length! - a.comments?.length!;
            if (action.payload === "Least Comments")
              return a.comments?.length! - b.comments?.length!;
            return 0;
          }
        ),
      };

    case "[FeedBack] - LoadFeedBack":
      return {
        ...state,
        productRequests: action.payload,
        allProductRequests: action.payload,
      };
    case "[FeedBack] - FilterFeedback":
      if (action.payload.toLowerCase() === "all")
        return { ...state, productRequests: state.allProductRequests };

      return {
        ...state,
        productRequests: state.allProductRequests?.filter(
          (productRequest: ProductRequest) => {
            return (
              productRequest.category.toLowerCase() ===
              action.payload.toLowerCase()
            );
          }
        ),
      };

    case "[FeedBack] - CreateFeedback":
      return {
        ...state,
        productRequests: [...state.productRequests!, action.payload],
      };

    case "[FeedBack] - DeleteFeedback":
      return {
        ...state,
        productRequests: state.productRequests?.filter(
          (productRequest: ProductRequest) =>
            productRequest.id !== action.payload.id
        ),
      };

    case "[FeedBack] - UpdateFeedback":
      return {
        ...state,
        productRequests: state.productRequests?.map(
          (productRequest: ProductRequest) => {
            if (productRequest.id === action.payload.id) return action.payload;
            return productRequest;
          }
        ),
      };

    case "[FeedBack] - UpdateUpvotes":
      return {
        ...state,
        productRequests: state.productRequests?.map(
          (productRequest: ProductRequest) => {
            if (
              productRequest.id === action.payload &&
              !productRequest.isLiked
            ) {
              return {
                ...productRequest,
                upvotes: productRequest.upvotes + 1,
                isLiked: true,
              };
            }
            if (
              productRequest.id === action.payload &&
              productRequest.isLiked
            ) {
              return {
                ...productRequest,
                upvotes: productRequest.upvotes - 1,
                isLiked: false,
              };
            }
            return productRequest;
          }
        ),
      };

    case "[FeedBack] - AddComment":
      return {
        ...state,
        productRequests: state.productRequests?.map(
          (productRequest: ProductRequest) => {
            if (productRequest.id === action.payload.id) {
              return {
                ...productRequest,
                comments: [...productRequest.comments!, action.payload.comment],
              };
            }
            return productRequest;
          }
        ),
      };
    case "[FeedBack] - AddReply":
      console.log(action.payload.commentId);
      return {
        ...state,
        productRequests: state.productRequests?.map(
          (productRequest: ProductRequest) => {
            if (productRequest.id === action.payload.productRequestId) {
              return {
                ...productRequest,
                comments: productRequest.comments?.map((comment: Comment) => {
                  if (comment.id === action.payload.commentId) {
                    return {
                      ...comment,
                      replies: [...comment.replies!, action.payload.reply],
                    };
                  }
                  return comment;
                }),
              };
            }
            return productRequest;
          }
        ),
      };
    default:
      return state;
  }
};
