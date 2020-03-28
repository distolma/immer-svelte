import { writable } from "svelte/store";
import { produce } from "immer";

export function useImmer(initialValue) {
  const { subscribe, update } = writable(initialValue);
  const updateValue = (updater) => update(produce(updater));

  return [{ subscribe }, updateValue];
}
