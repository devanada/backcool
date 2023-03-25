import Image from "next/image";
import type { Metadata } from "next";

import { ProductType } from "@/utils/types/product";

interface Props {
  params: {
    id: string;
  };
}

async function getProducts(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: ProductType = await getProducts(params.id);
  return {
    title: `${product.title} - Backcool`,
    description: product.description,
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;
  const product: ProductType = await getProducts(id);

  return (
    <div className="container flex flex-grow items-center gap-6">
      <Image
        className="aspect-square object-contain"
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
      />
      <div className="flex flex-col gap-3">
        <p className="text-xl font-medium capitalize">{product.title}</p>
        <p className="text-2xl font-bold">$ {product.price}</p>
        <p className="tracking-wider">{product.description}</p>
      </div>
    </div>
  );
}
