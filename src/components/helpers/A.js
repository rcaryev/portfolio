import Link from "next/link";
import parse from "html-react-parser";

export default function A({ text, href, classnames = "" }) {
  return (
    <Link href={href}>
      <a className={classnames}>{parse(text)}</a>
    </Link>
  );
}
