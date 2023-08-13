"use client";
import { useContext, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { FeedBackContext } from "@/context";
import { ProductRequest } from "@/interface";

interface UseFormProps {
  describeInputValue: string;
  feedbackDetails: string;
  category: string;
  statusState: string;
}

export const useForm = ({
  describeInputValue,
  feedbackDetails,
  category,
  statusState,
}: UseFormProps) => {
  const { id } = useParams();
  const router = useRouter();
  const { deleteFeedback, updateFeedback } = useContext(FeedBackContext);
  const [describe, setDescribe] = useState(describeInputValue);
  const [details, setDetails] = useState(feedbackDetails);

  const handleDeleteFeedback = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    deleteFeedback(+id);
    router.push("/");
  };

  const handleUpdateFeedback = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const productRequest = {
      title: describe,
      description: details,
      category,
      status: statusState,
    } as ProductRequest;

    updateFeedback(+id, productRequest);
    router.push("/");
    router.refresh();
  };

  return {
    describe,
    details,

    setDescribe,
    setDetails,
    handleDeleteFeedback,
    handleUpdateFeedback,
  };
};
