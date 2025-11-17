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
