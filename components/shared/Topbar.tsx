import Image from "next/image";
import Link from "next/link";

export function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-sm:hidden">Threads</p>
      </Link>
    </nav>
  );
}
