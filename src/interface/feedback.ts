export interface User {
  image: string;
  name: string;
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

export interface Reply {
  user: User;
  content: string;
  replyingTo: string;
}

export interface ProductRequest {
  id?: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
  isLiked: boolean;
}

export interface FeedBack {
  currentUser: User | null;
  productRequests: ProductRequest[];
}
