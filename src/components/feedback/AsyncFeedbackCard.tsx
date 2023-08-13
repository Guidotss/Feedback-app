import { IconArrowUp, IconComments } from "../ui";
import { ProductRequest } from "../../interface/feedback";
import { CommentsCounter } from "./comments";

interface AsyncFeedbackCardProps {
  id: string;
}

const fetchProductRequest = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },  
  });
  const data = await response.json();
  return data;
};

export const AsyncFeedbackCard = async({ id }: AsyncFeedbackCardProps) => {
  const productRequestFetch = await fetchProductRequest(id);
  const productRequest: ProductRequest = productRequestFetch?.feedback;

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10">
        <button className="bg-bg_labels h-14 p-2 px-3 rounded-lg text-sm flex flex-col items-center justify-center">
          <IconArrowUp color={"#4661E6"} />
          <span className="mt-1">{productRequest?.upvotes}</span>
        </button>
        <div className="h-20">
          <h3 className="text-button_3 hover:text-button_2 transition-all text-2xl">
            {productRequest?.title}
          </h3>
          <p className="text-lg text-button_3 font-light">
            {productRequest?.description}
          </p>
          <span className="text-button_2  bg-bg_labels font-semibold text-sm p-2 px-4 rounded-lg absolute mt-2">
            {productRequest?.category}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IconComments />
        <span className="text-lg text-header">
          <CommentsCounter />
        </span>
      </div>
    </div>
  );
};
