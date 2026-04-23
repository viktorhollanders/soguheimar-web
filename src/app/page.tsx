import { Logo } from "@/components/ui/logo";
import courses from "@/data/courses.json";
import { CourseCard } from "@/components/course-card";

export default function Home() {
  return (
    <div className="m-auto flex max-w-200 flex-col items-center gap-8 pt-12">
      <Logo />
      <h1 className="font-grenze-gotisch text-brand-primary text-5xl">
        Sögueihmar
      </h1>

      <p>
        Sumarbúðir söguheima eru sex daga ferðalag um sagnaheim ævintýrisins sem
        í boði er hverju sinni. Ævintýrið á sér stað í ævintýra dalnum í fallegu
        umhverfi Lækjarbotna. Þar reisum við tjöldin okkar og kveikjum upp
        varðeld undir gullnu þaki heimsins. Við ætlum að kynnast heiminum,
        náttúrunni og hvert öðru í gegnum útiveru og leik. Við munum horfa á
        eftir miðnætursólinni, sofa í tjöldunum og sitja við eldinn og búa saman
        í eina viku. Á daginn munum við æfa sirkus og dans, læra að tálga og
        skjóta boga, elda ljúfengan mat og mála úti með vatnslitum, teikna og
        segja sögur.
      </p>

      <div className="flex flex-col items-center gap-8 rounded-full">
        <div className="text-center">
          <h3 className="text-2xl">Námskeið</h3>
          <h2 className="font-grenze-gotisch text-[32px] font-medium md:text-[38px]">
            Ronja Ræningjadóttir
          </h2>
        </div>
      </div>

      {courses.map((course) => {
        return <CourseCard key={course.weekNumber} course={course} />;
      })}
    </div>
  );
}
