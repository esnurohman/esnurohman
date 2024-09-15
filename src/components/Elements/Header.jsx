export default function Header(props) {
  const { children, classname } = props;
  return (
    <div>
      <div className={`text-3xl font-bold ${classname}`}>{children}</div>
    </div>
  );
}
