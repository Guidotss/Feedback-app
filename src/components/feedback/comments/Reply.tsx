import { FC } from "react";
import Image from "next/image";
import { Reply as IReply } from "@/interface";

interface ReplyProps {
  reply: IReply;
}

export const Reply: FC<ReplyProps> = ({ reply }) => {
  return (
    <div className="flex">
      <Image
        className="rounded-full w-12 h-12"
        src={`${reply.user.image}`}
        alt={reply.user.name}
        width={50}
        height={50}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-lg ml-4">{reply.user.name}</span>
        <span className="text-sm text-gray-400 ml-4">
          @{reply.user.username}
        </span>
        <p className="mt-4 text-md text-bg_labels_2 ml-4">
          {reply.replyingTo && (
            <span className=" text-button_1 font-bold">
              @{reply.replyingTo}{" "}
            </span>
          )}
          {reply.content}
        </p>
      </div>
    </div>
  );
};
