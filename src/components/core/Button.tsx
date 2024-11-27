import { ReactNode } from 'react';

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className="rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
