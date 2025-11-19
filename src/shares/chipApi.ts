import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import {
  BsArrayStore,
  Helper,
  type TChipOptionItem,
  type TContextColorSecondary,
  type TDataSource,
} from 'vue-mdbootstrap';

export function dsChipSizes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'lg', label: 'Large' },
        { value: 'md', label: 'Medium (Default)' },
        { value: 'sm', label: 'Small' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsChipDemoItems(include?: 'icon' | 'avatar'): TChipOptionItem[] {
  if (include === 'icon') {
    return [
      { text: 'Arts', icon: 'wall_art' },
      { text: 'Creative Writers', icon: 'article_person' },
      { text: 'Drawers', icon: 'bottom_drawer' },
      { text: 'Foods', icon: 'flatware' },
      { text: 'Home', icon: 'home' },
      { text: 'Shopping', icon: 'shopping_cart' },
      { text: 'Tech', icon: 'manufacturing' },
      { text: 'Vacation', icon: 'chair_umbrella' },
      { text: 'Work', icon: 'workspaces' },
    ];
  } else if (include === 'avatar') {
    return [
      { text: 'Arts', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
      { text: 'Creative Writers', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
      { text: 'Drawers', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
      { text: 'Foods', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
      { text: 'Home', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
      { text: 'Shopping', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
      { text: 'Tech', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
      { text: 'Vacation', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
      { text: 'Work', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
    ];
  } else {
    return [
      { text: 'Arts' },
      { text: 'Creative Writers' },
      { text: 'Drawers' },
      { text: 'Foods' },
      { text: 'Home' },
      { text: 'Shopping' },
      { text: 'Tech' },
      { text: 'Vacation' },
      { text: 'Work' },
    ];
  }
}

export function changeChipColor(
  colorRef: Ref<TContextColorSecondary>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && colorRef.value !== 'secondary') {
    if (replaceAll) {
      return data.replaceAll('{$colorName}', `color="${colorRef.value}"`);
    }

    return data.replace('{$colorName}', `color="${colorRef.value}"`);
  }

  return data;
}

export function changeChipActiveClass(
  cssClassRef: Ref<string | undefined>,
  data?: string
): string | undefined {
  if (data) {
    return data.replace(
      '{$activeClass}',
      !Helper.isEmpty(cssClassRef.value) ? `active-class="${cssClassRef.value}"` : ''
    );
  }

  return data;
}

export function changeChipAvatar(
  avatarRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  return replaceAll
    ? data?.replaceAll('{$avatar}', `img-src="${avatarRef.value}"`)
    : data?.replace('{$avatar}', `img-src="${avatarRef.value}"`);
}

export function enableRoundedChipAvatar(
  valueRef: Ref<boolean>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && valueRef.value) {
    return replaceAll
      ? data.replaceAll('{$avatarCircle}', 'img-circle')
      : data.replace('{$avatarCircle}', 'img-circle');
  }

  return data;
}

export function enableChipGroupMultiRows(
  valueRef: Ref<boolean>,
  data?: string
): string | undefined {
  if (valueRef.value) {
    return data?.replace('{$column}', 'column');
  }

  return data;
}

export function enableChipGroupFilters(value: boolean, data?: string): string | undefined {
  if (value) {
    return data?.replace('{$checkedIcon}', 'checked-icon');
  }

  return data;
}

export function enableChipGroupSliders(value: boolean, data?: string): string | undefined {
  if (value) {
    return data?.replace('{$sliderButton}', 'slider-button');
  }

  return data;
}

export function removeAvatarPadding(
  valueRef: Ref<boolean>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && valueRef.value) {
    return replaceAll
      ? data.replaceAll('{$avatarPadding}', 'img-padding-off')
      : data.replace('{$avatarPadding}', 'img-padding-off');
  }

  return data;
}
