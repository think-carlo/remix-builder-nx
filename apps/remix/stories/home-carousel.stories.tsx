import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomeCarousel } from '../app/components/home-carousel/home-carousel';

const Story: ComponentMeta<typeof HomeCarousel> = {
  component: HomeCarousel,
  title: 'Home Carousel',
};
export default Story;

const Template: ComponentStory<typeof HomeCarousel> = (args) => (
  <HomeCarousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  slides: [
    {
      image: { src: '/images/home-slide-1.jpeg', alt: 'This is alt text' },
      headline: 'This is a test headline',
      lede: 'This is a test lede',
      links: [
        { href: '#', label: 'Test Link' },
        { href: '#', label: 'Test Link' },
        { href: '#', label: 'Test Link' },
        { href: '#', label: 'Test Link' },
      ],
    },
    {
      image: { src: '/images/home-slide-2.jpeg', alt: 'This is alt text' },
      headline: 'This is a test headline',
      lede: 'This is a test lede',
      links: [{ href: '#', label: 'Test Link' }],
    },
    {
      image: { src: '/images/home-slide-3.jpeg', alt: 'This is alt text' },
      headline: 'This is a test headline',
      lede: 'This is a test lede',
      links: [{ href: '#', label: 'Test Link' }],
    },
    {
      image: { src: '/images/home-slide-4.jpeg', alt: 'This is alt text' },
      headline: 'This is a test headline',
      lede: 'This is a test lede',
      links: [{ href: '#', label: 'Test Link' }],
    },
    {
      image: { src: '/images/home-slide-5.jpeg', alt: 'This is alt text' },
      headline: 'This is a test headline',
      lede: 'This is a test lede',
      links: [{ href: '#', label: 'Test Link' }],
    },
  ],
};
