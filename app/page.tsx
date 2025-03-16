import CustomerComponent from "@/components/CustomerComponent";
import ExplainSection from "@/components/ExplainSection";
import { FooterComponent } from "@/components/FooterComponent";
import GiftComponent from "@/components/GiftComponent";
import { HeaderComponent } from "@/components/HeaderComponent";
import MapComponent from "@/components/MapComponent";
import { StartSection } from "@/components/StartSection";
import StartSectionComponent from "@/components/StartSectionComponent";
import SubscribeComponent from "@/components/SubscribeComponent";

export default function Home() {
  return (
    <section>
      <HeaderComponent />
      <main className="relative flex min-h-screen flex-col items-center justify-center gap-2 dark:bg-gray-800 lg:pt-[40px]">
        <StartSection />
        <StartSectionComponent />
        <ExplainSection />
        <GiftComponent />
        <MapComponent />
        <CustomerComponent />
        <SubscribeComponent />
        <FooterComponent />
      </main>
    </section>
  );
}
