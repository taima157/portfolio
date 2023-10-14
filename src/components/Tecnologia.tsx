type PropsType = {
  title: string;
  desc: string;
};

export default function Tecnologia({ title, desc }: PropsType) {
  return (
    <div className="bg-neutral-800/30  border-[1px] border-neutral-800 rounded-md p-5 flex flex-col gap-4 hover:scale-105 duration-500 ">
      <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent self-start text-lg">
        {title}
      </span>
      <hr className="border-neutral-800" />
      <p className="text-sm sm:text-base">{desc}</p>
    </div>
  );
}
