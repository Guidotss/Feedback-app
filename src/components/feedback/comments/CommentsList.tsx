import { FC } from "react";
import { Comment } from "./Comment";
import { ReplyList } from "./ReplyList";
import { Comment as IComment } from "@/interface";
import { v4 as uuid } from "uuid";

interface CommentsListProps {
  comments?: IComment[];
}

export const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  return (
    <div className="flex flex-col">
      {comments?.map((comment) => (
        <div key={uuid()}>
          <div className="flex mt-10 w-full">
            <div className="flex flex-col w-full">
              <Comment comment={comment} />
              {comment.replies?.length! > 0 && (
                <ReplyList replies={comment.replies!} />
              )}
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-400 mt-5" />
        </div>
      ))}
    </div>
  );
};
