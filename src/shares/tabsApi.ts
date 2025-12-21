import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import {
  BsArrayStore,
  type TAlignment,
  type TDataSource,
  type TPlacementPosition,
  type TTabsVariant,
} from 'vue-mdbootstrap';

export function dsTabVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'Bootstrap Tabs', value: 'tabs' },
        { label: 'Bootstrap Pills', value: 'pills' },
        { label: 'Material', value: 'material' },
        { label: 'Modern', value: 'modern' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsTabAlignments(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
        { label: 'Justified', value: 'justified' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsTabPositions(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsTabIconAndLabel(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'Show Both', value: 'both' },
        { label: 'Label Only', value: 'label' },
        { label: 'Icon Only', value: 'icon' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function changeTabsVariant(
  variantRef: Ref<TTabsVariant | undefined>,
  data?: string
): string | undefined {
  if (data && variantRef.value && variantRef.value !== 'tabs') {
    return data.replace('{$tabs_variant}', `variant="${variantRef.value}"`);
  }

  return data;
}

export function changeTabsAlignment(
  alignmentRef: Ref<TAlignment | undefined>,
  data?: string
): string | undefined {
  if (data && alignmentRef.value && alignmentRef.value !== 'start') {
    return data.replace('{$tabs_alignment}', `alignment="${alignmentRef.value}"`);
  }

  return data;
}

export function changeTabsPosition(
  positionRef: Ref<TPlacementPosition | undefined>,
  variantRef: Ref<TTabsVariant>,
  data?: string
): string | undefined {
  if (data && positionRef.value) {
    let temp = data.replace('{$tabs_position}', `tab-position="${positionRef.value}"`);
    if (['left', 'right'].includes(positionRef.value)) {
      temp = temp.replace('{$content_class}', 'content-class="flex-grow"');
    }
    if (positionRef.value === 'top' && ['tabs', 'pills'].includes(variantRef.value)) {
      temp = temp.replace('{$inner_class}', 'inner-class="md-card-header"');
    } else if (positionRef.value === 'bottom' && ['tabs', 'pills'].includes(variantRef.value)) {
      temp = temp.replace('{$inner_class}', 'inner-class="md-card-footer"');
    }

    return temp;
  }

  return data;
}

export function changeTabsIconPosition(
  positionRef: Ref<TPlacementPosition | undefined>,
  data?: string
): string | undefined {
  if (data && positionRef.value && positionRef.value !== 'left') {
    return data.replace('{$icon_position}', `icon-position="${positionRef.value}"`);
  }

  return data;
}

export function changeTabIconLabel(
  valueRef: Ref<string | undefined>,
  data?: string
): string | undefined {
  let tmp;

  if (valueRef.value === 'icon') {
    tmp = data?.replace('{$tab_icon1}', 'icon="home_rounded"');
    tmp = tmp?.replace('{$tab_icon2}', 'icon="person"');
    tmp = tmp?.replace('{$tab_icon3}', 'icon="text_snippet"');
  } else if (valueRef.value === 'label') {
    tmp = data?.replace('{$tab_label1}', 'label="Home"');
    tmp = tmp?.replace('{$tab_label2}', 'label="Profile"');
    tmp = tmp?.replace('{$tab_label3}', 'label="Story"');
  } else {
    tmp = data?.replace('{$tab_icon1}', 'icon="home_rounded"');
    tmp = tmp?.replace('{$tab_icon2}', 'icon="person"');
    tmp = tmp?.replace('{$tab_icon3}', 'icon="text_snippet"');
    tmp = tmp?.replace('{$tab_label1}', 'label="Home"');
    tmp = tmp?.replace('{$tab_label2}', 'label="Profile"');
    tmp = tmp?.replace('{$tab_label3}', 'label="Story"');
  }

  return tmp;
}
