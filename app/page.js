import CTA from "@/components/cta";
import HeroSection from "@/components/heroSection";
import HowItWorks from "@/components/HowItWorks";
import KeyFeature from "@/components/keyFeature";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <HeroSection />
      <KeyFeature />
      <Testimonials />
      <HowItWorks />
      <CTA />
    </main>
  );
}
