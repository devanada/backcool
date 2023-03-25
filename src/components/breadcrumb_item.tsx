import { ReactNode, LiHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  href: string;
  isCurrent: boolean;
}

export default function BreadcrumbItem({
  children,
  href,
  isCurrent,
  ...props
}: Props) {
  return (
    <li {...props}>
      <Link
        href={href}
        className={clsx(isCurrent && "font-medium underline")}
        aria-current={isCurrent ? "page" : "false"}
      >
        {children}
      </Link>
    </li>
  );
}
