import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import { BsArrayStore, Helper, type TDataSource } from 'vue-mdbootstrap';

export function dsAvatarShapes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'rounded', label: 'Rounded' },
        { value: 'circle', label: 'Circle' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function changeAvatarBorderColor(
  colorRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && !Helper.isEmpty(colorRef.value)) {
    return replaceAll
      ? data.replaceAll('{$border_color}', `border-color="${colorRef.value}"`)
      : data.replace('{$border_color}', `border-color="${colorRef.value}"`);
  }

  return data;
}

export function changeAvatarBorderThickness(
  borderRef: Ref<number | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && !Helper.isEmpty(borderRef.value)) {
    return replaceAll
      ? data.replaceAll('{$border}', `border="${borderRef.value}"`)
      : data.replace('{$border}', `border="${borderRef.value}"`);
  }

  return data;
}

export function changeAvatarFontSize(
  sizeRef: Ref<number | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && !Helper.isEmpty(sizeRef.value) && sizeRef.value !== 100) {
    return replaceAll
      ? data.replaceAll('{$font_size}', `style="font-size: ${sizeRef.value}%"`)
      : data.replace('{$font_size}', `style="font-size: ${sizeRef.value}%"`);
  }

  return data;
}

export function changeAvatarShape(
  shapeRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && shapeRef.value) {
    return replaceAll
      ? data.replaceAll('{$shapes}', shapeRef.value)
      : data.replace('{$shapes}', shapeRef.value);
  }

  return data;
}

export function changeAvatarSize(
  sizeRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && !Helper.isEmpty(sizeRef.value)) {
    return replaceAll
      ? data.replaceAll('{$sizes}', `size="${sizeRef.value}"`)
      : data.replace('{$sizes}', `size="${sizeRef.value}"`);
  }

  return data;
}
