import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs || Manoj's Port-Folio",
  description: "Showcasing my skills and what I can build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
