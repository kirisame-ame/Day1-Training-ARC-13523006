export default function ProfilePic({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="mx-5 h-30 w-30 rounded-full object-cover md:h-50 md:w-50"
      />
    </div>
  );
}
