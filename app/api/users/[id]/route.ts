import { NextRequest, NextResponse } from "next/server";
import schema from "../../schema";
import prisma from "@/prisma/client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  if (id > 10)
    return NextResponse.json(
      { message: "This user doesn't exists!" },
      { status: 404, statusText: "Not Found" }
    );

  const user = await prisma.user.findUnique({
    where: {
      // @ts-ignore
      id,
    },
  });

  return NextResponse.json(user);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const id = parseInt(params.id);

  if (id > 10) {
    return NextResponse.json(
      { message: "This user doesn't exists!" },
      { status: 404, statusText: "Not Found" }
    );
  }

  const updatedUser = await prisma.user.update({
    where: {
      // @ts-ignore
      id,
    },
    data: {
      name: body.name,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  if (id > 10) {
    return NextResponse.json(
      { message: "This user doesn't exists!" },
      { status: 404, statusText: "Not Found" }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      // @ts-ignore
      id,
    },
  });

  if (user) {
    try {
      await prisma.user.delete({
        where: {
          // @ts-ignore
          id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("user doesn't exists!");
  }

  return NextResponse.json({});
}
