import { writable } from "svelte/store";
import { produce } from "immer";

export function useImmerReducer(reducer, initialState, initialAction) {
  if (initialAction) {
    initialState = initialAction(initialState);
  }
  const { subscribe, update } = writable(initialState);
  const dispatch = (action) =>
    update((value) => produce(reducer)(value, action));

  return [{ subscribe }, dispatch];
}
