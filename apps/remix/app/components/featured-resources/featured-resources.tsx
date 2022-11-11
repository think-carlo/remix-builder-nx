import { FC } from 'react';
import { BlogReference, Resource } from '../../models/builder.models';
import { ButtonSecondary, ButtonSecondaryColors } from '../button';
import Button from '../button/button';
import Card from '../card/card';
import SvgArrowForward from '../icons/arrow-forward';

export interface FeaturedResourcesProps {
  feature: BlogReference;
  posts: { post: BlogReference }[];
}

export const FeaturedResources: FC<FeaturedResourcesProps> = ({
  feature,
  posts,
}) => {
  if (!feature || !posts) return;

  const { value } = feature || {};
  const { data: featureData } = value || {};

  return (
    <Card className="flex-wrap container mx-auto px-6 py-10">
      <div className="flex items-baseline justify-between w-full">
        <h1 className="font-serif text-5xl text-brand-blue-800">
          Featured Resources
        </h1>

        <Button
          className="border-none text-brand-blue-500 text-base"
          asLink={{ href: '#' }}
          icon={<SvgArrowForward className="fill-brand-blue-500" />}
        >
          View All Resources
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-6 items-start">
        {featureData && (
          <>
            <img
              className="col-span-3"
              src={featureData.featuredImage}
              alt="This is a placeholder"
            />

            <div className="col-span-3 flex flex-wrap items-start gap-4">
              <h2 className="text-2xl">{featureData.title}</h2>
              <p className="text-xl text-brand-gray-700">
                {featureData.excerpt}
              </p>

              <ButtonSecondary
                asLink={{ href: featureData.slug }}
                className="inline-flex"
                color={ButtonSecondaryColors.MID}
              >
                Read More
              </ButtonSecondary>
            </div>
          </>
        )}

        {posts &&
          posts.map((postItem, postIndex, arr) => {
            const { post } = postItem;
            const { value } = post || {};
            const { data: postData } = value || {};

            if (postData)
              return (
                <div
                  className="col-span-2 flex flex-wrap gap-4"
                  key={`post-index--${postIndex}`}
                >
                  <img
                    src={postData.featuredImage}
                    alt="This is a placehodler!"
                  />

                  <h3 className="text-2xl">{postData.title}</h3>
                  <p className="text-xl text-brand-gray-700">
                    {postData.excerpt}
                  </p>

                  <ButtonSecondary
                    asLink={{ href: postData.slug }}
                    className="inline-flex"
                    color={ButtonSecondaryColors.MID}
                  >
                    Read Blog
                  </ButtonSecondary>
                </div>
              );
          })}
      </div>
    </Card>
  );
};
