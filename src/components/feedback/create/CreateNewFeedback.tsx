"use client";
import { FormEvent, MouseEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { DescribeInput, CustomSelect, FeedbackDetails } from "./";
import { useSelect } from "@/hooks";
import { FeedBackContext } from "@/context";
import { ProductRequest } from "@/interface";

const CreateFeedbackForm = () => {
  const router = useRouter();

  const { category, isCategoryOpen, filters, setCategory, setIsCategoryOpen } =
    useSelect({});
  const { createNewFeedback } = useContext(FeedBackContext);
  const [describe, setDescripe] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const handleSwitchCategory = (event: MouseEvent, name: string) => {
    event.preventDefault();
    event.stopPropagation();
    setCategory(name);
    setIsCategoryOpen(false);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const newFeedback = {
      title: describe,
      category: category,
      description: details,
    } as ProductRequest;

    createNewFeedback(newFeedback);
    router.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <DescribeInput setDescripe={setDescripe} />
      <CustomSelect
        category={category}
        isOpen={isCategoryOpen}
        title="Category"
        description="Choose a category for your feedback"
        selectItems={filters}
        setOpen={setIsCategoryOpen}
        setCategory={setCategory}
        handleSwitchCategory={handleSwitchCategory}
      />
      <FeedbackDetails setDetails={setDetails} />
      <div className="flex flex-col gap-2 md:flex-row justify-end mt-5">
        <button className="bg-button_3 rounded-lg px-5 py-3 text-bg_app font-bold md:mr-3">
          Cancel
        </button>
        <button
          className="bg-button_1 text-bg_app font-bold px-5 py-3 rounded-lg"
          onClick={onSubmit}
        >
          Add Feedback
        </button>
      </div>
    </form>
  );
};

export default CreateFeedbackForm;
