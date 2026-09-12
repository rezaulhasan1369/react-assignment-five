import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
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

  return (
    <section id="technologies">
      <h2>Explore the Technologies</h2>

      {isLoading && <p>Loading technologies...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <p>{technologies.length} technologies loaded successfully.</p>
      )}
    </section>
  );
}

export default TechnologySection;