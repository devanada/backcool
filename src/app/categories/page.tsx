import Link from "next/link";
import type { Metadata } from "next";

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Categories - Bookcool",
  description: "Browse our products by category and find the best for you",
};

export default async function Home() {
  const categories: string[] = await getCategories();

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
    </div>
  );
}
