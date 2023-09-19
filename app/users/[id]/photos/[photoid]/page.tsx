import { Button } from "@/app/components/ui/button";
import Link from "next/link";

interface Props {
  params: {
    id: number;
    photoid: number;
  };
}

export default function PhotoDetailsPage({ params: { id, photoid } }: Props) {
  return (
    <>
      <div className="text-black">
        <p>User Details Page {id}</p>
        <p>User Photos Page {photoid}</p>
        <Button>Home</Button>
        <Link href="/">Back to Home &rarr;</Link>
      </div>
    </>
  );
}
