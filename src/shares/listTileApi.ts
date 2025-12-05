import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { ComputedRef, Ref } from 'vue';
import { BsArrayStore, type TDataSource, type TListItemBorder } from 'vue-mdbootstrap';

export function dsSpaceAroundTypes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'None', value: 'none' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Both', value: 'both' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsItemBorderVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'None', value: 'none' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Left & Right', value: 'left-right' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Top & Bottom', value: 'top-bottom' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsItemStyles(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'None', value: 'none' },
        { label: 'Rounded', value: 'rounded' },
        { label: 'Rounded Pill', value: 'rounded-pill' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function changeItemBorderVariant(
  variantRef: ComputedRef<TListItemBorder | undefined>,
  data: string
): string {
  if (variantRef.value) {
    return data.replace('{$border_variant}', `item-border-variant="${variantRef.value}"`);
  }

  return data;
}

export function changeItemStyle(styleRef: Ref<string | undefined>, data: string): string {
  if (styleRef.value && styleRef.value !== 'none') {
    return data.replace('{$item_style}', `item-${styleRef.value}`);
  }

  return data;
}

export function changeItemPadding(paddingRef: Ref<string | undefined>, data: string): string {
  if (paddingRef.value && paddingRef.value !== 'none') {
    return data.replace('{$space_around}', `space-around="${paddingRef.value}"`);
  }

  return data;
}
