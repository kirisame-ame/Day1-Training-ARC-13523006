export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isStringChild = typeof children === "string";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {isStringChild ? (
        <span className="text-md text-x-link underline hover:text-x-link-hover">
          {children}
        </span>
      ) : (
        children
      )}
    </a>
  );
}
