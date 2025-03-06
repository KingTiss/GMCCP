import { useState } from "react";
import { ListManagerI } from "../types/Lists";

export default function useListManager<T>(initialItems: T[]): ListManagerI<T> {
  const [items, setItems] = useState<T[]>(initialItems);
  return {
    items,
    add(item) {
      setItems((p) => [...p, item]);
    },
    remove(index) {
      setItems((p) => p.filter((item, i) => index !== i));
    },
  };
}
