import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode; // Element | React.FC;
  customColors?: boolean; // No bg and outline colors
  dark?: boolean;
  size?: 'none' | 'small' | 'medium' | 'large' | 'largest';
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}

interface LinkProps {
  children: React.ReactNode; // Element | React.FC;
  customColors?: boolean; // No bg and outline colors
  dark?: boolean;
  size?: 'none' | 'small' | 'medium' | 'large' | 'largest';
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

function getSizeClass(size: string) {
  switch (size) {
    case 'none':
      return '';
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

const Solid = ({ children, size = 'medium', customColors = false, dark = false, type = undefined, onClick, className = '' }: ButtonProps) => {
  let buttonSizeClass = getSizeClass(size); // Default to medium size if no size prop is provided.

  return (
    <button onClick={onClick} type={type} className={`${buttonSizeClass} ${className} ${(!customColors && !dark) && 'bg-seasalt hover:bg-desert_sand-600'} ${(!customColors && dark) && 'bg-caribbean_current hover:bg-dark_cyan-600'} rounded-3xl font-semibold transition-colors duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
      {children}
    </button>
  );
};

const Outline = ({ children, size = 'medium', customColors = false, dark = false, type = undefined, onClick, className = '' }: ButtonProps) => {
  let buttonSizeClass = getSizeClass(size);

  return (
    <button onClick={onClick} type={type} className={`${buttonSizeClass} ${className} ${(!customColors && !dark) && 'hover:bg-seasalt hover:outline-seasalt'} ${(!customColors && dark) && 'hover:bg-caribbean_current hover:outline-caribbean_current'} outline outline-current outline-2 -outline-offset-1 text-base rounded-3xl font-semibold transition-[background-color] duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
      {children}
    </button>
  );
};


const LinkSolid = ({ children, customColors = false, size = 'medium', dark = false, href, target, rel, className = '' }: LinkProps) => {
  let buttonSizeClass = getSizeClass(size);

  return (
    <Link href={href} target={target} rel={rel} className={`${buttonSizeClass} ${className} ${(!customColors && !dark) && 'bg-seasalt hover:bg-desert_sand-600'} ${(!customColors && dark) && 'bg-caribbean_current hover:bg-dark_cyan-600'} rounded-3xl font-semibold transition-colors duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
      {children}
    </Link>
  );
};

const LinkOutline = ({ children, size = 'medium', customColors = false, dark = false, href, target, rel, className = '' }: LinkProps) => {
  let buttonSizeClass = getSizeClass(size);

  return (
    <Link href={href} target={target} rel={rel} className={`${buttonSizeClass} ${className} ${(!customColors && !dark) && 'hover:bg-seasalt hover:outline-seasalt'} ${(!customColors && dark) && 'hover:bg-caribbean_current hover:outline-caribbean_current'} outline outline-current outline-2 -outline-offset-1 text-base rounded-3xl font-semibold transition-[background-color] duration-200 ease-in-out focus:ring focus:ring-blue-300`}>
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
