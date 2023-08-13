import { IconComments } from "@/components/ui";
import { FeedbackUpvotesButton } from "../FeedbackUpvotesButton";

interface AsyncMobileCardProps {
  id: string;
}

const fetchProductRequest = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data.feedback;
};

export const AsyncMobileCard = async ({ id }: AsyncMobileCardProps) => {
  const productRequest = await fetchProductRequest(id);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-bg_labels_2">
        <h3 className="font-semibold text-lg">{productRequest?.title}</h3>
        <span className="text-sm font-light">
          {productRequest?.description}
        </span>
        <div className="mt-4">
          <span className="text-button_2  bg-bg_labels font-semibold px-4 py-2 rounded-lg">
            {productRequest?.category}
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <FeedbackUpvotesButton
          isLiked={productRequest?.isLiked!}
          upvotes={productRequest?.upvotes!}
          id={productRequest?.id}
        />
        <div className="flex items-center gap-2">
          <IconComments />
          <span className="text-lg text-header">
            {productRequest?.comments?.length || 0}
          </span>
        </div>
      </div>
    </div>
  );
};
