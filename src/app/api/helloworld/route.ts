import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateSchema = z.object({
  from: z.string().min(1).email(),
  to: z.string().min(1).email(),
  subject: z.string().min(1),
});

type Creator = z.infer<typeof CreateSchema>;

export async function GET(req: NextRequest) {
  const res = await db.project.findMany();
  return Response.json(res);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parseData = CreateSchema.safeParse(data);
  if (!parseData.success) {
    console.log(parseData.error);
    return NextResponse.json({ message: "forbidden format" }, { status: 404 });
  }
  const readData = parseData.data;

  return Response.json({ message: "success", data: readData });
}
