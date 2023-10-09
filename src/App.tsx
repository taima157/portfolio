import Footer from "./components/Footer";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";

export default function App() {
  return (
    <div className="h-full w-screen">
      <div className="w-96 h-96 -translate-x-[60%] -translate-y-[40%] md:-translate-x-[5%] md:-translate-y-[5%] bg-gradient-to-b from-purple-600 to-green-600 rounded-full absolute " />

      <div className="w-44 h-44 top-[60%] left-[80%] bg-gradient-to-b from-green-600 to-blue-600 rounded-full absolute" />

      <div className="w-32 h-32 bottom-0 md:top-[70%] md:left-[30%] bg-gradient-to-b from-green-600 to-blue-600 rounded-full absolute " />

      <main className="fixed flex flex-col items-center w-full h-full flex-1  bg-neutral-950/10 backdrop-blur-3xl z-50 overflow-y-auto gap-20 ">
        <Header />
        <Sobre />
        <Tecnologias />
        <Projetos />
        <Footer />
      </main>
    </div>
  );
}
