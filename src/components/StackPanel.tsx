import type { Technology } from "../types/technology";

interface StackPanelProps {
  selectedTechnologies: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
}

function StackPanel({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackPanelProps) {
  const selectedCount = selectedTechnologies.length;

  return (
    <aside
      aria-labelledby="stack-heading"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3
            id="stack-heading"
            className="text-lg font-bold text-slate-950"
          >
            Your Stack
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {selectedCount}{" "}
            {selectedCount === 1
              ? "technology"
              : "technologies"}{" "}
            selected
          </p>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 text-sm font-bold text-pink-600">
          {selectedCount}
        </span>
      </div>

      {selectedCount === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center">
          <p className="text-sm font-medium text-slate-600">
            Your stack is empty
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Select technologies from the catalogue to build your ideal
            development stack.
          </p>
        </div>
      ) : (
        <ul className="mt-5 max-h-80 space-y-3 overflow-y-auto pr-1">
          {selectedTechnologies.map((technology) => (
            <li
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                <img
                  src={technology.icon}
                  alt=""
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {technology.name}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {technology.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(technology)}
                aria-label={`Remove ${technology.name} from stack`}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg leading-none text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={onRemoveAll}
        disabled={selectedCount === 0}
        className={`mt-5 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
          selectedCount === 0
            ? "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400"
            : "brand-gradient text-white hover:opacity-90"
        }`}
      >
        Remove All
      </button>
    </aside>
  );
}

export default StackPanel;