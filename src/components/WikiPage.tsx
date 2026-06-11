import { useEffect, useState } from "react";
import { getOnePage } from "../services/api";
import Markdown from "react-markdown";
import type { WikiPageModel } from "../types";

export function WikiPage({ slug }: { slug: string }) {

  const [page, setPage] = useState<WikiPageModel | null>(null);

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
