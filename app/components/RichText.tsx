import Link from "next/link";

export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          const [, label, href] = match;
          return (
            <Link
              key={i}
              href={href}
              className="font-semibold text-[#C4922A] hover:text-amber-600 transition-colors"
            >
              {label}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}