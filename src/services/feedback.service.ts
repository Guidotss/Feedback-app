import { ProductRequest, FeedbackModel } from "@/database/models";
import {
  Comment,
  ProductRequest as IProductRequest,
  Reply,
  Reply as IReply,
} from "@/interface";
import { productRequesService } from "./productReques.service";

export class FeedbackService {
  private readonly FeedbackModel = FeedbackModel;
  private readonly ProductRequestModel = ProductRequest;

  constructor(
    private readonly productRequestService: productRequesService = new productRequesService()
  ) {}

  public async getFeedbacks() {
    try {
      const currentUser = await this.FeedbackModel.find({})
        .populate("currentUser")
        .lean()
        .select("-__v, -productRequests");

      const productsRequests =
        await this.productRequestService.getProductRequests();

      return {
        currentUser: currentUser[0].currentUser,
        productsRequests: productsRequests,
      };
    } catch (error) {
      console.log(error);
      throw new Error(`Error getting feedbacks: ${error}`);
    }
  }

  public async getFeedbackById(id: number) {
    try {
      const productRequest =
        await this.productRequestService.getProductRequestById(id);
      return productRequest;
    } catch (error) {
      console.log(error);
      throw new Error(`Error getting feedback by id: ${error}`);
    }
  }

  public async createFeedback(productRequest: IProductRequest) {
    try {
      const newProductRequest =
        await this.productRequestService.createProductRequest(productRequest);
      const feebackDocument = await this.FeedbackModel.findOne({
        currentUser: "64d9079fd4668ab5fd7f9e00",
      });
      

      if (!feebackDocument) throw new Error("Feedback not found");

      feebackDocument.productRequests.push(newProductRequest._id);
      await feebackDocument.save();

      return newProductRequest;
    } catch (error) {
      console.log(error);
      throw new Error(`Error creating feedback: ${error}`);
    }
  }

  public async updateFeedback(id: number, productRequest: IProductRequest) {
    const feedback = await this.getFeedbackById(id);
    try {
      const feedbackUpdated = await this.ProductRequestModel.findByIdAndUpdate(
        feedback._id,
        productRequest,
        { new: true }
      )
        .select("-__v")
        .lean();
      return feedbackUpdated;
    } catch (error) {
      console.log(error);
      throw new Error(`Error updating feedback: ${error}`);
    }
  }

  public async deleteFeedback(id: number) {
    const feedback = await this.getFeedbackById(id);

    try {
      const deletedFeedback = await this.ProductRequestModel.findByIdAndDelete(
        feedback._id
      );
      return deletedFeedback;
    } catch (error) {
      console.log(error);
      throw new Error(`Error deleting feedback: ${error}`);
    }
  }
  public async updateUpvotes(id: number) {
    const feedback = await this.getFeedbackById(id);
    try {
      if (feedback.isLiked) {
        feedback.isLiked = false;
        feedback.upvotes = feedback.upvotes - 1;
      } else {
        feedback.isLiked = true;
        feedback.upvotes = feedback.upvotes + 1;
      }

      const feedbackUpdated = await this.ProductRequestModel.findByIdAndUpdate(
        feedback._id,
        feedback,
        { new: true }
      );
      return feedbackUpdated;
    } catch (error) {
      console.log(error);
      throw new Error(`Error updating upvotes: ${error}`);
    }
  }
  public async createNewComment(id: number, comment: Comment) {
    try {
      const feedback = await this.getFeedbackById(id);
      const commentsIds = feedback.comments?.map(
        (comment: Comment) => comment.id
      );
      if (!commentsIds?.length) {
        comment.id = 1;
      } else {
        const hieghestId = Math.max(
          ...commentsIds.map((id: string) => Number(id))
        );
        comment.id = hieghestId + 1;
      }

      try {
        const feedbackUpdated =
          await this.ProductRequestModel.findByIdAndUpdate(
            feedback._id,
            { comments: [...feedback.comments!, comment] },
            { new: true }
          )
            .select("-__v")
            .lean();
        return feedbackUpdated;
      } catch (error) {
        console.log(error);
        throw new Error(`Error creating new comment: ${error}`);
      }
    } catch (error) {
      console.log(error);
      throw new Error(`Error creating new comment: ${error}`);
    }
  }

  public async createNewReply(id: number, commentId: number, reply: Reply) {
    const feedback = await this.getFeedbackById(+id);

    try {
      const productRequest = await this.ProductRequestModel.findByIdAndUpdate(
        feedback._id,
        {
          comments: feedback.comments?.map((comment: Comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: [...comment.replies!, reply],
              };
            }
            return comment;
          }),
        },
        { new: true }
      );

      return productRequest;
    } catch (error) {
      console.log(error);
      throw new Error(`Error creating new reply: ${error}`);
    }
  }
}
