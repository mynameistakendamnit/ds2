import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['color-scheme-one', 'color-scheme-two', 'color-scheme-three'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',

};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const ColorSchemeOne = Template.bind({});
ColorSchemeOne.args = {
  color: 'color-scheme-one',
  label: 'Button',
};

export const ColorSchemeTwo = Template.bind({});
ColorSchemeTwo.args = {
  color: 'color-scheme-two',
  label: 'Button',
};

export const ColorSchemeThree = Template.bind({});
ColorSchemeThree.args = {
  color: 'color-scheme-three',
  label: 'Button',
};
