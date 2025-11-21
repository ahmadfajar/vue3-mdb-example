import { BsArrayStore, type TDataListSchema, type TDataSource } from 'vue-mdbootstrap';

export const schemaConfigDefinition: TDataListSchema = {
  displayField: 'label',
  valueField: 'value',
};

export function componentStates(): TDataSource {
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

export function componentStatesRD(): TDataSource {
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
export function contextColors(excludes: string[] = []): TDataSource {
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
