import Image from "next/image";

export const SidebarHeader = () => {
  return (
    <div>
      <Image
        className="rounded-2xl h-[150px] w-[280px]"
        src="/assets/suggestions/desktop/background-header.png"
        alt="background-header"
        width={280}
        height={280}
        priority
      />
      <div className="absolute top-36 ml-6">
        <h1 className=" text-slate-50 text-2xl tracking-wide">
          Frontend Mentor
        </h1>
        <p className="text-slate-50 font-light opacity-[0.9] tracking-tighter">
          Feedback Board
        </p>
      </div>
    </div>
  );
};
