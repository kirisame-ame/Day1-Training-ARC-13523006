import ProfilePic from "./ProfilePic";
export default function ProfilePicContainer({ paths }: { paths?: string[] }) {
  return (
    <div className="flex flex-row items-center justify-center">
      {paths?.map((path, index) => (
        <ProfilePic key={index} src={path} alt={`Profile pic ${index + 1}`} />
      ))}
    </div>
  );
}
