import Flag from "./Flag";
export default function FlagContainer({ paths }: { paths?: string[] }) {
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      {paths?.map((path, index) => (
        <Flag key={index} src={path} alt={`Flag ${index + 1}`} />
      ))}
    </div>
  );
}
