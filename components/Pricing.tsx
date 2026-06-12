import SectionTitle from "./SectionTitle";

const tiers = [
  {
    title: "Flat fee",
    price: "$200",
    detail: "interview + written vows",
  },
  {
    title: "Revisions",
    price: "+$100",
    detail: "per round",
  },
  {
    title: "Wedding-day coaching",
    price: "+$200",
    detail: "assuming an open bar",
  },
];

export default function Pricing() {
  return (
    <section className="bg-bone panel-paper relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <SectionTitle lead="How It" script="Works" tone="onLight" />

        <p className="mx-auto mt-10 max-w-2xl text-center font-body text-xl leading-snug text-ink sm:text-2xl">
          My process is simple. I interview you for about 30 minutes about your
          relationship, and then I just write your vows for you.
        </p>

        <dl className="mx-auto mt-14 max-w-2xl divide-y divide-oxblood/25 border-y border-oxblood/25">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-6"
            >
              <dt className="font-serif text-2xl font-medium text-oxblood sm:text-3xl">
                {tier.title}
                <span className="block font-body text-base italic text-ink/70 sm:text-lg">
                  {tier.detail}
                </span>
              </dt>
              <dd className="font-serif text-3xl font-semibold text-oxblood sm:text-4xl">
                {tier.price}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
