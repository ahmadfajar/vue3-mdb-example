import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import {
  BsArrayStore,
  type TAlertVariant,
  type TDataSource,
  type TIconVariant,
} from 'vue-mdbootstrap';

export function dsAlertContextual(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'success', label: 'Success' },
        { value: 'info', label: 'Info' },
        { value: 'warning', label: 'Warning' },
        { value: 'danger', label: 'Danger' },
        { value: 'help', label: 'Help' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsAlertVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Solid' },
        { value: 'outlined', label: 'Outlined' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsIconVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'outlined', label: 'Outlined (default)' },
        { value: 'filled', label: 'Filled' },
        { value: 'rounded', label: 'Rounded' },
        { value: 'sharp', label: 'Sharp' },
        { value: 'rounded_filled', label: 'Rounded Filled' },
        { value: 'sharp_filled', label: 'Sharp Filled' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function changeAlertContext(
  variantRef: Ref<TAlertVariant | undefined>,
  data?: string
): string | undefined {
  if (variantRef.value) {
    return data?.replace('{$alertVariant}', `variant="${variantRef.value}"`);
  }

  return data;
}

export function changeIconVariant(
  variantRef: Ref<TIconVariant | undefined>,
  data?: string
): string | undefined {
  if (variantRef.value && variantRef.value !== 'outlined') {
    return data?.replace('{$iconVariant}', `icon-variant="${variantRef.value}"`);
  }

  return data;
}

export function enableAlertDismissible(dismissible: boolean, data?: string): string | undefined {
  if (dismissible) {
    return data?.replace('{$dismissible}', 'dismissible');
  }

  return data;
}
