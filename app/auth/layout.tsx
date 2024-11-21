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
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {children}
    </div>
  );
}
