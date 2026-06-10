import { useEffect, useState } from "react"
import { getPages } from "../services/api";
import { type WikiPagesPaginated } from "../types";

export function WikiPageList({ onSelect }: { onSelect: (slug: string) => void }) {

  const [pages, setPages] = useState<WikiPagesPaginated | null>(null);

  useEffect(() => {
    getPages().then(data => setPages(data));
  }, []);

  if (!pages) return <p>Chargement...</p>;
  return pages.data.map(page => (
    <div key={page.slug} onClick={() => onSelect(page.slug)}>
      <p>{page.title}</p>
      <p>{page.categorie.label}</p>
    </div>
  ));
}
