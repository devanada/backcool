import type { Metadata } from "next";

import Card from "@/components/card";
import { ProductType } from "@/utils/types/product";

interface Props {
  params: {
    category: string;
  };
}

async function getProducts(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.category} - Backcool`,
    description: "Browse our products by category and find the best deals",
  };
}

export default async function Page({ params }: Props) {
  const { category } = params;
  const products: ProductType[] = await getProducts(category);

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-5 py-4 lg:grid-cols-4">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
