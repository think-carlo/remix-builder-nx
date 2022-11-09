import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import type { LoaderFunction } from '@remix-run/node'; // or cloudflare/deno
import { json } from '@remix-run/node'; // or cloudflare/deno
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  const content = await builder
    .get('page', {
      url: '/test-page',
    })
    .promise();

  return json({ content });
};

export default function TestPage() {
  // const isPreviewingInBuilder = useIsPreviewing();
  const { content } = useLoaderData();

  // if no page is found, return a 404 page
  if (!content) {
    return <div>Not Found 404 Error</div>;
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
    </>
  );
}
