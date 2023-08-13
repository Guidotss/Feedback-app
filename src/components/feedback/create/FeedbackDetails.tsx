import { Dispatch, FC, SetStateAction } from "react";

interface FeedbackDetailsProps {
  setDetails: Dispatch<SetStateAction<string>>;
  feedbackDetailsValue?: string;
}

export const FeedbackDetails: FC<FeedbackDetailsProps> = ({
  setDetails,
  feedbackDetailsValue,
}) => {
  return (
    <>
      <div className="w-full">
        <p className="font-bold mt-6 text-button_3 text-lg tracking-tighter">
          Feedback Detail
        </p>
        <span className="text-[15px] font-light text-button_3 opacity-[0.9]">
          Include any specific comment on what should be improved, added, etc{" "}
        </span>
        <textarea
          className="w-full bg-bg_labels p-4 mt-2 rounded-lg resize-none"
          rows={3}
          onChange={(event) => setDetails(event.target.value)}
          value={feedbackDetailsValue}
        />
      </div>
    </>
  );
};
