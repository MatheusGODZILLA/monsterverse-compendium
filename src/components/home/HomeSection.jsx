import Image from "next/image";

const HomeSection = () => (
  <section className="relative flex flex-col items-center justify-center p-8 h-screen overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center scale-125 animate-zoomOutBackground z-[-1]" style={{ backgroundImage: "url('/img/home/gxk.jpg')" }}></div>
    <div className="absolute inset-0 bg-cover opacity-15 z-[-1]" style={{ backgroundImage: "url('/img/home/BetterEnchantingCrane-size_restricted.gif')" }}></div>

    <Image
      src="/img/mv_logo_fullsize.a77f295.png"
      alt="Monsterverse"
      width={1920}
      height={1080}
      className="m-5 max-w-[40%] h-auto opacity-0 animate-fadeIn"
    />
    <p className="text-white text-xl font-bold mt-2 w-4/5 text-center justify-center opacity-0 animate-fadeIn">
      Bem-vindo ao MonsterVerse!
    </p>
    <p className="text-white text-xl font-bold mt-2 w-4/5 text-center justify-center opacity-0 animate-fadeIn">
      Prepare-se para conhecer toda a mitologia deste universo!
    </p>
  </section>
);

export default HomeSection;