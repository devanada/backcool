import Link from "next/link";
import type { Metadata } from "next";

import Card from "@/components/card";
import { ProductType } from "@/utils/types/product";

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=8");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Homepage - Bookcool",
  description: "Browse our products and find the best for you",
};

export default async function Home() {
  const categories: string[] = await getCategories();
  const products: ProductType[] = await getProducts();

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4 py-4">
        {categories.map((category, index) => {
          return (
            <Link
              href={`categories/${category}`}
              key={index}
              className="border border-primary bg-white transition duration-200 ease-in-out hover:bg-primary"
            >
              <p className="p-9 text-center uppercase text-primary transition duration-200 ease-in-out hover:text-white">
                {category}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="my-5 flex w-full items-center py-10">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold">The best of the best</h1>
          <p>
            We provide the best products with affordable price, quality over
            quantity.
          </p>
        </div>
        <Link
          href="/products"
          className="flex rounded-lg border border-primary py-1 px-3"
        >
          See All
        </Link>
      </div>
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
