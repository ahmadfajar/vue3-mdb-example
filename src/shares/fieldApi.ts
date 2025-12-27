import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import {
  BsArrayStore,
  BsStore,
  Helper,
  type TActionButtonPlacement,
  type TActionButtonType,
  type TCheckboxPosition,
  type TContextColor,
  type TDataListSchema,
  type TDataSource,
  type TDateTimePickerMode,
} from 'vue-mdbootstrap';

export function dsDateFieldModes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'date', label: 'Date' },
        { value: 'datetime', label: 'DateTime' },
        { value: 'month', label: 'Month' },
        { value: 'year', label: 'Year' },
        { value: 'time', label: 'Time' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsFieldStyleVariants(excludes: string[] = []): TDataSource {
  const variants = [
    { value: 'default', label: 'Default' },
    { value: 'filled', label: 'Filled' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'filled rounded', label: 'Rounded Filled' },
    { value: 'outlined rounded', label: 'Rounded Outlined' },
  ].filter((it) => !excludes.includes(it.value));

  return {
    proxy: new BsArrayStore(variants, { idProperty: 'value' }),
    schema: schemaConfigDefinition,
  };
}

export function dsFieldIconPlacements(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'append-icon', label: 'Append' },
        { value: 'append-icon-outer', label: 'Append Outer' },
        { value: 'prepend-icon', label: 'Prepend' },
        { value: 'prepend-icon-outer', label: 'Prepend Outer' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsNumericFieldButtonActions(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'up-down', label: 'Up-Down' },
        { value: 'plus-minus', label: 'Plus-Minus' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsNumericFieldButtonPlacements(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'left', label: 'Left' },
        { value: 'right', label: 'Right' },
        { value: 'both', label: 'Both' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsListboxCheckboxPositions(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'left', label: 'Left' },
        { value: 'right', label: 'Right' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsListboxImageShapes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'circle-image', label: 'Circle' },
        { value: 'rounded-image', label: 'Rounded' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsPeopleSrc(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        {
          id: 1,
          name: 'Sandra Adams',
          avatar: 'https://ahmadfajar.github.io/img/1.jpg',
        },
        {
          id: 2,
          name: 'Ali Connors',
          avatar: 'https://ahmadfajar.github.io/img/2.jpg',
        },
        {
          id: 3,
          name: 'Trevor Hansen',
          avatar: 'https://ahmadfajar.github.io/img/3.jpg',
        },
        {
          id: 4,
          name: 'Tucker Smith',
          avatar: 'https://ahmadfajar.github.io/img/4.jpg',
        },
        {
          id: 5,
          name: 'Britta Holt',
          avatar: 'https://ahmadfajar.github.io/img/5.jpg',
        },
        {
          id: 6,
          name: 'Jane Smith',
          avatar: 'https://ahmadfajar.github.io/img/3.jpg',
        },
        {
          id: 7,
          name: 'John Smith',
          avatar: 'https://ahmadfajar.github.io/img/2.jpg',
        },
        {
          id: 8,
          name: 'Sandra Williams',
          avatar: 'https://ahmadfajar.github.io/img/4.jpg',
        },
      ],
      { idProperty: 'id' }
    ),
    schema: { displayField: 'name', valueField: 'id', imageField: 'avatar' } as TDataListSchema,
  };
}

export function dsCountrySrc(): TDataSource {
  return {
    proxy: new BsStore({
      idProperty: 'value',
      dataProperty: 'data',
      totalProperty: 'total',
      remoteSort: false,
      remoteFilter: false,
      restProxy: {
        browse: 'https://ahmadfajar.github.io/data/states.json',
      },
    }),
  };
}

export function changeFieldIcon(
  placement: string,
  iconName: string | undefined,
  data: string,
  replaceAll?: boolean
): string {
  if (!Helper.isEmpty(iconName)) {
    return replaceAll
      ? data.replaceAll('{$icon_placement}', `${placement}="${iconName}"`)
      : data.replace('{$icon_placement}', `${placement}="${iconName}"`);
  }

  return data;
}

export function changeFieldPlaceholder(
  text: string | undefined,
  data: string,
  replaceAll?: boolean
): string {
  if (!Helper.isEmpty(text)) {
    return replaceAll
      ? data.replaceAll('{$placeholder}', `placeholder="${text}"`)
      : data.replace('{$placeholder}', `placeholder="${text}"`);
  }

  return data;
}

export function changeFieldHelpText(
  text: string | undefined,
  data: string,
  replaceAll?: boolean
): string {
  if (!Helper.isEmpty(text)) {
    return replaceAll
      ? data.replaceAll('{$help_text}', `help-text="${text}"`)
      : data.replace('{$help_text}', `help-text="${text}"`);
  }

  return data;
}

export function disableFieldPersistentHelpText(
  state: boolean,
  data: string,
  replaceAll?: boolean
): string {
  if (state) {
    return replaceAll
      ? data.replaceAll('{$persistent_help_off}', 'persistent-help-off')
      : data.replace('{$persistent_help_off}', 'persistent-help-off');
  }

  return data;
}

export function enableFieldClearable(state: boolean, data: string, replaceAll?: boolean): string {
  if (state) {
    return replaceAll
      ? data.replaceAll('{$clear_button}', 'clear-button')
      : data.replace('{$clear_button}', 'clear-button');
  }

  return data;
}

export function changeNumericFieldButton(
  type: TActionButtonType,
  data: string,
  replaceAll?: boolean
): string {
  if (type !== 'up-down') {
    return replaceAll
      ? data.replaceAll('{$button_action}', `action-button="${type}"`)
      : data.replace('{$button_action}', `action-button="${type}"`);
  }

  return data;
}

export function changeNumericFieldButtonPlacement(
  placement: TActionButtonPlacement,
  data: string,
  replaceAll?: boolean
): string {
  if (placement !== 'right') {
    return replaceAll
      ? data.replaceAll('{$button_placement}', `action-button-placement="${placement}"`)
      : data.replace('{$button_placement}', `action-button-placement="${placement}"`);
  }

  return data;
}

export function changeTextAreaRows(rows: number, data: string, replaceAll?: boolean): string {
  if (rows > 2) {
    return replaceAll
      ? data.replaceAll('{$display_rows}', `rows="${rows}"`)
      : data.replace('{$display_rows}', `rows="${rows}"`);
  }

  return data;
}

export function disableTextAreaResizeHandle(
  state: boolean,
  data: string,
  replaceAll?: boolean
): string {
  if (state) {
    return replaceAll
      ? data.replaceAll('{$no_resize}', 'no-resize')
      : data.replace('{$no_resize}', 'no-resize');
  }

  return data;
}

export function enableTextAreaAutoGrow(state: boolean, data: string, replaceAll?: boolean): string {
  if (state) {
    return replaceAll
      ? data.replaceAll('{$auto_grow}', 'auto-grow')
      : data.replace('{$auto_grow}', 'auto-grow');
  }

  return data;
}

export function changeFieldChipColor(
  color: TContextColor,
  data: string,
  replaceAll?: boolean
): string {
  if (color && color !== 'secondary') {
    return replaceAll
      ? data.replaceAll('{$chip_color}', `chip-color="${color}"`)
      : data.replace('{$chip_color}', `chip-color="${color}"`);
  }

  return data;
}

export function enableFieldChipDeletable(
  value: boolean,
  data: string,
  replaceAll?: boolean
): string {
  if (value) {
    return replaceAll
      ? data.replaceAll('{$chip_deletable}', 'chip-deletable')
      : data.replace('{$chip_deletable}', 'chip-deletable');
  }

  return data;
}

export function enableFieldChipOutlined(
  value: boolean,
  data: string,
  replaceAll?: boolean
): string {
  if (value) {
    return replaceAll
      ? data.replaceAll('{$chip_outlined}', 'chip-outlined')
      : data.replace('{$chip_outlined}', 'chip-outlined');
  }

  return data;
}

export function enableFieldChipRoundedPill(
  value: boolean,
  data: string,
  replaceAll?: boolean
): string {
  if (value) {
    return replaceAll
      ? data.replaceAll('{$chip_pill}', 'chip-pill')
      : data.replace('{$chip_pill}', 'chip-pill');
  }

  return data;
}

export function changeDateFieldPickerMode(
  mode: TDateTimePickerMode,
  data: string,
  replaceAll?: boolean
): string {
  let temp = data;

  if (mode) {
    temp = replaceAll
      ? data.replaceAll('{$picker_mode}', `picker-mode="${mode}"`)
      : data.replace('{$picker_mode}', `picker-mode="${mode}"`);
  }

  if (mode === 'datetime') {
    temp = replaceAll
      ? temp.replaceAll('{$display_format}', 'display-format="DDD HH:mm:ss"')
      : temp.replace('{$display_format}', 'display-format="DDD HH:mm:ss"');
    temp = replaceAll
      ? temp.replaceAll('{$value_format}', 'value-format="yyyy-MM-dd HH:mm:ss"')
      : temp.replace('{$value_format}', 'value-format="yyyy-MM-dd HH:mm:ss"');
  } else if (mode === 'month') {
    temp = replaceAll
      ? temp.replaceAll('{$display_format}', 'display-format="MMMM yyyy"')
      : temp.replace('{$display_format}', 'display-format="MMMM yyyy"');
    temp = replaceAll
      ? temp.replaceAll('{$value_format}', 'value-format="yyyy-MM"')
      : temp.replace('{$value_format}', 'value-format="yyyy-MM"');
  } else if (mode === 'year') {
    temp = replaceAll
      ? temp.replaceAll('{$value_format}', 'value-format="yyyy"')
      : temp.replace('{$value_format}', 'value-format="yyyy"');
  } else if (mode === 'time') {
    temp = replaceAll
      ? temp.replaceAll('{$value_format}', 'value-format="HH:mm:ss"')
      : temp.replace('{$value_format}', 'value-format="HH:mm:ss"');
  } else if (mode === 'date') {
    temp = replaceAll
      ? temp.replaceAll('{$display_format}', 'display-format="DDD"')
      : temp.replace('{$display_format}', 'display-format="DDD"');
    temp = replaceAll
      ? temp.replaceAll('{$value_format}', 'value-format="yyyy-MM-dd"')
      : temp.replace('{$value_format}', 'value-format="yyyy-MM-dd"');
  }

  return temp;
}

export function enableDateFieldLandscapeMode(
  value: boolean,
  data: string,
  replaceAll?: boolean
): string {
  if (value) {
    return replaceAll
      ? data.replaceAll('{$landscape_mode}', 'landscape-mode')
      : data.replace('{$landscape_mode}', 'landscape-mode');
  }

  return data;
}

export function enableComboboxChipMode(value: boolean, data: string, replaceAll?: boolean): string {
  if (value) {
    return replaceAll
      ? data.replaceAll('{$chip_enabled}', 'chip-enabled')
      : data.replace('{$chip_enabled}', 'chip-enabled');
  }

  return data;
}

export function changeComboboxSelectionMode(
  multiple: boolean,
  data: string,
  script: boolean,
  replaceAll?: boolean
): string {
  if (multiple) {
    if (script) {
      let temp = data.replaceAll('ref<string>()', 'ref<string[]>([])');
      temp = temp.replaceAll("value: 'CA',", "value: 'US',");

      return temp;
    } else {
      return replaceAll
        ? data.replaceAll('{$multiple}', 'multiple')
        : data.replace('{$multiple}', 'multiple');
    }
  }

  return data;
}

export function changeListboxImageShape(shape: string, data: string, replaceAll?: boolean): string {
  if (shape) {
    return replaceAll
      ? data.replaceAll('{$image_shape}', `${shape}`)
      : data.replaceAll('{$image_shape}', `${shape}`);
  }

  return data;
}

export function changeListboxImageSize(size: number, data: string, replaceAll?: boolean): string {
  if (size !== 48) {
    return replaceAll
      ? data.replaceAll('{$image_size}', `image-size="${size}"`)
      : data.replaceAll('{$image_size}', `image-size="${size}"`);
  }

  return data;
}

export function changeListboxSelectionMode(
  multiple: boolean,
  data: string,
  script: boolean,
  replaceAll?: boolean
): string {
  if (multiple) {
    if (script) {
      return data.replaceAll('ref<string>()', 'ref<string[]>([])');
    } else {
      const temp = replaceAll
        ? data.replaceAll(' value:', ' values:')
        : data.replace(' value:', ' values:');

      return replaceAll
        ? temp.replaceAll('{$multiple}', 'multiple')
        : temp.replace('{$multiple}', 'multiple');
    }
  }

  return data;
}

export function changeListboxCheckboxColor(
  color: TContextColor,
  data: string,
  replaceAll?: boolean
): string {
  if (color !== 'default') {
    return replaceAll
      ? data.replaceAll('{$checkbox_color}', `checkbox-color="${color}"`)
      : data.replace('{$checkbox_color}', `checkbox-color="${color}"`);
  }

  return data;
}

export function changeListboxCheckboxPosition(
  position: TCheckboxPosition,
  data: string,
  replaceAll?: boolean
): string {
  if (position !== 'left') {
    return replaceAll
      ? data.replaceAll('{$checkbox_position}', `checkbox-position="${position}"`)
      : data.replace('{$checkbox_position}', `checkbox-position="${position}"`);
  }

  return data;
}

export function enableListboxCheckbox(value: boolean, data: string, replaceAll?: boolean): string {
  if (value) {
    return replaceAll
      ? data.replaceAll('{$checkbox_enabled}', 'use-checkbox')
      : data.replace('{$checkbox_enabled}', 'use-checkbox');
  }

  return data;
}
