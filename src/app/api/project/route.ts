import db from "@/app/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const data = await db.project.findMany();
  return Response.json(data);
}
