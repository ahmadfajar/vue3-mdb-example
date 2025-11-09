import {
  BsArrayStore,
  type TDataListSchema,
  type TDataSource,
  type TRadioInputProps,
} from 'vue-mdbootstrap';

export const schemaConfigDefinition: TDataListSchema = {
  displayField: 'label',
  valueField: 'value',
};

export function buttonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'tonal', label: 'Tonal' },
        { value: 'outlined', label: 'Outlined' },
        { value: 'flat', label: 'Flat' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function buttonShapes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'pill', label: 'Pill (Default)' },
        { value: 'rounded', label: 'Rounded' },
        { value: 'pill-off', label: 'Rectangle' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function buttonSizes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'md', label: 'Default' },
        { value: 'lg', label: 'Large' },
        { value: 'sm', label: 'Small' },
        { value: 'xs', label: 'Extra Small' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function buttonStates(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'default', label: 'Default' },
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

export function buttonIconPositions(): TRadioInputProps[] {
  return [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];
}

export function iconAnimationVariants(): TRadioInputProps[] {
  return [
    { value: 'spin', label: 'Spin' },
    { value: 'pulse', label: 'Pulse' },
  ];
}
