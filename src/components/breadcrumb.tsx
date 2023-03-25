"use client";

import { Children, Fragment, ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import BreadcrumbItem from "./breadcrumb_item";

interface Props {
  children: ReactNode;
}

interface BreadcrumbType {
  href: string;
  label: string;
  isCurrent: boolean;
}

function BreadcrumbWrapper({ children }: Props) {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className="mx-8 my-2 md:mx-16 lg:mx-32" aria-label="breadcrumb">
      <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
    </nav>
  );
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);

  useEffect(() => {
    const pathWithoutQuery = pathname.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [pathname]);

  return (
    <>
      {!["/", "/login"].includes(pathname) && (
        <BreadcrumbWrapper>
          <BreadcrumbItem isCurrent={pathname === "/"} href="/">
            Home
          </BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb) => (
              <>
                <BreadcrumbItem
                  key={breadcrumb.href}
                  href={breadcrumb.href}
                  isCurrent={breadcrumb.isCurrent}
                >
                  {decodeURI(breadcrumb.label)}
                </BreadcrumbItem>
              </>
            ))}
        </BreadcrumbWrapper>
      )}
    </>
  );
}
