import db from "@/app/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const data = await db.certificate.findMany();
  return Response.json(data);
}
