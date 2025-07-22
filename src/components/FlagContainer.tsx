import Flag from "./Flag";
import { useTranslation } from "react-i18next";

export default function FlagContainer({ paths }: { paths?: string[] }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-white">{t("select_lang")}</p>
      <div className="flex flex-row items-center justify-center gap-5">
        {paths?.map((path, index) => (
          <Flag
            key={index}
            src={path}
            alt={`Flag ${index + 1}`}
            lang={path.split("/").pop()?.split(".")[0] || ""}
          />
        ))}
      </div>
    </div>
  );
}
