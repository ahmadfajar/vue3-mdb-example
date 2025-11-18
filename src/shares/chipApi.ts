import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import {
  BsArrayStore,
  Helper,
  type TContextColorSecondary,
  type TDataSource,
} from 'vue-mdbootstrap';

export function chipSizes(): TDataSource {
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

export function changeChipAvatarShape(
  circle: Ref<boolean>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && circle.value) {
    return replaceAll
      ? data.replaceAll('{$avatarCircle}', 'img-circle')
      : data.replace('{$avatarCircle}', 'img-circle');
  }

  return data;
}

export function removeAvatarPadding(
  paddingOff: Ref<boolean>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && paddingOff.value) {
    return replaceAll
      ? data.replaceAll('{$avatarPadding}', 'img-padding-off')
      : data.replace('{$avatarPadding}', 'img-padding-off');
  }

  return data;
}
