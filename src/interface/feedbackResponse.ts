import { ProductRequest, User } from "./feedback";

export interface FeedbackResponse {
  ok: boolean;
  feedbacks: {
    _id: string;
    currentUser: {
      _id: string;
      name: string;
      image: string;
      username: string;
    };
    productsRequests: ProductRequest[];
  };
}
