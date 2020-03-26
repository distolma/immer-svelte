import { writable } from "svelte/store";
import { produce } from "immer";

export function useImmer(initialValue) {
  const { subscribe, update } = writable(initialValue);
  const updateValue = (updater) => update(produce(updater));

  return [{ subscribe }, updateValue];
}

export function useImmerReducer(reducer, initialState, initialAction) {
  if (initialAction) {
    initialState = initialAction(initialState);
  }
  const { subscribe, update } = writable(initialState);
  const dispatch = (action) =>
    pdate((value) => produce(reducer)(value, action));

  return [{ subscribe }, dispatch];
}
