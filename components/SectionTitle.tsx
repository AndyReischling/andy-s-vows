import { FiligreeHorizontal } from "./Ornaments";

type Tone = "onDark" | "onLight";

interface SectionTitleProps {
  /** Plain serif portion of the title. */
  lead: string;
  /** Accent word, same serif as the lead, color-highlighted only. */
  script: string;
  tone?: Tone;
}

export default function SectionTitle({
  lead,
  script,
  tone = "onLight",
}: SectionTitleProps) {
  const isDark = tone === "onDark";
  return (
    <div className="flex flex-col items-center text-center">
      <FiligreeHorizontal
        className={`mb-3 h-7 w-52 sm:w-64 ${
          isDark ? "ornament-periwinkle" : "ornament-oxblood"
        }`}
        aria-hidden="true"
      />
      <h2
        className={`font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl ${
          isDark ? "misreg-blue text-bone" : "misreg-red text-oxblood"
        }`}
      >
        {lead}{" "}
        <span className={isDark ? "text-periwinkle" : "text-oxblood"}>
          {script}
        </span>
      </h2>
    </div>
  );
}
