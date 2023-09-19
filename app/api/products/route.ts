import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import prisma from "@/prisma/client";

export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany();

  return NextResponse.json(products, {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = productSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
