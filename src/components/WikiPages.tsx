import { useEffect, useState } from "react"
import { getPages } from "../services/api";
import { type WikiPagesResponse } from "../types";

function WikiPages() {

  const [pages, setPages] = useState<WikiPagesResponse | null>(null);

  useEffect(() => {
    getPages().then(data => setPages(data));
  }, []);

  if (!pages) return <p>Chargement...</p>;
  return pages.data.map(page => (
    <div key={page.slug}>
      <p>{page.title}</p>
      <p>{page.categorie.label}</p>
    </div>
  ));
}

export default WikiPages;