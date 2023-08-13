import { FeedbackService } from "@/services";
import "@/database/db";

const Feedback = new FeedbackService();

export async function GET() {
  try {
    const productRequest = await Feedback.getFeedbacks();
    return new Response(JSON.stringify({ ok: true, productRequest }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "error getting productRequests" }),
      { status: 500 }
    );
  }
}
