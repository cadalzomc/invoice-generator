import "@/app/_assets/globals.css";
import { LayoutMain } from "@/app/_components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutMain>{children}</LayoutMain>
      </body>
    </html>
  );
}
