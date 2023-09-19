import Link from "next/link";
import { ProductCard } from "./components/product-card";

export default function Home() {
  return (
    <main>
      <h1 className="text-black p-16">Hello world</h1>
      <Link href="/users" className="text-black">
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
