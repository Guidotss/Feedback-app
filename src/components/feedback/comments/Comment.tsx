"use client";
import { FC, useContext, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { Comment as IComment, Reply } from "@/interface";
import { FeedBackContext } from "@/context";

interface CommentProps {
  comment: IComment;
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");
  const { AddReply } = useContext(FeedBackContext);
  const { id } = useParams();

  const handleReply = () => {
    setIsReplyOpen(!isReplyOpen);
    const newReply = {
      content: reply,
      replyingTo: comment.user.username,
      user: {
        image: "/assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
    } as Reply;
    AddReply(comment.id, newReply, +id);
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Image
          className="rounded-full w-12 h-12"
          src={`${comment.user.image}`}
          alt={comment.user.name}
          width={50}
          height={50}
          loading="eager"
          priority
          loader={({ src }) => `${src}`}
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <span className="font-semibold text-lg ml-4">
              {comment.user.name}
            </span>
            <span className="text-sm text-gray-400 ml-4">
              @{comment.user.username}
            </span>
            <p className="mt-4 text-md text-bg_labels_2 ml-4">
              {comment.content}
            </p>
          </div>
          <div>
            <button
              className="text-button_2 font-bold"
              onClick={() => setIsReplyOpen(!isReplyOpen)}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
      {isReplyOpen && (
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center ml-10 mt-10">
          <textarea
            className="bg-bg_labels rounded-lg p-7 px-8 text-button_3 resize-none md:w-[600px] w-[300px] focus:outline-2 focus:outline-blue-400 "
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            className=" bg-button_1 rounded-lg  text-slate-50 font-semibold md:mt-0 mt-2 md:ml-5 h-12 md:w-[200px] w-[300px]"
            name="reply"
            value={reply}
            onClick={handleReply}
          >
            Post Reply
          </button>
        </div>
      )}
    </div>
  );
};
