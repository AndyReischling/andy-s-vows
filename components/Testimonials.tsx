import SectionTitle from "./SectionTitle";
import { DividerSprig } from "./Ornaments";

const testimonials = [
  {
    name: "Yuri",
    quote:
      "I sounded much better than my wife. She looked like a fool in front of all of our friends and family, and I looked eloquent and deep. They had no idea someone else wrote them for me.",
    tilt: "sm:-rotate-2",
  },
  {
    name: "Vladimir",
    quote:
      "Andy cut right to the core of my relationship which was our mutual hatred of borscht. So he wrote a speech all about borscht. It was pretty weird, but he tied it back to when we first met back in Yugoslavia. Then it got romantic. We're pregnant now.",
    tilt: "sm:rotate-1",
  },
  {
    name: "Igor",
    quote:
      "I'm a terrible writer and speaker. Andy decided early on that there was no way I would be able to deliver the speech even if he wrote it for me, so we switched mediums to movement. I expressed myself through an interpretative dance set to 'These Eyes' by The Guess Who. I got a five minute standing ovation.",
    tilt: "sm:rotate-2",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate panel-paper relative overflow-hidden">
      {/* ghosted repeated wordmark watermark */}
      <div className="watermark text-bone" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i}>Andy&apos;s Vows</span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionTitle lead="Kind" script="Words" tone="onDark" />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={`bg-bone panel-paper flex flex-col gap-5 border border-oxblood/30 px-7 py-8 shadow-lg shadow-black/20 transition-transform ${t.tilt} hover:rotate-0`}
            >
              <blockquote className="relative z-10 font-body text-lg leading-snug text-ink">
                <span
                  className="font-serif text-5xl leading-none text-oxblood/60"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>
              <figcaption className="relative z-10 mt-auto">
                <DividerSprig
                  className="ornament-oxblood mb-2 h-5 w-36"
                  aria-hidden="true"
                />
                <span className="font-script text-3xl font-normal text-oxblood">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
