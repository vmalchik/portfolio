type HeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

export const Header = ({ title, subtitle, description }: HeaderProps) => {
  return (
    <header className="">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
        {title}
      </h1>
      {subtitle && (
        <h2 className="mt-3 text-lg sm:text-xl font-medium tracking-tight  text-slate-200">
          {subtitle}
        </h2>
      )}
      {description && <p className="mt-4 max-w-xs">{description}</p>}
    </header>
  );
};

export default Header;
