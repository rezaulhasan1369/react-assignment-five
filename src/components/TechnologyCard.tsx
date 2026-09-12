import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({technology,onAdd,}: TechnologyCardProps) {
  return (
  <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-slate-50">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="size-7 object-contain"
          />
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-950">
            {technology.name}
          </h3>

          <p className="mt-0.5 text-xs font-medium text-slate-500">
            {technology.category}
          </p>
        </div>
      </div>

      <span className="shrink-0 rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold text-pink-600">
        {technology.badge}
      </span>
    </div>

    <p className="mt-4 grow text-sm leading-6 text-slate-600">
      {technology.description}
    </p>

    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
      <div>
        <p className="text-[10px] font-medium tracking-wide text-slate-400 uppercase">
          Difficulty
        </p>

        <p className="mt-1 text-xs font-semibold text-slate-700">
          {technology.difficulty}
        </p>
      </div>

      <div className="text-right">
        <p className="text-[10px] font-medium tracking-wide text-slate-400 uppercase">
          Rating
        </p>

        <p
          className="mt-1 text-xs font-semibold text-amber-500"
          aria-label={`Rating: ${technology.rating} out of 5`}
        >
          ★ {technology.rating}
        </p>
      </div>
    </div>

    <button
  type="button"
  onClick={() => onAdd(technology)}
  className="mt-5 w-full rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
>
  Add to Stack
</button>
  </article>
);}

export default TechnologyCard;