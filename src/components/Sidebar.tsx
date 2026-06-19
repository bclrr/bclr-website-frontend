import { useEffect, useState } from "react"
import { getPagesByCategories } from "../services/api";
import { NavLink } from "react-router";
import type { CategorieWithPagesModel } from "../types";
import { NavbarIcon } from "./NavbarIcon";
import { formatToTitleCase } from "../utils";

export function Sidebar() {

  const [categories, setCategories] = useState<CategorieWithPagesModel[] | null>(null);

  useEffect(() => {
    getPagesByCategories().then(data => setCategories(data));
  }, []);

  if (!categories) return <p>Chargement...</p>;

  return (
    <aside className="bg-soft hidden lg:block fixed top-0 left-0 w-[calc(var(--content-offset)+16rem)] h-full border-r border-gray-200 z-40 pl-2">
      <nav className="ml-[var(--content-offset)] mr-6">
        <NavbarIcon bgColor="bg-soft" className="ml-4 mt-1"/>
        <div className="ml-4 mt-1">
          {categories.map(categorie => (
            <div key={categorie.id}>
              <p className="text-base font-normal tracking-tight leading-6 text-black border-t border-gray-300 py-2">
                {formatToTitleCase(categorie.label)}
              </p>
              {categorie.pages.map(page => (
                <NavLink to={"/wiki/" + page.slug} key={page.slug} className={({isActive}) => isActive ? "text-indigo-700" : "text-info"}>
                  <p className="text-base font-normal tracking-tight leading-6 hover:text-indigo-700 pb-2">
                    {formatToTitleCase(page.title)}
                  </p>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </nav> 
    </aside>
  );
}
