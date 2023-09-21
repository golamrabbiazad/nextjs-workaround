import Link from "next/link";
import { ProductCard } from "./components/product-card";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { HeavyComponent } from "./components/heavy-compoonent";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1 className="text-black p-16">
        {session && <span>{session.user!.name}</span>}
      </h1>
      <Link scroll={false} href="/users" className="text-black">
        Users
      </Link>
      <ProductCard />
      <HeavyComponent />
    </main>
  );
}
