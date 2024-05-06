import Image from "next/image";
import TopHeader from "@/components/TopHeader";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import { ServiceComponent } from "@/components/ServiceComponent";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <>
      <Header />
      <AboutSection />
      <ServiceComponent/>
      <Featured/>
  </>
  );
}
