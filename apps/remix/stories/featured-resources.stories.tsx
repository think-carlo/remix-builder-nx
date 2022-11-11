import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FeaturedResources } from '../app/components/featured-resources/featured-resources';

const Story: ComponentMeta<typeof FeaturedResources> = {
  component: FeaturedResources,
  title: 'Featured Resources',
};
export default Story;

const Template: ComponentStory<typeof FeaturedResources> = (args) => (
  <FeaturedResources {...args} />
);

export const All = Template.bind({});
All.args = {
  feature: {
    value: {
      data: {
        title: 'IT Staffing Trends: What to expect during a recession',
        excerpt:
          'Regardless of any potential recession, the fact remains that IT companies need people to continue with daily work and planned projects, especially highly trained, knowledgeable, and skilled IT professionals.',
        featuredImage: '/images/featured-resource.jpeg',
        slug: '#',
      },
    },
  },
  posts: [
    {
      post: {
        value: {
          data: {
            title:
              'Energy Provider Seeks Organizational Change Management for Internal Communication Software Migration',
            excerpt:
              'A leading Fortune 100 competitive energy provider with multiple locations and divisions began piloting Microsoft Teams for calls, chats, and meetings in preparation for the eventual decommissioning of its current business communications platform.',
            featuredImage: '/images/resource-2.jpeg',
            link: {
              href: '#',
              label: 'Read Case Study',
            },
          },
        },
      },
    },
    {
      post: {
        value: {
          data: {
            title:
              'Judge Takes Creative and Marketing Staffing by Storm – Providing exceptional talent and building careers one placement at a time',
            excerpt:
              'Judge has recently invested more heavily in marketing and creative staffing because our clients are looking for this type of staffing, and our candidates are asking for help finding these types of positions.',
            featuredImage: '/images/resource-1.jpeg',
            link: {
              href: '#',
              label: 'Read Blog',
            },
          },
        },
      },
    },
    {
      post: {
        value: {
          data: {
            title:
              'Are You Prepared for a Cyber Attack: Three ways a cyber breach can negatively impact your company',
            excerpt:
              'As cyber criminals have improved their methods and become far more patient, businesses have been especially affected by cyber attacks. Cyber attacks have increased exponentially since 2019, particularly among small to medium-sized businesses. 65% of organizations…',
            featuredImage: '/images/resource-3.jpeg',
            link: {
              href: '#',
              label: 'Read Blog',
            },
          },
        },
      },
    },
  ],
};
