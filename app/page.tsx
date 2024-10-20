import { Metadata } from "next";
import { defaultMeta } from "@/app/_lib/utils";

export const metadata: Metadata = {
  title: defaultMeta.title.default,
  description: defaultMeta.description,
  icons: defaultMeta.icons,
  authors: defaultMeta.authors,
  openGraph: defaultMeta,
};

export default function Home() {
  return <div></div>;
}
