import Footer from "./components/Footer";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 relative">
      <div className="fixed left-0 top-0 inset-0 -z-10 ">
        <div className="absolute h-full w-full bg-neutral-950/10 backdrop-blur-3xl -z-20" />

        <div className="w-32 h-32 bottom-0 md:top-[70%] md:left-[30%] bg-gradient-to-b from-green-600 to-blue-600 rounded-full absolute -z-30" />
        <div className="w-96 h-96 -translate-x-[60%] -translate-y-[40%] md:-translate-x-[5%] md:-translate-y-[5%] bg-gradient-to-b from-purple-600 to-green-600 rounded-full absolute -z-30" />

        <div className="w-44 h-44 top-[60%] left-[80%] bg-gradient-to-b from-green-600 to-blue-600 rounded-full absolute -z-30" />
      </div>

      <Header />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Footer />
    </main>
  );
}
