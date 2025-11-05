export const dynamic = "force-dynamic";

import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export const GET = () => {
  const photos = getAllPhotos();

  return NextResponse.json(photos);
};
