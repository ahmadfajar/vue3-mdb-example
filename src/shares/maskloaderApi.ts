import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import type { Ref } from 'vue';
import { BsArrayStore, type TDataSource } from 'vue-mdbootstrap';

export function dsMaskLoaderTypes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { label: 'Linear', value: 'linear' },
        { label: 'Linear-Alt', value: 'linear-alt' },
        { label: 'Spinner', value: 'spinner' },
        { label: 'Growing Blink', value: 'grow' },
      ],
      {
        idProperty: 'value',
      }
    ),
    schema: schemaConfigDefinition,
  };
}

export function changeMaskLoaderType(typeRef: Ref<string | undefined>, data: string): string {
  if (typeRef.value) {
    const tmp = data.replace('{$types}', `type="${typeRef.value}"`);
    const name = dsMaskLoaderTypes().proxy.find('value', typeRef.value)?.label || 'Linear';
    return tmp.replace('{$types_name}', name as string);
  }

  return data;
}

export function changeMaskLoaderSizeAndColor(
  typeRef: Ref<string | undefined>,
  data: string
): string {
  if (typeRef.value) {
    let tmp = data;
    if (['linear', 'linear-alt'].includes(typeRef.value)) {
      tmp = data.replace('{$spinner_thickness}', `spinner-thickness="8"`);
    }

    if (typeRef.value === 'linear-alt') {
      tmp = tmp.replace('{$spinner_color}', 'spinner-color="danger"');
    } else {
      tmp = tmp.replace('{$spinner_color}', 'spinner-color="text-danger"');
    }

    return tmp;
  }

  return data;
}
