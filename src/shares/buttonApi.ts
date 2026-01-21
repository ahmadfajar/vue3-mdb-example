import { changeFieldHelpText, disableFieldPersistentHelpText } from '@shares/fieldApi.ts';
import {
  parseVueScriptTag,
  parseVueTemplateTag,
  stripAndBeautifyTemplate,
} from '@shares/sharedApi.ts';
import {
  changeComponentColor,
  dsComponentStatesRD,
  dsContextColors,
  schemaConfigDefinition,
  useWatcherDefaultValue,
} from '@shares/showcaseDataApi.ts';
import { nextTick, onBeforeUnmount, ref, type Ref, watch, watchEffect } from 'vue';
import {
  BsArrayStore,
  type TButtonColor,
  type TButtonSize,
  type TDataSource,
  type TIconFlip,
  type TIconPosition,
  type TIconRotation,
  type TInputOptionItem,
  type TRadioInputProps,
} from 'vue-mdbootstrap';

export function dsButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'tonal', label: 'Tonal' },
        { value: 'outlined', label: 'Outlined' },
        { value: 'flat', label: 'Flat' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsToggleButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'tonal', label: 'Tonal' },
        { value: 'outlined', label: 'Outlined' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsFabButtonVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'filled', label: 'Filled (Default)' },
        { value: 'outlined', label: 'Outlined' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsButtonShapes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'pill', label: 'Pill (Default)' },
        { value: 'rounded', label: 'Rounded' },
        { value: 'pill-off', label: 'Rectangle' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsButtonSizes(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'lg', label: 'Large' },
        { value: 'md', label: 'Medium (Default)' },
        { value: 'sm', label: 'Small' },
        { value: 'xs', label: 'Extra Small' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsIconFlips(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
        { value: 'both', label: 'Both' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsIconRotations(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: '90', label: '90 degree' },
        { value: '180', label: '180 degree' },
        { value: '270', label: '270 degree' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsFavoriteDrinks(): TInputOptionItem[] {
  return [{ value: 'Tea' }, { value: 'Coffee' }, { value: 'Beer' }] satisfies TInputOptionItem[];
}

export function dsFavoriteDrinksWithIcon(): TInputOptionItem[] {
  return [
    { value: 'Tea', icon: 'glass_cup' },
    { value: 'Coffee', icon: 'coffee' },
    { value: 'Beer', icon: 'liquor' },
  ] satisfies TInputOptionItem[];
}

export function buttonIconPositions(): TRadioInputProps[] {
  return [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];
}

export function iconAnimationVariants(): TRadioInputProps[] {
  return [
    { value: 'spin', label: 'Spin' },
    { value: 'pulse', label: 'Pulse' },
  ];
}

export function changeButtonVariant(
  variantRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (variantRef.value) {
    case 'tonal':
    case 'outlined':
    case 'flat':
      return replaceAll
        ? data?.replaceAll('{$variants}', variantRef.value)
        : data?.replace('{$variants}', variantRef.value);
    default:
      return data;
  }
}

export function changeButtonShape(
  shapeRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (shapeRef.value) {
    case 'rounded':
    // case 'pill':
    case 'pill-off':
      return replaceAll
        ? data?.replaceAll('{$shapes}', shapeRef.value)
        : data?.replace('{$shapes}', shapeRef.value);
    default:
      return data;
  }
}

export function changeButtonSize(
  sizeRef: Ref<TButtonSize | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (sizeRef.value) {
    case 'xs':
    case 'sm':
    case 'lg':
      return replaceAll
        ? data?.replaceAll('{$sizes}', `size="${sizeRef.value}"`)
        : data?.replace('{$sizes}', `size="${sizeRef.value}"`);
    default:
      return data;
  }
}

export function changeButtonState(
  stateRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (stateRef.value) {
    case 'disabled':
    case 'readonly':
    case 'active':
      return replaceAll
        ? data?.replaceAll('{$states}', stateRef.value)
        : data?.replace('{$states}', stateRef.value);
    default:
      return data;
  }
}

export function changeButtonElevated(elevatedRef: Ref<boolean>, data?: string): string | undefined {
  if (elevatedRef.value) {
    return data?.replace('{$raised}', 'raised');
  }

  return data;
}

export function changeButtonIconSize(
  iconSize: Ref<number>,
  btnSize: Ref<TButtonSize | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (data && iconSize.value) {
    switch (btnSize.value) {
      case 'xs':
      case 'sm':
      case 'lg':
        return replaceAll
          ? data.replaceAll('{$iconSize}', `icon-size="${iconSize.value}"`)
          : data.replace('{$iconSize}', `icon-size="${iconSize.value}"`);
      default:
        return data;
    }
  }

  return data;
}

export function changeIconName(
  iconRef: Ref<string | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (iconRef.value && data) {
    return replaceAll
      ? data.replaceAll('{$icon}', `icon="${iconRef.value}"`)
      : data.replace('{$icon}', `icon="${iconRef.value}"`);
  }

  return data;
}

export function changeIconAnimation(
  iconAnimation: Ref<string | undefined>,
  hasAnimation: boolean,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  if (hasAnimation && iconAnimation.value) {
    return replaceAll
      ? data?.replaceAll('{$iconAnimation}', `icon-${iconAnimation.value}`)
      : data?.replace('{$iconAnimation}', `icon-${iconAnimation.value}`);
  }

  return data;
}

export function changeIconFlip(
  flipRef: Ref<TIconFlip | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (flipRef.value) {
    case 'horizontal':
    case 'vertical':
    case 'both':
      return replaceAll
        ? data?.replaceAll('{$iconFlip}', `icon-flip="${flipRef.value}"`)
        : data?.replace('{$iconFlip}', `icon-flip="${flipRef.value}"`);
    default:
      return data;
  }
}

export function changeIconRotation(
  rotationRef: Ref<TIconRotation | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  switch (rotationRef.value) {
    case '90':
    case '180':
    case '270':
      return replaceAll
        ? data?.replaceAll('{$iconRotation}', `icon-rotation="${rotationRef.value}"`)
        : data?.replace('{$iconRotation}', `icon-rotation="${rotationRef.value}"`);
    default:
      return data;
  }
}

export function changeIconPosition(
  positionRef: Ref<TIconPosition | undefined>,
  data?: string,
  replaceAll?: boolean
): string | undefined {
  return positionRef.value === 'right'
    ? replaceAll
      ? data?.replaceAll('{$iconPosition}', `icon-position="right"`)
      : data?.replace('{$iconPosition}', `icon-position="right"`)
    : data;
}

export function parseExampleSourceCode(
  data: string,
  vueTpl: Ref<string | undefined>,
  vueTsc: Ref<string | undefined>
): void {
  vueTpl.value = parseVueTemplateTag(data);
  vueTsc.value = parseVueScriptTag(data);
}

declare type ToggleButtonOverviewResult = {
  fmtVueTpl: Ref<string | undefined>;
  fmtVueTsc: Ref<string | undefined>;
  btnVariant: Ref<string | undefined>;
  btnShape: Ref<string | undefined>;
  btnColor: Ref<TButtonColor | undefined>;
  btnSize: Ref<string | undefined>;
  btnState: Ref<string | undefined>;
  btnElevated: Ref<boolean>;
  showIcon: Ref<boolean>;
  iconPosition: Ref<TIconPosition>;
  iconSize: Ref<number>;
  helpText: Ref<string | undefined>;
  showHelpText: Ref<boolean>;
  disablePersistentHelpText: Ref<boolean>;
  drinkSrc2Ref: Ref<TInputOptionItem[]>;
  btnVariantSrc: TDataSource;
  btnShapeSrc: TDataSource;
  btnColorSrc: TDataSource;
  btnSizeSrc: TDataSource;
  btnStateSrc: TDataSource;
};

export function setupToggleButtonOverview(
  page: 'ToggleButton' | 'ToggleField',
  example1: string,
  example2: string
): ToggleButtonOverviewResult {
  const fmtVueTpl = ref<string>();
  const fmtVueTsc = ref<string>();
  const rawTemplate = ref<string>();
  const btnVariant = ref<string | undefined>('filled');
  const btnShape = ref<string | undefined>('pill');
  const btnColor = ref<TButtonColor>('default');
  const btnSize = ref<string | undefined>('md');
  const btnState = ref<string>();
  const btnElevated = ref(false);
  const showIcon = ref(false);
  const iconPosition = ref<TIconPosition>('left');
  const iconSize = ref(24);
  const drinkSrc2Ref = ref<TInputOptionItem[]>([]);
  const drinkSrc2 = dsFavoriteDrinksWithIcon();
  const helpText = ref<string>('Select one of the options above as your favorite drink');
  const showHelpText = ref(false);
  const disablePersistentHelpText = ref(false);

  if (page === 'ToggleField') {
    useWatcherDefaultValue(
      { refObj: btnVariant, default: 'filled' },
      { refObj: btnShape, default: 'pill' },
      { refObj: btnColor, default: 'default' },
      { refObj: iconPosition, default: 'left' }
    );
  } else {
    useWatcherDefaultValue(
      { refObj: btnVariant, default: 'filled' },
      { refObj: btnShape, default: 'pill' },
      { refObj: btnColor, default: 'default' }
    );
  }

  watch(showIcon, (value) => {
    if (value) {
      parseExampleSourceCode(example2, rawTemplate, fmtVueTsc);
    } else {
      parseExampleSourceCode(example1, rawTemplate, fmtVueTsc);
    }
  });

  watch(btnSize, async (value) => {
    if (value === 'lg') {
      iconSize.value = 30;
    } else if (value === 'sm') {
      iconSize.value = 20;
    } else if (value === 'xs') {
      iconSize.value = 16;
    } else {
      iconSize.value = 24;
    }

    if (!value) {
      await nextTick(() => {
        btnSize.value = 'md';
      });
    }
    if (showIcon.value) {
      drinkSrc2Ref.value = [];
      await nextTick(() => {
        drinkSrc2Ref.value = drinkSrc2;
      });
    }
  });

  watchEffect(() => {
    let rawCode: string | undefined;

    rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
    rawCode = changeButtonShape(btnShape, rawCode);
    if (rawCode) {
      rawCode = changeComponentColor(btnColor, rawCode);
    }

    rawCode = changeButtonSize(btnSize as Ref<TButtonSize | undefined>, rawCode);
    rawCode = changeButtonState(btnState, rawCode);
    rawCode = changeButtonElevated(btnElevated, rawCode);

    if (showIcon.value) {
      rawCode = changeButtonIconSize(iconSize, btnSize as Ref<TButtonSize | undefined>, rawCode);
      rawCode = changeIconPosition(iconPosition as Ref<TIconPosition | undefined>, rawCode);
    }
    if (page === 'ToggleField') {
      if (showHelpText.value && rawCode) {
        rawCode = changeFieldHelpText(helpText.value, rawCode);
        rawCode = disableFieldPersistentHelpText(disablePersistentHelpText.value, rawCode);
      } else {
        disablePersistentHelpText.value = false;
      }
    }
    if (rawCode) {
      fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
    }
  });

  const btnVariantSrc = dsToggleButtonVariants();
  const btnShapeSrc = dsButtonShapes();
  const btnColorSrc = dsContextColors(['dark', 'light']);
  const btnSizeSrc = dsButtonSizes();
  const btnStateSrc = dsComponentStatesRD();

  drinkSrc2Ref.value = drinkSrc2;
  parseExampleSourceCode(example1, rawTemplate, fmtVueTsc);

  onBeforeUnmount(() => {
    btnVariantSrc.proxy.destroy();
    btnShapeSrc.proxy.destroy();
    btnColorSrc.proxy.destroy();
    btnSizeSrc.proxy.destroy();
    btnStateSrc.proxy.destroy();
  });

  return {
    fmtVueTpl,
    fmtVueTsc,
    btnVariant,
    btnShape,
    btnColor,
    btnSize,
    btnState,
    btnElevated,
    showIcon,
    iconPosition,
    iconSize,
    helpText,
    showHelpText,
    disablePersistentHelpText,
    drinkSrc2Ref,
    btnVariantSrc,
    btnShapeSrc,
    btnColorSrc,
    btnSizeSrc,
    btnStateSrc,
  };
}

declare type ToggleButtonCheckedIconResult = {
  fmtVueTpl: Ref<string | undefined>;
  fmtVueTsc: Ref<string | undefined>;
  btnVariant: Ref<string | undefined>;
  btnShape: Ref<string | undefined>;
  btnColor: Ref<TButtonColor | undefined>;
  btnState: Ref<string | undefined>;
  btnElevated: Ref<boolean>;
  showIcon: Ref<boolean>;
  iconPosition: Ref<TIconPosition>;
  btnVariantSrc: TDataSource;
  btnShapeSrc: TDataSource;
  btnColorSrc: TDataSource;
  btnStateSrc: TDataSource;
  iconPositionSrc: TRadioInputProps[];
};

export function setupToggleButtonCheckedIcon(
  example1: string,
  example2: string
): ToggleButtonCheckedIconResult {
  const fmtVueTpl = ref<string>();
  const fmtVueTsc = ref<string>();
  const rawTemplate = ref<string>();
  const btnVariant = ref<string | undefined>('filled');
  const btnShape = ref<string | undefined>('pill');
  const btnColor = ref<TButtonColor | undefined>('default');
  const btnState = ref<string>();
  const btnElevated = ref(false);
  const showIcon = ref(false);
  const iconPosition = ref<TIconPosition>('left');

  useWatcherDefaultValue(
    { refObj: btnVariant, default: 'filled' },
    { refObj: btnShape, default: 'pill' },
    { refObj: btnColor, default: 'default' }
  );

  watch(showIcon, (value) => {
    if (value) {
      parseExampleSourceCode(example2, rawTemplate, fmtVueTsc);
    } else {
      parseExampleSourceCode(example1, rawTemplate, fmtVueTsc);
    }
  });

  watchEffect(() => {
    let rawCode: string | undefined;

    rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
    rawCode = changeButtonShape(btnShape, rawCode);
    if (rawCode) {
      rawCode = changeComponentColor(btnColor, rawCode);
    }

    rawCode = changeButtonState(btnState, rawCode);
    rawCode = changeButtonElevated(btnElevated, rawCode);

    if (showIcon.value) {
      rawCode = changeIconPosition(iconPosition as Ref<TIconPosition | undefined>, rawCode);
    }

    if (rawCode) {
      fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
    }
  });

  parseExampleSourceCode(example1, rawTemplate, fmtVueTsc);

  const btnVariantSrc = dsToggleButtonVariants();
  const btnShapeSrc = dsButtonShapes();
  const btnColorSrc = dsContextColors(['dark', 'light']);
  const btnStateSrc = dsComponentStatesRD();
  const iconPositionSrc = buttonIconPositions();

  onBeforeUnmount(() => {
    btnVariantSrc.proxy.destroy();
    btnShapeSrc.proxy.destroy();
    btnColorSrc.proxy.destroy();
    btnStateSrc.proxy.destroy();
  });

  return {
    fmtVueTpl,
    fmtVueTsc,
    btnVariant,
    btnShape,
    btnColor,
    btnState,
    btnElevated,
    showIcon,
    iconPosition,
    btnVariantSrc,
    btnShapeSrc,
    btnColorSrc,
    btnStateSrc,
    iconPositionSrc,
  };
}

declare type ToggleButtonMultiSelectResult = {
  fmtVueTpl: Ref<string | undefined>;
  fmtVueTsc: Ref<string | undefined>;
  btnVariant: Ref<string | undefined>;
  btnShape: Ref<string | undefined>;
  btnColor: Ref<TButtonColor | undefined>;
  btnState: Ref<string | undefined>;
  btnElevated: Ref<boolean>;
  useCheckedMark: Ref<boolean>;
  showIcon: Ref<boolean>;
  iconPosition: Ref<TIconPosition>;
  btnVariantSrc: TDataSource;
  btnShapeSrc: TDataSource;
  btnColorSrc: TDataSource;
  btnStateSrc: TDataSource;
  iconPositionSrc: TRadioInputProps[];
};

export function setupToggleButtonMultiSelect(
  example1: string,
  example2: string,
  example3: string,
  example4: string
): ToggleButtonMultiSelectResult {
  const fmtVueTpl = ref<string>();
  const fmtVueTsc = ref<string>();
  const rawTemplate = ref<string>();
  const btnVariant = ref<string | undefined>('filled');
  const btnShape = ref<string | undefined>('pill');
  const btnColor = ref<TButtonColor | undefined>('default');
  const btnState = ref<string>();
  const btnElevated = ref(false);
  const showIcon = ref(false);
  const useCheckedMark = ref(false);
  const iconPosition = ref<TIconPosition>('left');

  useWatcherDefaultValue(
    { refObj: btnVariant, default: 'filled' },
    { refObj: btnShape, default: 'pill' },
    { refObj: btnColor, default: 'default' }
  );

  watchEffect(() => {
    if (showIcon.value && useCheckedMark.value) {
      parseExampleSourceCode(example4, rawTemplate, fmtVueTsc);
    } else if (!showIcon.value && useCheckedMark.value) {
      parseExampleSourceCode(example3, rawTemplate, fmtVueTsc);
    } else if (showIcon.value && !useCheckedMark.value) {
      parseExampleSourceCode(example2, rawTemplate, fmtVueTsc);
    } else {
      parseExampleSourceCode(example1, rawTemplate, fmtVueTsc);
    }

    let rawCode: string | undefined;

    rawCode = changeButtonVariant(btnVariant, rawTemplate.value);
    rawCode = changeButtonShape(btnShape, rawCode);
    if (rawCode) {
      rawCode = changeComponentColor(btnColor, rawCode);
    }

    rawCode = changeButtonState(btnState, rawCode);
    rawCode = changeButtonElevated(btnElevated, rawCode);

    if (showIcon.value) {
      rawCode = changeIconPosition(iconPosition, rawCode);
    }

    if (rawCode) {
      fmtVueTpl.value = stripAndBeautifyTemplate(rawCode);
    }
  });

  const btnVariantSrc = dsToggleButtonVariants();
  const btnShapeSrc = dsButtonShapes();
  const btnColorSrc = dsContextColors(['dark', 'light']);
  const btnStateSrc = dsComponentStatesRD();
  const iconPositionSrc = buttonIconPositions();

  onBeforeUnmount(() => {
    btnVariantSrc.proxy.destroy();
    btnShapeSrc.proxy.destroy();
    btnColorSrc.proxy.destroy();
    btnStateSrc.proxy.destroy();
  });

  return {
    fmtVueTpl,
    fmtVueTsc,
    btnVariant,
    btnShape,
    btnColor,
    btnState,
    btnElevated,
    useCheckedMark,
    showIcon,
    iconPosition,
    btnVariantSrc,
    btnShapeSrc,
    btnColorSrc,
    btnStateSrc,
    iconPositionSrc,
  };
}
