import Link from "next/link";

export default function MenuLink({ link, destination, onClick }) {
  return (
    <Link href={`${destination}`} onClick={onClick}>
      <div className="flex items-center gap-2 group">
        <div className="size-1 w-0 bg-black transition-all group-hover:w-10"></div>
        <li className=" uppercase text-2xl tracking-wider ">{link}</li>
        <div className="size-1 w-0 bg-black transition-all group-hover:w-10"></div>
      </div>
    </Link>
  );
}
