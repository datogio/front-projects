import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Authentication",
  description: "Projects authentication page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
