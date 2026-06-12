import SectionTitle from "./SectionTitle";
import { FiligreeCorner } from "./Ornaments";

export default function About() {
  return (
    <section className="bg-bone panel-paper relative overflow-hidden">
      <FiligreeCorner
        className="ornament-oxblood pointer-events-none absolute left-2 top-2 h-16 w-16 opacity-60 sm:h-20 sm:w-20"
        aria-hidden="true"
      />
      <FiligreeCorner
        className="ornament-oxblood pointer-events-none absolute bottom-2 right-2 h-16 w-16 -scale-100 opacity-60 sm:h-20 sm:w-20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <SectionTitle lead="About" script="Andy" tone="onLight" />

        <p className="mx-auto mt-10 max-w-2xl font-body text-xl leading-snug text-ink sm:text-2xl">
          Andy is a professional writer who writes very compelling sentences for
          the biggest companies in the world. He is also sensitive to the whims
          of romance, and a frequent guest of weddings.
        </p>
      </div>
    </section>
  );
}
