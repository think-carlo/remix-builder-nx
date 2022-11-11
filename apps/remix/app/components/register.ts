import { Builder } from '@builder.io/react';
import CtaBlock from './cta-block/cta-block';
import { FeaturedResources } from './featured-resources/featured-resources';
import { HomeCarousel } from './home-carousel/home-carousel';
import { StatCard } from './stat-card/stat-card';

export const registerComponentsInBuilder = () => {
  // CtaBlock
  Builder.registerComponent(CtaBlock, {
    name: 'CtaBlock',
    // noWrap: true,
    inputs: [
      { name: 'headline', type: 'text' },
      { name: 'theme', type: 'text', enum: ['light', 'dark'] },
      {
        name: 'button',
        type: 'object',
        subFields: [
          { name: 'href', type: 'url', required: true },
          { name: 'text', type: 'text', required: true },
        ],
      },
      {
        name: 'image',
        type: 'object',
        subFields: [
          {
            name: 'src',
            type: 'file',
            allowedFileTypes: ['jpeg', 'png'],
            required: true,
          },
          { name: 'alt', type: 'text' },
        ],
      },
    ],
  });

  FeaturedResources;
  Builder.registerComponent(FeaturedResources, {
    name: 'FeaturedResources',
    inputs: [
      {
        name: 'feature',
        type: 'reference',
        model: 'blog',
      },
      {
        name: 'posts',
        type: 'list',
        subFields: [{ name: 'post', type: 'reference', model: 'blog' }],
      },
    ],
  });

  // HomeCarousel
  Builder.registerComponent(HomeCarousel, {
    name: 'HomeCarousel',
    // noWrap: true,
    inputs: [
      {
        name: 'slides',
        type: 'list',
        subFields: [
          { name: 'headline', type: 'text' },
          { name: 'lede', type: 'text' },
          {
            name: 'image',
            type: 'object',
            subFields: [
              {
                name: 'src',
                type: 'file',
                allowedFileTypes: ['jpeg', 'png'],
                required: true,
              },
              { name: 'alt', type: 'text' },
            ],
          },
          {
            name: 'links',
            type: 'list',
            subFields: [
              { name: 'href', type: 'url' },
              { name: 'label', type: 'text' },
            ],
          },
        ],
      },
    ],
  });

  // StatCard
  Builder.registerComponent(StatCard, {
    name: 'StatCard',
    inputs: [
      { name: 'headline', type: 'text' },
      { name: 'subcopy', type: 'text' },
    ],
  });
};
