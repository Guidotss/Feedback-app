import { FC } from "react";
import { Reply as IReply } from "@/interface";
import { Reply } from "./Reply";

interface ReplyProps {
  replies: IReply[];
}

export const ReplyList: FC<ReplyProps> = ({ replies }) => {
  return (
    <div className="flex flex-col ml-10 gap-10 mt-5">
      {replies?.length! > 1 && (
        <div className="h-[30vh] w-[1px] -ml-5 -mt-16 bg-gray-400 absolute opacity-[0.2]" />
      )}
      {replies?.map((reply, index) => (
        <div key={index}>
          <Reply reply={reply} />
        </div>
      ))}
    </div>
  );
};
