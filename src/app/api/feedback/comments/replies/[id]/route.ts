import { FeedbackService } from "@/services";
import "@/database/db";

const Feedback = new FeedbackService();

export async function POST(req: Request) {
  const id = req.url.split("/").pop();
  const { commentId, ...rest } = await req.json();

  if (!id)
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });

  try {
    const newReply = await Feedback.createNewReply(+id, commentId, rest);
    return new Response(JSON.stringify({ newReply }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
