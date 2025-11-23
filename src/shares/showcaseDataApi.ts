import { nextTick, type Ref, watch } from 'vue';
import { BsArrayStore, type TDataListSchema, type TDataSource } from 'vue-mdbootstrap';

export const schemaConfigDefinition: TDataListSchema = {
  displayField: 'label',
  valueField: 'value',
};

export function dsComponentStates(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'active', label: 'Active' },
        { value: 'readonly', label: 'Readonly' },
        { value: 'disabled', label: 'Disabled' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsComponentStatesRD(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'readonly', label: 'Readonly' },
        { value: 'disabled', label: 'Disabled' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsContextColors(excludes: string[] = []): TDataSource {
  const results = [
    { value: 'default', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'success', label: 'Success' },
    { value: 'danger', label: 'Danger' },
    { value: 'warning', label: 'Warning' },
    { value: 'info', label: 'Info' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ].filter((it) => !excludes.includes(it.value));

  return {
    proxy: new BsArrayStore(results, {
      idProperty: 'value',
    }),
    schema: schemaConfigDefinition,
  };
}

export function changeComponentColor(colorRef: Ref<string | undefined>, data: string): string {
  if (colorRef.value) {
    return data.replace('{$colorName}', `color="${colorRef.value}"`);
  }

  return data;
}

export function changeComponentVariant(variantRef: Ref<string | undefined>, data: string): string {
  if (variantRef.value) {
    return data.replace('{$variants}', variantRef.value);
  }

  return data;
}
declare type WatcherDefaultValue<T> = {
  refObj: Ref<T>;
  default: T;
};

export function addWatcherForDefaultValue<T>(...args: WatcherDefaultValue<T>[]): void {
  for (const obj of args) {
    watch(obj.refObj, async (value) => {
      if (!value) {
        await nextTick(() => {
          obj.refObj.value = obj.default;
        });
      }
    });
  }
}
