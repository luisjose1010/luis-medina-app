import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode; // Element | React.FC;
  size?: 'small' | 'medium' | 'large' | 'largest';
  onClick?: () => void;
  className?: string;
}

interface LinkProps {
  children: React.ReactNode; // Element | React.FC;
  size?: 'small' | 'medium' | 'large' | 'largest';
  href: string;
  target?: string;
  rel?: string;
  className? : string;
}

function getSizeClass(size: string) {
  switch (size) {
    case 'small':
      return 'px-5 py-1.5 text-sm';
    case 'large':
      return 'px-9 py-2.5 text-base';
    case 'largest':
      return 'px-12 py-3 text-base';
    default:
      return 'px-6 py-2 text-base';
  }
}

const Solid = ({ children, size = 'medium', onClick, className = '' }: ButtonProps) => {
  let buttonSizeClass = getSizeClass(size); // Default to medium size if no size prop is provided.

  return (
    <button onClick={onClick} className={`${buttonSizeClass} ${className} bg-seasalt hover:bg-desert_sand-600 rounded-3xl font-semibold transition-colors duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
      {children}
    </button>
  );
};

const Outline = ({ children, size = 'medium', onClick, className = '' }: ButtonProps) => {
  let buttonSizeClass = getSizeClass(size);

  return (
    <button onClick={onClick} className={`${buttonSizeClass} ${className} outline outline-current outline-2 -outline-offset-1 text-base rounded-3xl font-semibold transition-[background-color] duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
      {children}
    </button>
  );
};


const LinkSolid = ({ children, size = 'medium', href, target, rel, className = '' }: LinkProps) => {
  let buttonSizeClass = getSizeClass(size);

  return (
    <Link href={href} target={target} rel={rel} className={`${buttonSizeClass} ${className} bg-seasalt hover:bg-desert_sand-600 rounded-3xl font-semibold transition-colors duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
      {children}
    </Link>
  );
};

const LinkOutline = ({ children, size = 'medium', href, target, rel, className = '' }: LinkProps) => {
  let buttonSizeClass = getSizeClass(size);

  return (
    <Link href={href} target={target} rel={rel} className={`${buttonSizeClass} ${className} outline outline-current outline-2 -outline-offset-1 text-base rounded-3xl font-semibold transition-[background-color] duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
      {children}
    </Link>
  );
};

const Button = {
  Solid,
  Outline,
  LinkSolid,
  LinkOutline,
};

export default Button;
