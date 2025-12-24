import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import {
  BsArrayStore,
  Helper,
  type TActionButtonPlacement,
  type TActionButtonType,
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
