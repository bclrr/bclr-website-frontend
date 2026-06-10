import { useEffect, useState } from "react";
import { type WikiPageType } from "../types";
import { getOnePage } from "../services/api";
import Markdown from "react-markdown";

export function WikiPage({ slug }: { slug: string }) {

  const [page, setPage] = useState<WikiPageType | null>(null);

  useEffect(() => {
    getOnePage(slug).then(data => setPage(data));
  }, [slug]);

  if(!page) return <p>Chargement...</p>;

  return (
    <div className="prose text-left">
      <h1 key={page.slug} className="text-5xl font-bold text-heading">
        {page.title}
      </h1>
      <Markdown>
        {page.content}
      </Markdown>
    </div>
  )

}
