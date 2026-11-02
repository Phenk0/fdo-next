import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "Failed to fetch employees" },
    { status: 500 },
  );
}
