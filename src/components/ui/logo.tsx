import Image from "next/image";

export function Logo() {
  const logoUrl = "/logo.png";
  const logoAltText = "Söguheima Logo";

  return (
    <div className="relative w-14 h-14">
      <Image
        src={logoUrl}
        width={0}
        height={0}
        alt={logoAltText}
        sizes="100vw"
        loading="eager"
        className="h-full w-auto"
      />
    </div>
  );
}
