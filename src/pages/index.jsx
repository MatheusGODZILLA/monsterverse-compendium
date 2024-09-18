import Header from "@/components/Header";
import HomeSection from "@/components/home/HomeSection";
import IntroSection from "@/components/home/IntroSection";
import MediaSection from "@/components/home/MediaSection";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen"
    >
      <Header />
      <main className="flex-grow">
        {/* Seções */}
        <HomeSection />
        <IntroSection />
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}