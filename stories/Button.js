import './button.css';
import '/Users/admin/design-system/build/css/_variables.css';

export const createButton = ({
  primary = true,
  size = 'large',
  color ='color-scheme-one',
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['storybook-button', `storybook-button--${size}`, `storybook-button--${color}`, mode].join(' ');

  return btn;
};
