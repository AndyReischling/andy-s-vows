import { DividerSprig } from "./Ornaments";

export default function Footer() {
  return (
    <footer className="bg-slate panel-paper relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:px-10">
        <DividerSprig
          className="ornament-periwinkle mb-1 h-6 w-48"
          aria-hidden="true"
        />
        <p className="flex items-baseline justify-center gap-x-4 font-script text-4xl font-normal leading-none text-periwinkle sm:gap-x-5">
          <span>Andy&apos;s</span>
          <span>Vows</span>
        </p>
        <p className="mt-4 font-body text-base italic text-bone/70">
          It sucked me first, and now sucks thee,
          <br />
          And in this flea our two bloods mingled be
        </p>
        <p className="mt-6 font-body text-xs uppercase tracking-[0.25em] text-bone/50">
          © {new Date().getFullYear()}
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          Andy&apos;s Vows
        </p>
      </div>
    </footer>
  );
}
