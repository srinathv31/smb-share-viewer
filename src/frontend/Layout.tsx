import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="flex flex-col items-center">{children}</div>;
}
