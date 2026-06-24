import Hero from "@/components/Hero";
import MeritEQSplit from "@/components/MeritEQSplit";
import ServicesGrid from "@/components/ServicesGrid";
import ExecutivePedigree from "@/components/ExecutivePedigree";
import QuoteBreak from "@/components/QuoteBreak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ExecutivePedigree />
      <MeritEQSplit />
      <ServicesGrid />
      <QuoteBreak />
      <Footer />
    </main>
  );
}
