"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema, productSchema } from "./lib/zodSchema"
import prisma from "./lib/db";


export async function createProduct(prevState: unknown, formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
  
    if (!user || user.email !== "sagargiri456@gmail.com") {
      return redirect("/");
    }
  
    const submission = parseWithZod(formData, {
      schema: productSchema,
    });
  
    if (submission.status !== "success") {
      return submission.reply();
    }
    
    const flatenUrls = submission.value.images.flatMap((item)=>item.split(",").map((url)=>url.trim()));

    await prisma.product.create({
      data: {
        name: submission.value.name,
        description: submission.value.description,
        status: submission.value.status,
        price: submission.value.price,
        images: flatenUrls,
        category: submission.value.category,
        isFeatured: submission.value.isFeatured === true ? true : false,
      },
    });
    console.log("createProduct server action is called !")
  
    redirect("/dashboard/products");
}
export async function editProduct(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "jan@alenix.de") {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );

  const productId = formData.get("productId") as string;
  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      isFeatured: submission.value.isFeatured === true ? true : false,
      status: submission.value.status,
      images: flattenUrls,
    },
  });

  redirect("/dashboard/products");
}