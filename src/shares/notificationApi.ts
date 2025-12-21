import { schemaConfigDefinition } from '@shares/showcaseDataApi.ts';
import {
  BsArrayStore,
  type INotificationProvider,
  StringHelper,
  type TDataSource,
  type TNotificationPosition,
  type TNotificationVariant,
} from 'vue-mdbootstrap';

export function dsNotificationVariants(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'default', label: 'Default' },
        { value: 'success', label: 'Success' },
        { value: 'info', label: 'Info' },
        { value: 'warning', label: 'Warning' },
        { value: 'error', label: 'Error' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function dsNotificationPositions(): TDataSource {
  return {
    proxy: new BsArrayStore(
      [
        { value: 'top-left', label: 'Top Left' },
        { value: 'top-center', label: 'Top Center' },
        { value: 'top-right', label: 'Top Right' },
        { value: 'top-full-width', label: 'Top FullWidth' },
        { value: 'bottom-left', label: 'Bottom Left' },
        { value: 'bottom-center', label: 'Bottom Center' },
        { value: 'bottom-right', label: 'Bottom Right' },
        { value: 'bottom-full-width', label: 'Bottom FullWidth' },
      ],
      { idProperty: 'value' }
    ),
    schema: schemaConfigDefinition,
  };
}

export function useShowNotification(
  notifier: INotificationProvider,
  variant: TNotificationVariant,
  position: TNotificationPosition,
  progressBar: boolean,
  hideIcon: boolean,
  hideTitle: boolean
): void {
  notifier.add({
    message: `Example ${variant} notification message.`,
    title: hideTitle
      ? undefined
      : variant === 'default'
        ? 'Information'
        : StringHelper.titleCase(variant),
    variant: variant,
    position: position,
    progressBar: progressBar,
    iconOff: hideIcon,
  });
}

export function applyNotificationTemplate(
  variant: TNotificationVariant,
  position: TNotificationPosition,
  progressBar: boolean,
  hideIcon: boolean,
  hideTitle: boolean,
  data: string
): string {
  let tmp = data.replace('{$colors}', `color="${variant === 'error' ? 'danger' : variant}"`);
  const method = variant === 'default' ? 'add' : variant;
  const msg = `Example ${variant} notification message.`;
  const title = variant === 'default' ? 'Information' : StringHelper.titleCase(variant);

  if (position === 'bottom-right' && !progressBar && !hideIcon && !hideTitle) {
    if (variant === 'default') {
      tmp = tmp.replace(
        '{$click_events}',
        `click="$notification.add({message: '${msg}', title: '${title}'})"`
      );
    } else {
      tmp = tmp.replace('{$click_events}', `click="$notification.${method}('${msg}', '${title}')"`);
    }
  } else if (position === 'bottom-right' && !progressBar && !hideIcon && hideTitle) {
    tmp = tmp.replace('{$click_events}', `click="$notification.${method}('${msg}')"`);
  } else {
    let config = `{ message: '${msg}'`;
    if (!hideTitle) {
      config += `, title: '${title}'`;
    }
    if (position !== 'bottom-right') {
      config += `, position: '${position}'`;
    }
    if (progressBar) {
      config += ', progressBar: true';
    }
    if (hideIcon) {
      config += ', iconOff: true';
    }
    config += ' }';
    tmp = tmp.replace('{$click_events}', `click="$notification.${method}(${config})"`);
  }

  return tmp;
}
