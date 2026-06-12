import { FiligreeHorizontal, FiligreeCorner } from "./Ornaments";

export default function Hero() {
  return (
    <section className="bg-oxblood panel-paper relative overflow-hidden">
      {/* corner flourishes */}
      <FiligreeCorner
        className="ornament-periwinkle pointer-events-none absolute left-3 top-3 h-16 w-16 opacity-70 sm:h-24 sm:w-24"
        aria-hidden="true"
      />
      <FiligreeCorner
        className="ornament-periwinkle pointer-events-none absolute right-3 top-3 h-16 w-16 -scale-x-100 opacity-70 sm:h-24 sm:w-24"
        aria-hidden="true"
      />
      <FiligreeCorner
        className="ornament-periwinkle pointer-events-none absolute bottom-3 left-3 h-16 w-16 -scale-y-100 opacity-70 sm:h-24 sm:w-24"
        aria-hidden="true"
      />
      <FiligreeCorner
        className="ornament-periwinkle pointer-events-none absolute bottom-3 right-3 h-16 w-16 -scale-100 opacity-70 sm:h-24 sm:w-24"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        {/* brand wordmark */}
        <p className="mb-10 flex items-baseline justify-center gap-x-5 font-script text-3xl font-normal text-periwinkle sm:gap-x-7 sm:text-4xl">
          <span>Andy&apos;s</span>
          <span>Vows</span>
        </p>

        {/* horizontal flourish above headline */}
        <FiligreeHorizontal
          className="ornament-periwinkle mb-4 h-8 w-64 sm:w-80"
          aria-hidden="true"
        />

        <h1 className="misreg-blue font-serif text-5xl font-semibold leading-[0.92] text-bone sm:text-7xl md:text-8xl">
          From the wedding
          <br />
          to the <span className="text-periwinkle">bedding</span>
        </h1>

        <FiligreeHorizontal
          className="ornament-periwinkle mt-4 h-8 w-64 rotate-180 sm:w-80"
          aria-hidden="true"
        />

        <div className="mt-10 max-w-2xl space-y-5 font-body text-lg leading-snug text-bone/90 sm:text-xl">
          <p>
            The Catholic Church used to tell you what to say when you got
            married, and that was a pretty good system because no one sounded
            smarter than the other person. Now, you go to weddings and you hear
            people who&apos;ve written their own vows and you can tell that one
            person is a much better writer and deeper thinker than the other
            person. And, frankly, it&apos;s embarrassing when they get dunked on
            by their partner (usually the bride).
          </p>
          <p>
            Andy&apos;s Vows guarantees that you will come across as the
            thoughtful, soulful, loving and eloquent partner that you probably
            are in your heart, but that just can&apos;t find its way out.
          </p>
        </div>

        <a
          href="#contact"
          className="mt-12 inline-block border border-periwinkle bg-periwinkle px-9 py-4 font-serif text-lg font-medium uppercase tracking-[0.18em] text-oxblood transition-colors hover:bg-transparent hover:text-periwinkle"
        >
          Book your interview.
        </a>
      </div>
    </section>
  );
}
