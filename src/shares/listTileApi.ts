import { stripAndBeautifyTemplate } from '@shares/sharedApi.ts';
import { schemaConfigDefinition, useWatcherDefaultValue } from '@shares/showcaseDataApi.ts';
import { computed, type ComputedRef, onBeforeUnmount, type Ref, watchEffect } from 'vue';
import {
  BsArrayStore,
  type TDataSource,
  type TListItemBorder,
  type TSpaceAround,
} from 'vue-mdbootstrap';

function dsSpaceAroundTypes(): TDataSource {
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

function dsItemBorderVariants(): TDataSource {
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

function dsItemStyles(): TDataSource {
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

function changeItemBorderVariant(
  variantRef: ComputedRef<TListItemBorder | undefined>,
  data: string
): string {
  if (variantRef.value) {
    return data.replace('{$border_variant}', `item-border-variant="${variantRef.value}"`);
  }

  return data;
}

function changeItemStyle(styleRef: Ref<string | undefined>, data: string): string {
  if (styleRef.value && styleRef.value !== 'none') {
    return data.replace('{$item_style}', `item-${styleRef.value}`);
  }

  return data;
}

function changeItemPadding(paddingRef: Ref<string | undefined>, data: string): string {
  if (paddingRef.value && paddingRef.value !== 'none') {
    return data.replace('{$space_around}', `space-around="${paddingRef.value}"`);
  }

  return data;
}

export function setupListViewNavigation(
  rawTpl: Ref<string | undefined>,
  vueTpl: Ref<string | undefined>,
  spaceAround: Ref<TSpaceAround>,
  borderVariant: Ref<string>,
  itemStyle: Ref<string>
) {
  const itemBorderVariant = computed<TListItemBorder | undefined>(() =>
    borderVariant.value === 'none' ? undefined : (borderVariant.value as TListItemBorder)
  );

  useWatcherDefaultValue(
    { refObj: spaceAround, default: 'none' },
    { refObj: borderVariant, default: 'none' },
    { refObj: itemStyle, default: 'none' }
  );

  watchEffect(() => {
    let rawCode: string | undefined;

    rawCode = changeItemBorderVariant(itemBorderVariant, rawTpl.value!);
    rawCode = changeItemStyle(itemStyle, rawCode);
    rawCode = changeItemPadding(spaceAround, rawCode);

    vueTpl.value = stripAndBeautifyTemplate(rawCode, false)
      ?.replace(/\s+(>)/g, '>')
      ?.replace(/(ListView)\s{2,}/g, 'ListView ');
  });

  const spaceAroundSrc = dsSpaceAroundTypes();
  const borderVariantSrc = dsItemBorderVariants();
  const itemStyleSrc = dsItemStyles();

  onBeforeUnmount(() => {
    spaceAroundSrc.proxy.destroy();
    borderVariantSrc.proxy.destroy();
    itemStyleSrc.proxy.destroy();
  });

  return { itemBorderVariant, spaceAroundSrc, borderVariantSrc, itemStyleSrc };
}
