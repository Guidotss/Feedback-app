import { NextResponse } from "next/server";
import { SeedService } from "@/services";
import "@/database/db";

export async function GET() {

  if(process.env.NODE_ENV !== "development"){ 
    console.log("Not in development mode, aborting seed");
    return new Response(JSON.stringify({ok: false, message: "Not in development mode, aborting seed"}), {status: 400});
  }

  try {
    const seedService = new SeedService();
    const data = await seedService.seedFeedbacks();
    return NextResponse.json(
      { ok: true, message: "Data seeded", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
