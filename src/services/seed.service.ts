import { ProductRequest, CurrentUser, FeedbackModel } from "@/database/models";
import data from "@/data/data.json";

export class SeedService {
  private readonly ProductModel = ProductRequest;
  private readonly CurrentUser = CurrentUser;
  private readonly FeedbackModel = FeedbackModel;

  constructor() {}

  public async seedFeedbacks() {
    try {
      await this.CurrentUser.deleteMany({});
      await this.ProductModel.deleteMany({});
      await this.FeedbackModel.deleteMany({});
      const user = await this.CurrentUser.create(data.currentUser);

      const productRequests = data.productRequests.map((productRequest) => {
        return { ...productRequest, user: user._id };
      });
      const productRequestsCreated = await this.ProductModel.create(
        productRequests
      );
      const productsRequestsIds = productRequestsCreated.map(
        (productRequest) => productRequest._id
      );

      if (user && productRequestsCreated) {
        await this.FeedbackModel.deleteMany({});
        const feedbacks = await this.FeedbackModel.create({
          productRequests: productsRequestsIds,
          currentUser: user._id,
        });
        return feedbacks;
      }
    } catch (error) {
      console.log(error);
      throw new Error(`Error seeding feedbacks: ${error}`);
    }
  }
}
