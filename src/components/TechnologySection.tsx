import {useEffect, useState } from "react";
import type { Technology} from "../types/technology";
import TechnologyCard from "./TechnologyCard";

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies."); }

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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );}

export default TechnologySection;