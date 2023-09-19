import { Suspense } from "react";
import Link from "next/link";
import { UserTable } from "../components/user-table";
import { Button } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

export default function Users({ searchParams: { sortOrder } }: Props) {
  return (
    <div>
      <h1>Users</h1>
      <Button>
        <Link href="/users/new">New User</Link>
      </Button>
      <Suspense
        fallback={
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        }
      >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
}
