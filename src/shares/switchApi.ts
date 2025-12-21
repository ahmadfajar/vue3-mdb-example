import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import { BsArrayStore, type TDataSource } from 'vue-mdbootstrap';

export function dsSwitchVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'default', label: 'Default' },
        { value: 'inset', label: 'Inset' },
        { value: 'inset-outlined', label: 'Inset Outlined' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function enableSwitchThumbIcon(
  thumbIcon: Ref<boolean>,
  variant: Ref<string>,
  data: string
): string {
  if (variant.value !== 'default' && thumbIcon.value) {
    return data.replace('{$checked_icon}', 'checked-icon checkoff-icon');
  }

  return data;
}
