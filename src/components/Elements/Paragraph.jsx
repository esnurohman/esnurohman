export default function Paragraph(props) {
  const { children, classname } = props;
  return <div className={`${classname}`}>{children}</div>;
}
