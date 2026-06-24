import Hero from "@/components/Hero";
import MeritEQSplit from "@/components/MeritEQSplit";
import ServicesGrid from "@/components/ServicesGrid";
import ExecutivePedigree from "@/components/ExecutivePedigree";
import EliteDiscipline from "@/components/EliteDiscipline";
import LeadershipDNA from "@/components/LeadershipDNA";
import StrategicJourney from "@/components/StrategicJourney";
import QuoteBreak from "@/components/QuoteBreak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ExecutivePedigree />
      <EliteDiscipline />
      <MeritEQSplit />
      <LeadershipDNA />
      <ServicesGrid />
      <StrategicJourney />
      <QuoteBreak />
      <Footer />
    </main>
  );
}
