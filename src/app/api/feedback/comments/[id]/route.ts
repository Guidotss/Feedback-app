import { FeedbackService } from "@/services";
import "@/database/db";

const Feedback = new FeedbackService();

export async function POST(req: Request) {
  const id = req.url.split("/").pop();
  const { ...comment } = await req.json();

  if (!id || !comment)
    return new Response(
      JSON.stringify({ ok: false, message: "Missing id or comment" }),
      { status: 400 }
    );

  try {
    const newComment = await Feedback.createNewComment(+id, comment);
    return new Response(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
