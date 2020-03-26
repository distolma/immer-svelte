# immer-svelte

## Installation

```sh
npm i -S immer immer-svelte
```
or
```sh
yarn add immer immer-svelte
```

## API

#### useImmer

The function returns a tuple, the first value of the tuple is the current state, the second is the updater function,
which accepts an [immer producer function](https://github.com/mweststrate/immer#api), in which the `draft` can be mutated freely, until the producer ends and the changes will be made immutable and become the next state.

```html
<script>
  import { useImmer } from "immer-svelte";

  const [state, updateState] = useImmer({ count: 0 });

  function increase() {
    updateState(draft => {
      draft.count++;
    });
  }
</script>

<div>Count: {$state.count}</div>
<button on:click={increase}>Increase</button>
```

#### useImmerReducer

```html
<script>
  import { useImmerReducer } from "immer-svelte";

  const initialState = { count: 0 };

  function reducer(draft, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increment":
        return void draft.count++;
      case "decrement":
        return void draft.count--;
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState);
</script>

<div>
  Count: {$state.count}
  <button on:click={() => dispatch({ type: "reset" })}>Reset</button>
  <button on:click={() => dispatch({ type: "increment" })}>+</button>
  <button on:click={() => dispatch({ type: "decrement" })}>-</button>
</div>
```
