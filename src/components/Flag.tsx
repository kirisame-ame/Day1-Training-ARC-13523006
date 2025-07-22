import { useTranslation } from "react-i18next";

export default function Flag({
  src,
  alt,
  lang,
}: {
  src: string;
  alt: string;
  lang: string;
}) {
  const { i18n } = useTranslation();

  return (
    <div
      onClick={() => i18n.changeLanguage(lang)}
      className="cursor-pointer hover:scale-120 hover:animate-x-wiggle"
    >
      <img src={src} alt={alt} className="h-10 w-10 object-cover" />
    </div>
  );
}
