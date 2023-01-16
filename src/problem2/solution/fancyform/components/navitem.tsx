import Link from "next/link";

type NavItemProps = {
  text: string;
  href: string;
  active: Boolean;
};
export default function NavItem({ text, href, active }: NavItemProps) {
  if (active) {
    return (
      <div className="text-lg flex-shrink py-5 h-full opacity-80 hover:drop-shadow-2xl hover:cursor-default">
        {text}
      </div>
    );
  } else
    return (
      <Link href={href}>
        <div className="text-lg flex-shrink opacity-80 py-5 h-full hover:drop-shadow-2xl hover:cursor-default">
          {text}
        </div>
      </Link>
    );
}
