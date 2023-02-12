import { writable, readable, derived } from 'svelte/store';
// step 1
export const count = writable(0);

// store for current time READABLE
export const time = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
  return () => {
    clearInterval(interval);
  };
});

const start = new Date();
export const eclapsedTime = derived(time, ($time) =>
  Math.round(($time.valueOf() - start.valueOf()) / 1000)
);
