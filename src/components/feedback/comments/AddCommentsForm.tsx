"use client";
import { FC, useContext, useState } from "react";
import { useParams } from "next/navigation";
import { FeedBackContext } from "@/context";

interface AddCommentsFormProps {
  buttonTitle?: string;
}

export const AddCommentsForm: FC<AddCommentsFormProps> = ({ buttonTitle }) => {
  const { id } = useParams();

  const [comment, setComment] = useState({
    characters: 250,
    value: "",
  });
  const { AddComment } = useContext(FeedBackContext);

  const handleAddComment = () => {
    const newComment = {
      id: 1,
      content: comment.value,
      user: {
        image: "./assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
      replies: [],
    };
    AddComment(+id, newComment);
    setComment({ ...comment, value: " " });
  };

  return (
    <div className="flex flex-col">
      <textarea
        className="bg-bg_labels rounded-lg p-4 px-8 text-button_3 resize-none"
        placeholder="Type your comment here..."
        rows={3}
        maxLength={250}
        value={comment.value}
        onChange={(e) =>
          setComment({
            ...comment,
            characters: 250 - e.target.value.length,
            value: e.target.value,
          })
        }
      />
      <div className="flex mt-4 justify-between items-center">
        <span className="text-button_3 font-light opacity-[0.9] mt-2 ml-1">
          {comment.characters} Characters left
        </span>
        <button
          className="p-3 bg-button_1 rounded-lg md:px-10"
          onClick={handleAddComment}
        >
          <span className="text-bg_comments text-sm font-semibold">
            {buttonTitle || "Post Comment"}
          </span>
        </button>
      </div>
    </div>
  );
};
