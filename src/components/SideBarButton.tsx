export default function SideBarButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="flex items-center gap-2 rounded p-2 hover:bg-gray-200"
      onClick={onClick}
    >
      <span className="text-sm">{label}</span>
    </button>
  );
}
