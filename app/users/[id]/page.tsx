import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

export default function UserDetailPage({ params: { id } }: Props) {
  if (id > 10) notFound();

  return <div className="text-black">User Details Page {id}</div>;
}
