import { useState } from "react";
import ModalProjeto from "./ModalProjeto";

type PropsType = {
  title: string;
  url: string;
  toggleModal: () => void;
};

export default function Projeto() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
    document.body.classList.toggle("overflow-hidden")
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-neutral-800/30 overflow-hidden border-[1px] border-neutral-800 rounded-md flex"
      >
        <div className="h-full w-2 bg-gradient-to-b from-green-600 to-blue-600" />
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-1/2 p-5">
            <div className="flex items-center gap-2">
              <img
                src="https://raw.githubusercontent.com/taima157/crypcoin/master/src/assets/favicon.png"
                alt="Ícone do projeto."
                className="h-6 w-6"
              />
              <h4 className="text-lg font-semibold">CrypCoin</h4>
            </div>
          </div>
          <img
            src="https://raw.githubusercontent.com/taima157/crypcoin/master/src/assets/image-site.png"
            alt="Imagem do projeto."
            className="w-full md:w-1/2 h-full object-cover"
          />
        </div>
      </button>
      {isModalOpen && <ModalProjeto toggleModal={toggleModal} />}
    </>
  );
}
