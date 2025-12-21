import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import { BsArrayStore, type TDataSource } from 'vue-mdbootstrap';

export function dsProgressModes(type: string = 'bar'): TDataSource {
  const data = [
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'determinate', label: 'Determinate' },
  ];
  if (type === 'bar') {
    data.push({ value: 'buffer', label: 'Buffer' });
  }

  return {
    proxy: new BsArrayStore(data, { idProperty: 'value' }),
    schema: schemaConfigDefinition,
  };
}

export function dsProgressBarValuePosition(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'inside', label: 'Inside' },
        { value: 'start', label: 'Start' },
        { value: 'end', label: 'End' },
        { value: 'top', label: 'Top' },
        { value: 'bottom', label: 'Bottom' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsProgressBarLabelAlignment(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'start', label: 'Start' },
        { value: 'center', label: 'Center' },
        { value: 'end', label: 'End' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsProgressBarLabelPosition(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'top', label: 'Top' },
        { value: 'bottom', label: 'Bottom' },
        { value: 'start', label: 'Start' },
        { value: 'end', label: 'End' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsProgressBarVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'default', label: 'Default' },
        { value: 'striped', label: 'Stripes' },
        { value: 'striped-animation', label: 'Animated Stripes' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function changeProgressBuffer(mode: string, buffer: number, data: string): string {
  if (mode === 'buffer' && buffer > 0) {
    return data.replace('{$buffer}', `buffer="${buffer}"`);
  }

  return data;
}

export function changeProgressSpinnerDiameter(diameter: number, data: string): string {
  if (diameter > 0) {
    return data.replace('{$diameter}', `diameter="${diameter}"`);
  }

  return data;
}

export function changeProgressMode(mode: string, data: string): string {
  if (mode !== 'indeterminate') {
    return data.replace('{$mode}', `mode="${mode}"`);
  }

  return data;
}

export function changeProgressThickness(type: string, thickness: number, data: string): string {
  if (thickness > 0) {
    if (type === 'spinner') {
      return data.replace('{$stroke}', `stroke="${thickness}"`);
    } else {
      return data.replace('{$height}', `height="${thickness}"`);
    }
  }

  return data;
}

export function changeProgressValue(mode: string, value: number, data: string): string {
  if (mode !== 'indeterminate' && value >= 0) {
    return data.replace(':{$model_value}', `:model-value="${value}"`);
  }

  return data.replace(':{$model_value}', '');
}

export function changeProgressBarStripes(type: string, data: string): string {
  if (type === 'striped') {
    return data.replace('{$stripes}', 'striped');
  } else if (type === 'striped-animation') {
    return data.replace('{$stripes}', 'striped striped-animation');
  }

  return data;
}

export function changeProgressBarValuePosition(
  showValue: boolean,
  position: string,
  data: string
): string {
  if (showValue) {
    return data
      .replace('{$show_value}', 'show-value')
      .replace('{$value_position}', `value-position="${position}"`);
  }

  return data;
}

export function changeProgressBarLabel(text: string, data: string): string {
  return data.replace('{$label_text}', `label="${text}"`);
}

export function changeProgressBarLabelPosition(
  alignment: string,
  position: string,
  data: string
): string {
  return data
    .replace('{$label_alignment}', `label-alignment="${alignment}"`)
    .replace('{$label_position}', `label-position="${position}"`);
}
