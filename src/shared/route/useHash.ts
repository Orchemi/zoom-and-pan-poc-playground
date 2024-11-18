import { useEffect, useState } from "react";

export const useHash = () => {
  const deleteMark = (hash: string) => {
    if (hash.startsWith("#")) {
      return hash.slice(1);
    }
    return hash;
  };

  const [hash, setHash] = useState(deleteMark(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setHash(deleteMark(window.location.hash));
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const get = () => {
    return hash;
  };

  const set = (newHash: string) => {
    window.location.hash = newHash;
  };

  const clear = () => {
    window.location.hash = "";
  };

  return { get, set, clear };
};
