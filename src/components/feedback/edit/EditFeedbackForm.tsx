"use client";
import { FC } from "react";
import { CustomSelect, DescribeInput, FeedbackDetails } from "../create";
import { useForm, useSelect } from "@/hooks";

interface EditFeedbackFormProps {
  describeInputValue: string;
  currentCategory: string;
  feedbackDetails: string;
}

const EditFeedbackForm: FC<EditFeedbackFormProps> = ({
  describeInputValue,
  currentCategory,
  feedbackDetails,
}) => {
  const {
    category,
    isCategoryOpen,
    statusState,
    status,
    filters,
    isStatusOpen,
    setCategory,
    setIsCategoryOpen,
    setIsStatusOpen,
    handleSwitchCategory,
    handleSwitchStatus,
  } = useSelect({ currentCategory });

  const {
    describe,
    setDescribe,
    details,
    setDetails,
    handleDeleteFeedback,
    handleUpdateFeedback,
  } = useForm({
    describeInputValue,
    feedbackDetails,
    category,
    statusState,
  });

  return (
    <form>
      <DescribeInput setDescripe={setDescribe} describeInputValue={describe} />
      <CustomSelect
        title="Category"
        description="Choose a category for your feedback"
        category={category}
        isOpen={isCategoryOpen}
        selectItems={filters}
        setCategory={setCategory}
        handleSwitchCategory={handleSwitchCategory}
        setOpen={setIsCategoryOpen}
      />
      <CustomSelect
        title="Update Status"
        description="Change feature state"
        category={statusState}
        isOpen={isStatusOpen}
        selectItems={status}
        setCategory={setCategory}
        handleSwitchCategory={handleSwitchStatus}
        setOpen={setIsStatusOpen}
      />
      <FeedbackDetails feedbackDetailsValue={details} setDetails={setDetails} />
      <div className="flex flex-col md:flex-row justify-between mt-6 items-center">
        <div className="w-full md:w-auto">
          <button
            className="bg-red-600 py-3 px-7 rounded-xl w-full md:w-auto hover:bg-red-500 transition-all"
            onClick={(event) => handleDeleteFeedback(event)}
          >
            <span className="text-bg_app font-bold text-sm">Delete</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-3 md:gap-0">
          <button className="bg-button_3 hover:bg-gray-500 rounded-xl px-7 py-3 mr-3 transition-all w-full md:w-auto mt-2 md:mt-0">
            <span className="text-bg_app font-bold text-sm">Cancel</span>
          </button>
          <button
            className="bg-button_1 hover:bg-purple-400 px-7 py-3 rounded-xl transition"
            onClick={(event) => handleUpdateFeedback(event)}
          >
            <span className="text-bg_app text-sm font-bold">Add Feedback</span>
          </button>
        </div>
      </div>
    </form>
  );
};
export default EditFeedbackForm;
