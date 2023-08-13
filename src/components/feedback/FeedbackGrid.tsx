import { FeedbackList } from "./FeedbackList";

/* async function fetchFeedbacks() {
  const res = await fetch("http://localhost:3000/api/feedback", {cache: "no-store"});
  const json = await res.json();
  return json;
}
*/

export const FeedbackGrid = async () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <FeedbackList />
    </div>
  );
};
