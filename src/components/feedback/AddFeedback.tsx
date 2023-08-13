"use client";
import { useRouter } from "next/navigation";
import { IconPlus } from "../ui";

export const AddFeedback = () => {
  const router = useRouter();

  const navigate = () => {
    router.push("/feedback/create");
  };

  return (
    <button
      className="bg-button_1 flex items-center text-slate-50 p-2 lg:px-5 rounded-lg hover:bg-purple-500 transition-all"
      onClick={navigate}
    >
      <IconPlus />
      <span className="md:text-lg md:tracking-wide font-semibold">
        Add Feedback
      </span>
    </button>
  );
};
