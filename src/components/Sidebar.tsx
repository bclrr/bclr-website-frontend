import { useEffect, useState } from "react"
import { getPages } from "../services/api";
import { type WikiPagesPaginated } from "../types";
import { Link } from "react-router";

export function Sidebar() {

  const [pages, setPages] = useState<WikiPagesPaginated | null>(null);

  useEffect(() => {
    getPages().then(data => setPages(data));
  }, []);

  if (!pages) return <p>Chargement...</p>;

  return (
    <aside className="w-64 h-screen border-r border-gray-200 overflow-y-auto p-4">
      <nav className="">
        {pages.data.map(page => (
          <Link to={"/wiki/" + page.slug} key={page.slug}>
            <div className="w-full text-left px-3 py-1.5 rounded text-sm hover:bg-gray-100 block text-gray-700">
              <p>{page.title}</p>
              <p>{page.categorie.label}</p>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
