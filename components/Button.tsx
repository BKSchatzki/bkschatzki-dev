import Link from "next/link";

type ButtonProps = {
  name: string;
  href: string;
};

const Button = ({ name, href }: ButtonProps) => {
  return (
    <Link href={href} className="btn btn-ghost m-1 w-24">
      {name}
    </Link>
  );
};

export default Button;
