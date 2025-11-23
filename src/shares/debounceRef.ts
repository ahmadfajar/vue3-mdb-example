import {
  ref as deepRef,
  type MaybeRefOrGetter,
  type Ref,
  shallowReadonly,
  toValue,
  watch,
} from 'vue';
import type { AnyFn, ArgumentsType, Awaited, PromisifyFn, TimerHandle } from './types';

const noop = () => {};

export type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return;

export interface FunctionWrapperOptions<Args extends any[] = any[], This = any> {
  fn: FunctionArgs<Args, This>;
  args: Args;
  thisArg: This;
}

export type EventFilter<Args extends any[] = any[], This = any, Invoke extends AnyFn = AnyFn> = (
  invoke: Invoke,
  options: FunctionWrapperOptions<Args, This>
) => ReturnType<Invoke> | PromiseLike<Invoke>;

export interface DebounceFilterOptions {
  /**
   * The maximum time allowed to be delayed before it's invoked.
   * In milliseconds.
   */
  maxWait?: MaybeRefOrGetter<number>;

  /**
   * Whether to reject the last call if it's been cancel.
   *
   * @default false
   */
  rejectOnCancel?: boolean;
}

/**
 * @internal
 */
function createFilterWrapper<T extends AnyFn>(filter: EventFilter, fn: T) {
  function wrapper(this: any, ...args: ArgumentsType<T>) {
    return new Promise<Awaited<ReturnType<T>>>((resolve, reject) => {
      // make sure it's a promise
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args }))
        .then(resolve)
        .catch(reject);
    });
  }

  return wrapper;
}

/**
 * Create an EventFilter that debounce the events
 *
 * @internal
 */
function debounceFilter(ms: MaybeRefOrGetter<number>, options: DebounceFilterOptions = {}) {
  let timer: TimerHandle;
  let maxTimer: TimerHandle;
  let lastRejected: AnyFn = noop;

  const _clearTimeout = (timer: TimerHandle) => {
    clearTimeout(timer);
    lastRejected();
    lastRejected = noop;
  };

  let lastInvoker: () => void;

  const filter: EventFilter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);

    if (timer) _clearTimeout(timer);

    if (duration <= 0 || (maxDuration !== undefined && maxDuration <= 0)) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = undefined;
      }

      return Promise.resolve(invoke());
    }

    return new Promise((resolve, reject) => {
      lastRejected = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke;

      // Create the maxTimer. Clears the regular timer on invoke
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer) _clearTimeout(timer);
          maxTimer = undefined;
          resolve(lastInvoker());
        }, maxDuration);
      }

      // Create the regular timer. Clears the max timer on invoke
      timer = setTimeout(() => {
        if (maxTimer) _clearTimeout(maxTimer);
        maxTimer = undefined;
        resolve(invoke());
      }, duration);
    });
  };

  return filter;
}

export type UseDebounceFnReturn<T extends FunctionArgs> = PromisifyFn<T>;

/**
 * Debounce execution of a function.
 *
 * @see https://vueuse.org/useDebounceFn
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  options     Options
 *
 * @return A new, debounce, function.
 */
export function useDebounceFn<T extends FunctionArgs>(
  fn: T,
  ms: MaybeRefOrGetter<number> = 200,
  options: DebounceFilterOptions = {}
): UseDebounceFnReturn<T> {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}

export type RefDebouncedReturn<T = any> = Readonly<Ref<T>>;

/**
 * Debounce updates of a ref value.
 *
 * @return A new debounced ref.
 */
export function useRefDebounced<T>(
  value: Ref<T>,
  ms: MaybeRefOrGetter<number> = 200,
  options: DebounceFilterOptions = {}
): RefDebouncedReturn<T> {
  const debounced = deepRef(toValue(value)) as Ref<T>;

  const updater = useDebounceFn(
    () => {
      debounced.value = value.value;
    },
    ms,
    options
  );

  watch(value, () => updater());

  return shallowReadonly(debounced);
}
