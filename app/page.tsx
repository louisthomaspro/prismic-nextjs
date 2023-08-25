import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const articles = await client.getAllByType("article");

  return (
    <div>
      <h1 className="font-bold text-3xl mb-6">Homepage</h1>
      <h2 className="font-bold text-xl mb-3">Articles</h2>
      {articles.map((article) => (
        <>
          <hr />
          <div className="flex items-center">
            <h3 className="font-semibold text-lg">{article.data.title}</h3>
            <span className="ml-2">({article.data.publication_date})</span>
          </div>
          <SliceZone
            slices={article.data.slices}
            components={components}
            key={article.uid}
          />
        </>
      ))}
    </div>
  );
}
