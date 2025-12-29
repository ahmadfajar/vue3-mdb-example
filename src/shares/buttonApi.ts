import { parseVueScriptTag, parseVueTemplateTag } from '@shares/sharedApi.ts';
import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import { type Ref } from 'vue';
import {
  BsArrayStore,
  type TButtonSize,
  type TDataSource,
  type TIconFlip,
  type TIconPosition,
  type TIconRotation,
  type TInputOptionItem,
  type TRadioInputProps,
} from 'vue-mdbootstrap';

export function dsButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'tonal', label: 'Tonal' },
        { value: 'outlined', label: 'Outlined' },
        { value: 'flat', label: 'Flat' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsToggleButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'tonal', label: 'Tonal' },
        { value: 'outlined', label: 'Outlined' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsFabButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'outlined', label: 'Outlined' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsButtonShapes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'pill', label: 'Pill (Default)' },
        { value: 'rounded', label: 'Rounded' },
        { value: 'pill-off', label: 'Rectangle' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsButtonSizes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'lg', label: 'Large' },
        { value: 'md', label: 'Medium (Default)' },
        { value: 'sm', label: 'Small' },
        { value: 'xs', label: 'Extra Small' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsIconFlips(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
        { value: 'both', label: 'Both' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsIconRotations(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: '90', label: '90 degree' },
        { value: '180', label: '180 degree' },
        { value: '270', label: '270 degree' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsFavoriteDrinks(): TInputOptionItem[] {
  return [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }] satisfies TInputOptionItem[];
}

export function dsFavoriteDrinksWithIcon(): TInputOptionItem[] {
  return [
    { value: 'Tea', icon: 'glass_cup' },
    { value: 'Coffee', icon: 'coffee' },
    { value: 'Beer', icon: 'liquor' },
  ] satisfies TInputOptionItem[];
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
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (variantRef.value) {
    case 'tonal':
    case 'outlined':
    case 'flat':
      return replaceAll
        ? data?.replaceAll('{$variants}', variantRef.value)
        : data?.replace('{$variants}', variantRef.value);
    default:
      return data;
  }
}

export function changeButtonShape(
  shapeRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (shapeRef.value) {
    case 'rounded':
    // case 'pill':
    case 'pill-off':
      return replaceAll
        ? data?.replaceAll('{$shapes}', shapeRef.value)
        : data?.replace('{$shapes}', shapeRef.value);
    default:
      return data;
  }
}

export function changeButtonSize(
  sizeRef: Ref<TButtonSize | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (sizeRef.value) {
    case 'xs':
    case 'sm':
    case 'lg':
      return replaceAll
        ? data?.replaceAll('{$sizes}', `size="${sizeRef.value}"`)
        : data?.replace('{$sizes}', `size="${sizeRef.value}"`);
    default:
      return data;
  }
}

export function changeButtonState(
  stateRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (stateRef.value) {
    case 'disabled':
    case 'readonly':
    case 'active':
      return replaceAll
        ? data?.replaceAll('{$states}', stateRef.value)
        : data?.replace('{$states}', stateRef.value);
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

export function changeButtonIconSize(
  iconSize: Ref<number>,
  btnSize: Ref<TButtonSize | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && iconSize.value) {
    switch (btnSize.value) {
      case 'xs':
      case 'sm':
      case 'lg':
        return replaceAll
          ? data.replaceAll('{$iconSize}', `icon-size="${iconSize.value}"`)
          : data.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
      default:
        return data;
    }
  }

  return data;
}

export function changeIconName(
  iconRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (iconRef.value && data) {
    return replaceAll
      ? data.replaceAll('{$icon}', `icon="${iconRef.value}"`)
      : data.replace('{$icon}', `icon="${iconRef.value}"`);
  }

  return data;
}

export function changeIconAnimation(
  iconAnimation: Ref<string | undefined>,
  hasAnimation: boolean,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (hasAnimation && iconAnimation.value) {
    return replaceAll
      ? data?.replaceAll('{$iconAnimation}', `icon-${iconAnimation.value}`)
      : data?.replace('{$iconAnimation}', `icon-${iconAnimation.value}`);
  }

  return data;
}

export function changeIconFlip(
  flipRef: Ref<TIconFlip | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (flipRef.value) {
    case 'horizontal':
    case 'vertical':
    case 'both':
      return replaceAll
        ? data?.replaceAll('{$iconFlip}', `icon-flip="${flipRef.value}"`)
        : data?.replace('{$iconFlip}', `icon-flip="${flipRef.value}"`);
    default:
      return data;
  }
}

export function changeIconRotation(
  rotationRef: Ref<TIconRotation | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (rotationRef.value) {
    case '90':
    case '180':
    case '270':
      return replaceAll
        ? data?.replaceAll('{$iconRotation}', `icon-rotation="${rotationRef.value}"`)
        : data?.replace('{$iconRotation}', `icon-rotation="${rotationRef.value}"`);
    default:
      return data;
  }
}

export function changeIconPosition(
  positionRef: Ref<TIconPosition | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  return positionRef.value === 'right'
    ? replaceAll
      ? data?.replaceAll('{$iconPosition}', `icon-position="right"`)
      : data?.replace('{$iconPosition}', `icon-position="right"`)
    : data;
}

export function parseExampleSourceCode(
  data: string,
  vueTpl: Ref<string | undefined>,
  vueTsc: Ref<string | undefined>
): void {
  vueTpl.value = parseVueTemplateTag(data);
  vueTsc.value = parseVueScriptTag(data);
}
