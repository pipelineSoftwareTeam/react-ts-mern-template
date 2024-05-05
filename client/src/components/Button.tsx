import type { ButtonProps } from '@/types/ButtonTypes';

const Button = ({ text, onClick }: ButtonProps) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
