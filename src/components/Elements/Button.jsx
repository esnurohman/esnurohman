export default function Button(props) {
  const { children, classname, link, target } = props;
  return (
    <a
      href={link}
      target={target}
      className={`px-4 py-1 text-xs transition-all duration-1000 border rounded-md shadow-md md:text-base hover:scale-95 hover:text-primary hover:border-primary ${classname}`}
    >
      {children}
    </a>
  );
}
