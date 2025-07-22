import ArrowDown from "../components/svg/ArrowDown";

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-x-ryo"
    >
      <div className="flex h-full w-3/4 flex-col items-center md:flex-row md:justify-between">
        <div className="flex">
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
        <div className="flex flex-col">
          <p className="">TBA</p>
        </div>
      </div>
      <div
        className="absolute bottom-20 flex h-20 w-sm rotate-180 animate-x-fade-in-down cursor-pointer items-center justify-center md:w-lg"
        onClick={() =>
          document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown />
      </div>
    </div>
  );
}
