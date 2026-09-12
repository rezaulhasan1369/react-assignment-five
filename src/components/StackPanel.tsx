function StackPanel() {
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
            0 technologies selected
          </p>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 text-sm font-bold text-pink-600">
          0
        </span>
      </div>

      <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center">
        <p className="text-sm font-medium text-slate-600">
          Your stack is empty
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Select technologies from the catalogue to build your ideal
          development stack.
        </p>
      </div>

      <button
        type="button"
        disabled
        className="mt-5 w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-400"
      >
        Remove All
      </button>
    </aside>
  );
}

export default StackPanel;