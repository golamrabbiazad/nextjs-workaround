import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-white">
      <ul className="flex p-5">
        <li className="px-5">
          <Link href={`/products`}>Products</Link>
        </li>
        <li>
          <Link href={`/admin`}>Admin</Link>
        </li>
        <li className="px-5">
          <Link href={`/users`}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
