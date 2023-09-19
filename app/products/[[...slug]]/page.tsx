interface Props {
  params: { slug: string[] };
  searchParams: {
    sortOrder: string;
  };
}

export default function Products({
  params: { slug },
  searchParams: { sortOrder },
}: Props) {
  return (
    <div>
      {" "}
      {slug} {sortOrder} Product page
    </div>
  );
}
