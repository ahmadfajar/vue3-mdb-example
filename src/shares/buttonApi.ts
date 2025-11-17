import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import {
  BsArrayStore,
  type TButtonColor,
  type TDataSource,
  type TRadioInputProps,
} from 'vue-mdbootstrap';

export function buttonColors(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'default', label: 'Default' },
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'success', label: 'Success' },
        { value: 'danger', label: 'Danger' },
        { value: 'warning', label: 'Warning' },
        { value: 'info', label: 'Info' },
        { value: 'dark', label: 'Dark' },
        { value: 'light', label: 'Light' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

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

export function toggleButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'tonal', label: 'Tonal' },
        { value: 'outlined', label: 'Outlined' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function fabButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'outlined', label: 'Outlined' },
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

export function iconFlips(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
        { value: 'both', label: 'Both' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function iconRotations(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: '90', label: '90 degree' },
        { value: '180', label: '180 degree' },
        { value: '270', label: '270 degree' },
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

export function changeButtonVariant(
  variantRef: Ref<string | undefined>,
  data?: string
): string | undefined {
  switch (variantRef.value) {
    case 'tonal':
    case 'outlined':
    case 'flat':
      return data?.replace('{$variants}', variantRef.value);
    default:
      return data;
  }
}

export function changeButtonColor(colorRef: Ref<TButtonColor>, data?: string): string | undefined {
  if (data && colorRef.value !== 'default') {
    return data.replace('{$colorName}', `color="${colorRef.value}"`);
  }

  return data;
}

export function changeButtonShape(
  shapeRef: Ref<string | undefined>,
  data?: string
): string | undefined {
  switch (shapeRef.value) {
    case 'rounded':
    case 'pill-off':
      return data?.replace('{$shapes}', shapeRef.value);
    default:
      return data;
  }
}

export function changeButtonSize(
  sizeRef: Ref<string | undefined>,
  data?: string
): string | undefined {
  switch (sizeRef.value) {
    case 'xs':
    case 'sm':
    case 'lg':
      return data?.replace('{$sizes}', `size="${sizeRef.value}"`);
    default:
      return data;
  }
}

export function changeButtonState(
  stateRef: Ref<string | undefined>,
  data?: string
): string | undefined {
  switch (stateRef.value) {
    case 'disabled':
    case 'readonly':
    case 'active':
      return data?.replace('{$states}', stateRef.value);
    default:
      return data;
  }
}

export function changeButtonElevated(elevatedRef: Ref<boolean>, data?: string): string | undefined {
  if (elevatedRef.value) {
    return data?.replace('{$raised}', 'raised');
  }

  return data;
}

export function changeIconAnimation(
  iconAnimation: Ref<string | undefined>,
  hasAnimation: boolean,
  data?: string
): string | undefined {
  if (hasAnimation && iconAnimation.value) {
    return data?.replace('{$iconAnimation}', `icon-${iconAnimation.value}`);
  }

  return data;
}
