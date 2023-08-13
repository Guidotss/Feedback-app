import { EditFeedbackForm } from "@/components/feedback/edit";
import { IconArrowLeft, IconEditFeedback } from "@/components/ui";
import Link from "next/link";

async function getFeefbackById(id: string) {
  const res = await fetch(`${process.env.API_URL}/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

const EditPage = async ({ params }: { params: { id: string } }) => {
  const feedbackFetch = await getFeefbackById(params.id);
  const { feedback } = feedbackFetch;
  return (
    <div className="flex flex-col w-full 2xl:px-52 items-center">
      <header className="flex md:w-[540px] w-full mb-12 mt-10">
        <div className="flex items-center">
          <IconArrowLeft />
          <Link className="ml-2 font-bold text-bg_labels_2 text-lg" href="/">
            Go back
          </Link>
        </div>
        <div className="flex-1" />
      </header>
      <main className="md:w-[540px] h-[850px] bg-bg_comments rounded-xl flex flex-col p-10">
        <div className="absolute  -mt-20">
          <IconEditFeedback />
        </div>
        <div className="mt-10 w-full">
          <h2 className="text-3xl font-bold text-header mb-4 tracking-tight">
            Editing ‘Add a dark theme option’
          </h2>
        </div>
        <EditFeedbackForm
          describeInputValue={feedback.title}
          currentCategory={feedback.category}
          feedbackDetails={feedback.description}
        />
      </main>
    </div>
  );
};
export default EditPage;
