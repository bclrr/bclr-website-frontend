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
  console.log(JSON.stringify(page.content));
  return <div className="prose text-left">
    <h1 key={page.slug}>{page.title}</h1>
    <Markdown>{page.content}</Markdown>
  </div>

}
