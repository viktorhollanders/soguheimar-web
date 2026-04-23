import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-secondary md:gap-auto flex flex-col items-center justify-baseline gap-6 py-8 md:flex-row md:items-start md:justify-between md:py-14">
      <div className="flex flex-col gap-4">
        <h3 className="font-grenze-gotisch text-brand-primary text-[32px]">
          Hafa samband
        </h3>
        <div>
          <p>Netfang:</p>
          <a href="mailto:example@email.com">söguheimar@gmail.com</a>
        </div>
        <div>
          <p>Símanúmer::</p>
          <p>
            <a href="tel:8921142">892-1142</a> /{" "}
            <a href="tel:8993377">899-3377</a>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-grenze-gotisch text-brand-primary text-[32px]">
          Heimilisfang
        </h3>
        <div>
          <p>Lækjarbotnaland 53</p>
          <p>203 Kópavogur</p>
        </div>
        <a
          href="https://goo.gl/maps/9Lb6tZHBz3E2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-between"
        >
          <p>Sjá á korti</p>

          <MapPin strokeWidth={1} className="text-brand-primary" />
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-grenze-gotisch text-brand-primary text-[32px]">
          Fylgið okkur
        </h3>
        <div className="flex flex-col gap-4">
          <a
            href="https://www.instagram.com/soguheimar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/Söguheimar-275980159231246"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
