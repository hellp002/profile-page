import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await db.project.findMany();
  return Response.json({ message: "hello" });
}
