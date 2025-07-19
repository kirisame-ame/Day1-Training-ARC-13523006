export default function ProfilePic({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="mx-5 h-[200px] w-[200px] rounded-full object-cover"
      />
    </div>
  );
}
