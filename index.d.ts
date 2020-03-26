import { Readable } from "svelte/store";
import { Draft } from "immer";

export type Dispatch<A> = (value: A) => void;
export type Updater<S> = (f: (draft: Draft<S>) => void | S) => void;
export type Reducer<S = any, A = any> = (
  draftState: Draft<S>,
  action: A
) => void | S;

export declare function useImmer<S = any>(
  initialValue: S
): [Readable<S>, Updater<S>];
export declare function useImmerReducer<S = any, A = any>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: (initial: any) => S
): [Readable<S>, Dispatch<S>];
