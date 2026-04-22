import localFont from "next/font/local";
import { Course } from "@/types";
import { Button } from "./ui/button";

const cloisterBlack = localFont({
  src: "../../public/CloisterBlack.ttf",
});

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="border-brand-gray-100 shadow-brand-shadow flex min-w-75 flex-col items-center gap-6 rounded-2xl border p-8 px-6 py-3 md:w-full md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <h2
          className={`${cloisterBlack.className} text-brand-danger text-[64px] md:text-[48px]`}
        >
          {course.title}
        </h2>

        <div>
          <h3 className="text-center text-2xl text-[16px] font-bold md:text-left">{`Vika ${course.weekNumber}`}</h3>
          <p>{`${course.startDate} – ${course.endDate}`}</p>
        </div>
      </div>

      <h3 className="md:text-[20px]">{`${Number(course.price).toLocaleString("de-DE")} kr.`}</h3>

      <Button
        disabled={course.link === "#"}
        variant="primary"
        className="w-full md:w-auto"
      >
        Skrá
      </Button>
    </div>
  );
}
