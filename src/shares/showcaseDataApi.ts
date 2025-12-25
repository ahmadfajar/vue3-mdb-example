import { nextTick, type Ref, watch } from 'vue';
import { BsArrayStore, type TDataListSchema, type TDataSource } from 'vue-mdbootstrap';

export const schemaConfigDefinition: TDataListSchema = {
  displayField: 'label',
  valueField: 'value',
};

export function dsComponentStates(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'active', label: 'Active' },
        { value: 'readonly', label: 'Readonly' },
        { value: 'disabled', label: 'Disabled' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsComponentStatesRD(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'readonly', label: 'Readonly' },
        { value: 'disabled', label: 'Disabled' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsContextColors(excludes: string[] = []): TDataSource {
  const results = [
    { value: 'default', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'success', label: 'Success' },
    { value: 'danger', label: 'Danger' },
    { value: 'warning', label: 'Warning' },
    { value: 'info', label: 'Info' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ].filter((it) => !excludes.includes(it.value));

  return {
    proxy: new BsArrayStore(results, { idProperty: 'value' }),
    schema: schemaConfigDefinition,
  };
}

export function changeComponentColor(
  colorRef: Ref<string | undefined>,
  data: string,
  replaceAll?: boolean
): string {
  if (colorRef.value) {
    return replaceAll
      ? data.replaceAll('{$colorName}', `color="${colorRef.value}"`)
      : data.replace('{$colorName}', `color="${colorRef.value}"`);
  }

  return data;
}

export function changeComponentVariant(
  variantRef: Ref<string | undefined>,
  data: string,
  replaceAll?: boolean
): string {
  if (variantRef.value) {
    return replaceAll
      ? data.replaceAll('{$variants}', variantRef.value)
      : data.replace('{$variants}', variantRef.value);
  }

  return data;
}

declare type WatcherDefaultValue<T> = {
  refObj: Ref<T>;
  default: T;
};

export function useWatcherDefaultValue<T>(...args: WatcherDefaultValue<T>[]): void {
  for (const obj of args) {
    watch(obj.refObj, async (value) => {
      if (!value) {
        await nextTick(() => {
          obj.refObj.value = obj.default;
        });
      }
    });
  }
}

// prettier-ignore
export const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';
// prettier-ignore
export const rawDenimText = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
// prettier-ignore
export const foodTruckText = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
// prettier-ignore
export const etsyMixtapeText = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
