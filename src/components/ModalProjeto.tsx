type PropsType = {
  toggleModal: () => void;
};

export default function ModalProjeto({ toggleModal }: PropsType) {
  return (
    <div className="fixed inset-0 z-30 overflow-hidden flex items-center justify-center">
      <div
        onClick={toggleModal}
        className="absolute w-full h-full bg-neutral-950/50 scroll-smooth"
      />

      <div className="z-30 flex flex-col p-5 h-2/3  border-2 border-neutral-900 bg-neutral-950/70 backdrop-blur-xl w-[90%] md:2/3 lg:w-[800px] rounded-md gap-10">
        <h2>Teste</h2>
      </div>
    </div>
  );
}
