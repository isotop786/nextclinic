import Image from "next/image";
import TopHeader from "@/components/TopHeader";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import { ServiceComponent } from "@/components/ServiceComponent";
import Featured from "@/components/Featured";
import SEO from "@/components/Seo";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home | NextClinic" pageDescription="Homepage" />
      <Header />
      <AboutSection />
      <ServiceComponent/>
      <Featured/>
  </>
  );
}
