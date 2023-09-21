import Image from "next/image";

export default function AdminHomePage() {
  return (
    <div>
      Admin Homepage
      <Image
        src="https://images.unsplash.com/photo-1672309558498-cfcc89afff25"
        alt="React Cover"
        width={500}
        height={500}
        className="object-cover rounded-md"
        sizes="(max-with: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={75}
        priority
      />
    </div>
  );
}
