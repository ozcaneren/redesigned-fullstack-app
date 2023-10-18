import Link from "next/link";
import { FooterContent, getFooterData } from "@/lib";


export async function Footer() {
  const footer = await getFooterData();
  return (
    <>
      <FooterContent />
    </>
  );
}
