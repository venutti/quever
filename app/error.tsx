"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-items-center h-full w-full">
      <h1 className="text-2xl font-bold">Algo terrible ocurrió</h1>
      <h3 className="text-xl mb-2">
        Tuvimos problemas al querer conseguir datos :c
      </h3>
      <button
        onClick={reset}
        className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
      >
        Volver a intentar
      </button>
    </div>
  );
}
