import { useMemo } from "react";

export function useSearch(data, query, keys) {
    return useMemo(() => {
      if (!query) return data;

      const q = query.toLowerCase();

      return data.filter((item) =>
        keys.some((key) => {
          const value = String(item[key]).toLowerCase();

          if (key === "Sex") {
            return value === q; // match
          }

          return value.includes(q); // substring
        })
      );
    }, [data, query, keys]);
  }
