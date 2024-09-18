import Image from "next/image";

const IntroSection = () => (
  <section
    className="flex flex-col items-center justify-center p-8 md:p-16 bg-cover bg-center text-white min-h-screen"
    style={{ backgroundImage: "url('/img/home/intro.webp')" }}
  >
    {/* O que é o MonsterVerse? */}
    <div className="w-full flex justify-center mb-8">
      <Image
        src="/img/mv_logo_fullsize.a77f295.png"
        alt="Monsterverse"
        width={1920}
        height={1080}
        className="w-3/5 md:w-2/5 h-auto"
      />
    </div>

    <div className="text-lg w-full md:w-4/5 lg:w-4/5 space-y-6 text-justify leading-relaxed"
         style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
      <p>
        O Monsterverse é uma franquia multimídia centrada em uma série de filmes
        de monstros gigantes, com destaque para Godzilla e King Kong, produzida
        pela Legendary Pictures e cofinanciada e distribuída pela Warner Bros.
        É a segunda adaptação da franquia Godzilla por um estúdio de Hollywood,
        após "GODZILLA" da TriStar Pictures em 1998. A Legendary adquiriu os
        direitos para produzir um filme americano do Godzilla em 2010, após ser
        abordada pelo produtor Brian Rogers, que estava tentando obter
        financiamento para o novo projeto de Godzilla de Yoshimitsu Banno,
        "Godzilla 3-D", durante a pausa na série Godzilla da Toho. A Legendary
        optou por produzir seu próprio filme americano de longa-metragem do
        Godzilla em vez do curta-metragem IMAX de Banno e negociou com a Toho
        para adquirir os direitos. A Warner Bros., então parceira de
        distribuição da Legendary, cofinanciou e lançou o filme nos cinemas
        mundialmente, com exceção do Japão, onde foi distribuído pela Toho.
      </p>

      <p>
        O Monsterverse começou em 2014 com "Godzilla", e seu sucesso levou
        rapidamente à aprovação de uma sequência co-estrelando Rodan, Mothra e
        King Ghidorah. O próximo filme da franquia, "Kong: A Ilha da Caveira",
        foi anunciado mais tarde naquele ano, embora a Legendary não tenha
        revelado que ambos ocorriam no mesmo universo até 2015. Embora a
        Legendary estivesse em meio a um acordo de distribuição com a Universal
        Pictures na época, estabeleceu a distribuição e cofinanciamento de todos
        os futuros filmes do Monsterverse com a Warner Bros. "Kong: A Ilha da
        Caveira" foi lançado em 2017, seguido por "Godzilla II: Rei dos
        Monstros" (2019) e os filmes crossover "Godzilla vs. Kong" (2021) e
        "Godzilla x Kong: O Novo Império" (2024). Um sexto filme está
        atualmente em desenvolvimento inicial, com lançamento previsto para
        2027.
      </p>

      <p>
        O Monsterverse inclui vários meios de comunicação vinculados fora dos
        filmes, incluindo várias graphic novels publicadas pela Legendary
        Comics, bem como a série de televisão "Skull Island" (2023) e "Monarch:
        Legacy of Monsters" (2023-2024), produzida pela Legendary Television.
        Esta última série já foi renovada para uma segunda temporada, e outras
        séries derivadas do Monsterverse também estão em desenvolvimento.
      </p>
    </div>

    <button className="mt-10 px-6 py-3 border border-[#22b4be] bg-[rgba(0,0,0,0.8)] text-white text-sm md:text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-white focus:outline-none">
      CONHEÇA OS TITÃS
    </button>
  </section>
);

export default IntroSection;