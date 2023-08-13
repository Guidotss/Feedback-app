import ProductRequestModel from "@/database/models/productRequests.model";
import { ProductRequest } from "@/interface";

export class productRequesService {
  constructor(private readonly productRequestModel = ProductRequestModel) {}

  public async getProductRequests() {
    try {
      const productRequests = await this.productRequestModel
        .find({})
        .lean()
        .select("-__v");
      return productRequests;
    } catch (error) {
      console.log(error);
      throw new Error(`Error getting productRequests: ${error}`);
    }
  }

  public async getProductRequestById(id: number) {
    try {
      const productRequest = await this.productRequestModel
        .find({ id })
        .lean()
        .select("-__v");
      if (!productRequest) throw new Error("productRequest not found");

      return productRequest.reduce((acc, productRequest) => {
        return { ...acc, ...productRequest };
      });
    } catch (error) {
      console.log(error);
      throw new Error(`Error getting productRequest by id: ${error}`);
    }
  }

  public async createProductRequest(productRequest: ProductRequest) {
    try {
      const allProductRequests = await this.getProductRequests();

      const productRequestIds = allProductRequests.map(
        (productRequest) => productRequest.id
      );
      const hieghestId = Math.max(...productRequestIds.map((id) => Number(id)));

      const newProductRequest = await this.productRequestModel.create({
        ...productRequest,
        id: hieghestId + 1,
      });

      return newProductRequest;
    } catch (error) {
      console.log(error);
      throw new Error(`Error creating productRequest: ${error}`);
    }
  }
}
