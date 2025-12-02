import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import { BsArrayStore, type TBadgeType, type TDataSource } from 'vue-mdbootstrap';

export function dsBadgeTypes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'pill', label: 'Pill' },
        { value: 'label', label: 'Label' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function changeBadgeTypes(
  typeRef: Ref<TBadgeType | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && typeRef.value) {
    return replaceAll
      ? data.replaceAll('{$shape_type}', `type="${typeRef.value}"`)
      : data.replace('{$shape_type}', `type="${typeRef.value}"`);
  }

  return data;
}

export function enableBadgeOutlined(
  outlined: boolean,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && outlined) {
    return replaceAll
      ? data.replaceAll('{$outlined}', 'outlined').replaceAll('"bg-', '"text-')
      : data.replace('{$outlined}', 'outlined').replace('"bg-', '"text-');
  }

  return data;
}
