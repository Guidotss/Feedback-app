import { NextResponse } from "next/server";
import { FeedbackService } from "@/services";
import "@/database/db";

const Feedback = new FeedbackService();

export async function GET() {
  try {
    const feedbacks = await Feedback.getFeedbacks();
    return NextResponse.json({ ok: true, feedbacks });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "error getting feedbacks" }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const { ...rest } = await req.json();

    if (!rest)
      return new Response(
        JSON.stringify({ ok: false, message: "feedback is required" }),
        { status: 400 }
      );

    const newFeedback = await Feedback.createFeedback(rest);

    return new Response(
      JSON.stringify({
        ok: true,
        message: "feedback created",
        feedback: newFeedback,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "error creating feedback" }),
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const { id } = await req.json();
  if (!id)
    return new Response(
      JSON.stringify({ ok: false, message: "id is required" }),
      { status: 400 }
    );
  try {
    const feedback = await Feedback.updateUpvotes(+id);
    return NextResponse.json({ ok: true, feedback });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "error updating feedback" }),
      { status: 500 }
    );
  }
}
