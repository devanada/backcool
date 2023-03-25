import Image from "next/image";
import Link from "next/link";

import { CardProductType } from "@/utils/types/product";

export default function Navbar(props: CardProductType) {
  return (
    <div className="flex flex-col items-center text-primary">
      <Link
        href={`/products/${props.id}`}
        className="flex w-full flex-col items-center"
      >
        <Image
          className="aspect-square object-contain"
          src={props.image}
          alt={props.title}
          width={200}
          height={200}
        />
        <p className="w-full text-left text-lg font-medium">{props.title}</p>
        <p className="w-full text-left text-xl font-bold">$ {props.price}</p>
        <p className="w-full text-right text-sm">
          ★{props.rating.rate} ({props.rating.count})
        </p>
      </Link>
    </div>
  );
}
