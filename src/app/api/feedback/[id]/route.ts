import { NextRequest, NextResponse } from "next/server";
import { FeedbackService } from "@/services";
import "@/database/db";

const Feedback = new FeedbackService();

export async function GET(request: NextRequest) {
  const id = request.url.split("/").pop();

  try {
    if (id) {
      const feedback = await Feedback.getFeedbackById(+id);
      return NextResponse.json({ ok: true, feedback }, { status: 200 });
    } else {
      return NextResponse.json(
        { ok: false, message: "Error getting feedback by id" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { ok: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const id = req.url.split("/").pop();
  const { ...rest } = await req.json();

  if (!id)
    return new Response(
      JSON.stringify({ ok: false, message: "id is required" }),
      { status: 400 }
    );
  if (!rest)
    return new Response(
      JSON.stringify({ ok: false, message: "feedback is required" }),
      { status: 400 }
    );

  try {
    const feedback = await Feedback.updateFeedback(+id, rest);
    return new Response(
      JSON.stringify({ ok: true, message: "feedback updated", feedback }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function DELETE(req: Request) {
  const id = req.url.split("/").pop();
  if (!id)
    return new Response(
      JSON.stringify({ ok: false, message: "id is required" }),
      { status: 400 }
    );

  try {
    const feedback = await Feedback.deleteFeedback(+id);
    return new Response(
      JSON.stringify({ ok: true, message: "feedback deleted", feedback }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
