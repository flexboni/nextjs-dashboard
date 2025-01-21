import { lusitana } from "@/components/ui/fonts";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/logo_white.png"
        width={500}
        height={450}
        className="hidden md:block w-80"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
