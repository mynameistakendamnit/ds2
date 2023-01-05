import './button.css';
import '/Users/admin/design-system/build/css/_variables.css';

export const createButton = ({
  primary = true,
  size = 'large',
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');

  return btn;
};
