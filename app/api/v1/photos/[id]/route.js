import { getSinglePhoto } from "@/lib/image-data";
import { NextResponse } from "next/server";

export const GET = (_req, { params: { id } }) => {
  const photo = getSinglePhoto(id);

  if (!photo) {
    return NextResponse.json(
      {
        success: false,
        message: "Photo not found with this id:" + id,
        statusCode: 404,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(photo);
};
