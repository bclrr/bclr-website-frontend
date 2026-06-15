import { useEffect, useState } from "react"
import { getPages } from "../services/api";
import { NavLink } from "react-router";
import type { WikiPagesPaginatedModel } from "../types";
import { NavbarIcon } from "./NavbarIcon";
import { formatToTitleCase } from "../utils";

export function Sidebar() {

  const [pages, setPages] = useState<WikiPagesPaginatedModel | null>(null);

  useEffect(() => {
    getPages().then(data => setPages(data));
  }, []);

  if (!pages) return <p>Chargement...</p>;

  return (
    <aside className="bg-soft hidden lg:block fixed top-0 left-0 w-[calc(var(--content-offset)+16rem)] h-full border-r border-gray-200 z-40 pl-2">
      <nav className="ml-[var(--content-offset)] mr-6">
        <NavbarIcon bgColor="bg-soft" className="ml-4 mt-1"/>
        <div className="ml-4 mt-6">
          {pages.data.map(page => (
            <NavLink to={"/wiki/" + page.slug} key={page.slug} className={({isActive}) => isActive ? "text-indigo-700" : "text-info"}>
              <div className="p-1 w-full text-left rounded text-base">
                <p className="font-normal tracking-tight leading-6 hover:text-indigo-700">{formatToTitleCase(page.title)}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </nav> 
    </aside>
  );
}
