import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] ">
            <Link href={'/'} className="flex items-center justify-center md:m-0 py-4">
            <Image src="/logo.png" alt="logo" width={32} height={32}/>
            <span className="hidden md:block">Omega School</span>
            </Link>
            <Menu />
        </div>

        <div className="flex flex-col w-[86%] md:[92%] lg:w-[84%] overflow-scroll bg-gray-50">
            <NavBar/>
            {children}
        </div>
        
    </div>
  );
}