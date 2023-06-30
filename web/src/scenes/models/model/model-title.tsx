/** @format */

import classNames from "classnames";
import { ComponentType, ReactNode } from "react";

export type ProductTitleProps = {
  children: ReactNode;
  highlighting?: ComponentType;
  className?: string;
};

export function ProductTitle({
  children,
  highlighting: Highlighting,
  className = "small-bold tracking-normal",
}: ProductTitleProps) {
  return (
    <h1 className={classNames("text-brand-black", className)}>
      {Highlighting ? <Highlighting /> : children}
    </h1>
  );
}
