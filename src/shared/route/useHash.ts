import { useEffect, useState } from "react";

export const useHash = () => {
  const deleteMark = (hash: string) => {
    if (hash.startsWith("#")) {
      return hash.slice(1);
    }
    return hash;
  };

  const [hash, setHash] = useState("");

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
    if (window) {
      window.location.hash = newHash;
    } else {
      throw new Error("window is not defined");
    }
  };

  const clear = () => {
    if (window) {
      window.location.hash = "";
    } else {
      throw new Error("window is not defined");
    }
  };

  return { get, set, clear };
};
