import builder from '@builder.io/react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Button from '../../components/button/button';
import SvgLinkedin from '../../components/icons/linkedin';

export const loader = async ({ params }) => {
  const response = await builder
    .get('team', {
      query: {
        'data.slug': params.slug,
      },
    })
    .promise();

  return json({ response });
};

export default function TeamSlug() {
  const { response } = useLoaderData();
  const { data } = response;

  return (
    <main className="container mx-auto max-w-4xl">
      <section className="px-6 py-10">
        <div className="flex items-center gap-6 mb-4">
          <img
            className="max-w-[184px] rounded-full"
            src={data.headshot}
            alt="This is a Judge team mate."
          />

          <div className="flex flex-col gap-3 items-start">
            <h1 className="font-serif text-5xl text-brand-blue-800">
              {data.firstName} {data.lastName}
            </h1>

            <p>{data.title}</p>

            <Button
              className="border-none inline-flex p-0"
              asLink={{ href: data.linkedInUrl, target: '_blank' }}
              icon={
                <SvgLinkedin
                  height="24"
                  width="24"
                  className="fill-brand-blue-800"
                  viewBox="0 0 18 18"
                />
              }
            />
          </div>
        </div>

        <div
          className="flex flex-wrap gap-4"
          dangerouslySetInnerHTML={{ __html: data.bio }}
        />
      </section>
    </main>
  );
}
