import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from './index';
import { ButtonPrimaryColors } from './button-primary';
import { ButtonSecondaryColors } from './button-secondary';
import { ReactComponent as IconDownload } from '../../assets/icons/svg/download.svg';
import classNames from 'classnames';

const Story: ComponentMeta<typeof ButtonPrimary | typeof ButtonSecondary> = {
  subcomponents: { ButtonPrimary, ButtonSecondary, ButtonTertiary },
  title: 'Button',
};
export default Story;

const PrimaryTemplate: ComponentStory<typeof ButtonPrimary> = (args) => {
  const buttonColors = Object.values(ButtonPrimaryColors);

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttonColors.map((color) => (
        <>
          <div className="flex flex-col">
            <div
              className={classNames(
                `p-3 border border-brand-gray-400 flex justify-center`
              )}
            >
              <ButtonPrimary color={color}>Read More</ButtonPrimary>
            </div>
            <div className="p-3 border-r border-l border-b border-brand-gray-400">
              <p className="capitalize text-xs font-medium">
                Secondary {color}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={classNames(
                `p-3 border border-brand-gray-400 flex justify-center`
              )}
            >
              <ButtonPrimary color={color} icon={<IconDownload />}>
                Read More
              </ButtonPrimary>
            </div>
            <div className="p-3 border-r border-l border-b border-brand-gray-400">
              <p className="capitalize text-xs font-mdium">
                Secondary {color} - Icon
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={classNames(
                `p-3 border border-brand-gray-400 flex justify-center`
              )}
            >
              <ButtonPrimary color={color}>Read More</ButtonPrimary>
            </div>
            <div className="p-3 border-r border-l border-b border-brand-gray-400">
              <p className="capitalize text-xs font-medium">
                Secondary {color} - As Link
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

const SecondaryTemplate: ComponentStory<typeof ButtonSecondary> = (args) => {
  const buttonColors = Object.values(ButtonSecondaryColors);

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttonColors.map((color) => (
        <>
          <div className="flex flex-col">
            <div
              className={classNames(
                `p-3 border border-brand-gray-400 flex justify-center`,
                {
                  'bg-brand-gray-700': color === ButtonSecondaryColors.LIGHT,
                }
              )}
            >
              <ButtonSecondary color={color}>Read More</ButtonSecondary>
            </div>
            <div className="p-3 border-r border-l border-b border-brand-gray-400">
              <p className="capitalize text-xs font-medium">
                Secondary {color}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={classNames(
                `p-3 border border-brand-gray-400 flex justify-center`,
                {
                  'bg-brand-gray-700': color === ButtonSecondaryColors.LIGHT,
                }
              )}
            >
              <ButtonSecondary color={color} icon={<IconDownload />}>
                Read More
              </ButtonSecondary>
            </div>
            <div className="p-3 border-r border-l border-b border-brand-gray-400">
              <p className="capitalize text-xs font-mdium">
                Secondary {color} - Icon
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={classNames(
                `p-3 border border-brand-gray-400 flex justify-center`,
                {
                  'bg-brand-gray-700': color === ButtonSecondaryColors.LIGHT,
                }
              )}
            >
              <ButtonSecondary color={color}>Read More</ButtonSecondary>
            </div>
            <div className="p-3 border-r border-l border-b border-brand-gray-400">
              <p className="capitalize text-xs font-medium">
                Secondary {color} - As Link
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

const TertiaryTemplate: ComponentStory<typeof ButtonTertiary> = (args) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="flex flex-col">
        <div
          className={classNames(
            `p-3 border border-brand-gray-400 flex justify-center`
          )}
        >
          <ButtonTertiary>Read More</ButtonTertiary>
        </div>
        <div className="p-3 border-r border-l border-b border-brand-gray-400">
          <p className="capitalize text-xs font-medium">Tertiary</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className={classNames(
            `p-3 border border-brand-gray-400 flex justify-center`
          )}
        >
          <ButtonTertiary icon={<IconDownload />}>Read More</ButtonTertiary>
        </div>
        <div className="p-3 border-r border-l border-b border-brand-gray-400">
          <p className="capitalize text-xs font-mdium">Tertiary - Icon</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className={classNames(
            `p-3 border border-brand-gray-400 flex justify-center`
          )}
        >
          <ButtonTertiary>Read More</ButtonTertiary>
        </div>
        <div className="p-3 border-r border-l border-b border-brand-gray-400">
          <p className="capitalize text-xs font-medium">Tertiary - As Link</p>
        </div>
      </div>
    </div>
  );
};

export const Primary = PrimaryTemplate.bind({});
Primary.args = {};

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {};

export const Tertiary = TertiaryTemplate.bind({});
Tertiary.args = {};
