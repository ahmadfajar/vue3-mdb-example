import type { Ref } from 'vue';
import type { TRadioInputProps } from 'vue-mdbootstrap';

export function cardImagePositions(): TRadioInputProps[] {
  return [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];
}

export function cardMediaPositions(): TRadioInputProps[] {
  return [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
  ];
}

export function changeCardStyles(
  backgroundRef: Ref<string | undefined>,
  borderRef: Ref<string | undefined>,
  data: string
): string {
  if (backgroundRef.value && borderRef.value) {
    return data.replace(
      '{$classes}',
      `class="text-bg-${backgroundRef.value} border border-${borderRef.value}"`
    );
  } else if (backgroundRef.value) {
    return data.replace('{$classes}', `class="text-bg-${backgroundRef.value}"`);
  } else if (borderRef.value) {
    return data.replace('{$classes}', `class="border border-${borderRef.value}"`);
  }

  return data;
}

export function enableCardShadow(enable: boolean, data: string): string {
  if (enable) {
    return data.replace('{$shadow}', 'shadow');
  }

  return data;
}

export function showCardHeader(show: boolean, data: string): string {
  if (show) {
    return data.replace('{$cardHeader}', '<BsCardHeader>Card Header</BsCardHeader>');
  }

  return data;
}

export function showCardFooter(show: boolean, data: string): string {
  if (show) {
    return data.replace('{$cardFooter}', '<BsCardFooter>Card Footer</BsCardFooter>');
  }

  return data;
}
