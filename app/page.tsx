import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <h1>Hello, Nadlyne !</h1> */}
        <FloatingNav navItems={navItems} />
        {/* <h1>Helloo</h1> */}
        <Hero />
        {/* <h1>Helloo</h1>
        <h1>Helloo</h1>
        <h1>Helloo</h1> */}
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
      </div>
    </main>
  );
}
