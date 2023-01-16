import { url } from "inspector";
import { usePathname } from "next/navigation";
import { type } from "os";
import NavItem from "../navitem";
import Image from "next/image";

export default function NavBar() {
  type navmenuitem = {
    text: string;
    href: string;
  };
  const menu_items: Array<navmenuitem> = [
    { text: "Demo", href: "/" },
    { text: "Docs", href: "/docs" },
  ];

  return (
    <>
      <nav className="sticky top-0 flex w-full bg-slate-50 drop-shadow-sm z-40 border">
        <div className="w-1/12 justify-center"></div>
        <div className="h-full py-2 px-2 relative">
          <img
            className="h-12 w-12 self-center"
            src={"/documentlogo.ico"}
            alt={"A document vector image"}
          />
        </div>
        {/* <div className="w-1/2 flex-shrink border-2 justify-right"></div> */}
        <div className="w-full flex flex-1  justify-end gap-4 h-30 text-red-800 px-2 font-extrabold">
          {menu_items.map((ele) => {
            const isCurrentPage = usePathname() == ele.href;
            return (
              <NavItem text={ele.text} href={ele.href} active={isCurrentPage} />
            );
          })}
        </div>
        <div className="w-1/12 justify-end"></div>
      </nav>
    </>
  );
}
