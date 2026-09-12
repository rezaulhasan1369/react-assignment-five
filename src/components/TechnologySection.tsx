import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";
import StackPanel from "./StackPanel";
import TechnologyCard from "./TechnologyCard";

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies.");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleAddTechnology = (technology: Technology) => {
    const isAlreadySelected = selectedTechnologies.some(
      (selectedTechnology) =>
        selectedTechnology.id === technology.id,
    );

    if (isAlreadySelected) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((currentTechnologies) => [
      ...currentTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveTechnology = (technology: Technology) => {
  setSelectedTechnologies((currentTechnologies) =>
    currentTechnologies.filter(
      (currentTechnology) =>
        currentTechnology.id !== technology.id,
    ),
  );

  toast.info(`${technology.name} removed from your stack.`);
};

const handleRemoveAllTechnologies = () => {
  setSelectedTechnologies([]);
  toast.info("All technologies removed from your stack.");
};

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="scroll-mt-14 bg-slate-50 px-5 py-16 lg:scroll-mt-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center lg:text-left">
          <h2
            id="technologies-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl"
          >
            Explore the{" "}
            <span className="brand-gradient-text">Technologies</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 lg:text-base">
            Pick one technology, review its details and start building your
            ideal development stack.
          </p>
        </div>

        {isLoading && (
          <p className="text-center text-sm text-slate-500">
            Loading technologies...
          </p>
        )}

        {error && (
          <p
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700"
          >
            {error}
          </p>
        )}

        {!isLoading && !error && (
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAddTechnology}
                />
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
             <StackPanel
  selectedTechnologies={selectedTechnologies}
  onRemove={handleRemoveTechnology}
  onRemoveAll={handleRemoveAllTechnologies}
/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TechnologySection;