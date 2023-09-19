"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

export default function NewUser() {
  const router = useRouter();
  return <Button onClick={() => router.push("/users")}>Create</Button>;
}
