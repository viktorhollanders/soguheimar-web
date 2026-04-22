import { Logo } from "@/components/ui/logo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Logo />
      <h1 className="text-2xl font-bold">Söguehimar</h1>
      <h3>Ronja Ræningjadóttir</h3>

      <div className="flex flex-col items-center gap-2">
        <p className="font-bold">Dagsetningar</p>
        <p>Vika 1: 22. júní til 27. júní (6 dagar)</p>
        <p>Vika 2: 30. júní til 5. júlí (6 dagar)</p>
      </div>

    </div>
  );
}
