import type { RouteComponent } from 'vue-router';

export declare type TNavigationRecord = {
  label: string;
  group: string;
  disabled?: boolean;
  path: string;
  view: RouteComponent;
};

export const menuNavs: TNavigationRecord[] = [
  {
    label: 'Alert',
    group: 'Components',
    path: '/components/alert',
    view: () => import('@bs/views/Components/DemoAlert.vue'),
  },
  {
    label: 'AppBar',
    group: 'Components',
    path: '/components/appbar',
    view: () => import('@bs/views/Components/DemoAppbar.vue'),
  },
  {
    label: 'Avatar',
    group: 'Components',
    path: '/components/avatar',
    view: () => import('@bs/views/Components/DemoAvatar.vue'),
  },
  {
    label: 'Badge',
    group: 'Components',
    path: '/components/badge',
    view: () => import('@bs/views/Components/DemoBadge.vue'),
  },
  {
    label: 'Button',
    group: 'Components',
    path: '/components/button',
    view: () => import('@bs/views/Components/DemoButton.vue'),
  },
  {
    label: 'Toggle Button',
    group: 'Components',
    path: '/components/button-toggle',
    view: () => import('@bs/views/Components/DemoToggleButton.vue'),
  },
  {
    label: 'Card',
    group: 'Components',
    path: '/components/card',
    view: () => import('@bs/views/Components/DemoCard.vue'),
  },
  {
    label: 'Checkbox',
    group: 'Components',
    path: '/components/checkbox',
    view: () => import('@bs/views/Components/DemoCheckbox.vue'),
  },
  {
    label: 'Chip',
    group: 'Components',
    path: '/components/chip',
    view: () => import('@bs/views/Components/DemoChip.vue'),
  },
  {
    label: 'Chip Group',
    group: 'Components',
    path: '/components/chip-group',
    view: () => import('@bs/views/Components/DemoChipGroup.vue'),
  },
  {
    label: 'Icon',
    group: 'Components',
    path: '/components/icon',
    view: () => import('@bs/views/Components/DemoIcon.vue'),
  },
  {
    label: 'List Nav',
    group: 'Components',
    path: '/components/list-nav',
    view: () => import('@bs/views/Components/DemoListNav.vue'),
  },
  {
    label: 'List Tile',
    group: 'Components',
    path: '/components/list-tile',
    view: () => import('@bs/views/Components/DemoListTile.vue'),
  },
  {
    label: 'Mask Loader',
    group: 'Components',
    path: '/components/mask-loader',
    view: () => import('@bs/views/Components/DemoMaskLoader.vue'),
  },
  {
    label: 'Progress Control',
    group: 'Components',
    path: '/components/progress-control',
    view: () => import('@bs/views/Components/DemoProgress.vue'),
  },
  {
    label: 'Progress Bar',
    group: 'Components',
    path: '/components/progress-bar',
    view: () => import('@bs/views/Components/DemoProgressBar.vue'),
  },
  {
    label: 'Radio',
    group: 'Components',
    path: '/components/radio',
    view: () => import('@bs/views/Components/DemoRadio.vue'),
  },
  {
    label: 'Ripple',
    group: 'Components',
    path: '/components/ripple',
    view: () => import('@bs/views/Components/DemoRipple.vue'),
  },
  {
    label: 'SideDrawer',
    group: 'Components',
    path: '/components/side-drawer',
    view: () => import('@bs/views/Components/DemoSideDrawer.vue'),
  },
  {
    label: 'Tabs',
    group: 'Components',
    path: '/components/tabs',
    view: () => import('@bs/views/Components/DemoTabs.vue'),
  },
  {
    label: 'Text Field',
    group: 'Components',
    path: '/components/text-field',
    view: () => import('@bs/views/Components/DemoTextField.vue'),
  },
  {
    label: 'TextArea Field',
    group: 'Components',
    path: '/components/text-area',
    view: () => import('@bs/views/Components/DemoTextArea.vue'),
  },
  {
    label: 'Switch',
    group: 'Components',
    path: '/components/switch',
    view: () => import('@bs/views/Components/DemoSwitch.vue'),
  },
  {
    label: 'Tooltips',
    group: 'Components',
    path: '/components/tooltip',
    view: () => import('@bs/views/Components/DemoTooltip.vue'),
  },
  {
    label: 'Popover',
    group: 'Components',
    path: '/components/popover',
    view: () => import('@bs/views/Components/DemoPopover.vue'),
  },
  {
    label: 'Dropdown Menu',
    group: 'Components',
    path: '/components/dropdown-menu',
    view: () => import('@bs/views/Components/DemoDropdownMenu.vue'),
  },
  {
    label: 'Color Picker',
    group: 'Components',
    path: '/components/color-picker',
    view: () => import('@bs/views/Components/DemoColorPicker.vue'),
  },
  {
    label: 'Chip Field',
    group: 'Components',
    path: '/components/chip-field',
    view: () => import('@bs/views/Components/DemoChipField.vue'),
  },
  {
    label: 'Toggle Field',
    group: 'Components',
    path: '/components/toggle-field',
    view: () => import('@bs/views/Components/DemoToggleField.vue'),
  },
  {
    label: 'Numeric Field',
    group: 'Components',
    path: '/components/numeric-field',
    view: () => import('@bs/views/Components/DemoNumericField.vue'),
  },
  {
    label: 'Search Field',
    group: 'Components',
    path: '/components/search-field',
    view: () => import('@bs/views/Components/DemoSearchField.vue'),
  },
  {
    label: 'Date Picker',
    group: 'Components',
    path: '/components/datepicker',
    view: () => import('@bs/views/Components/DemoDatePicker.vue'),
  },
  {
    label: 'DateTime Field',
    group: 'Components',
    path: '/components/datetime-field',
    view: () => import('@bs/views/Components/DemoDateTimeField.vue'),
  },
  {
    label: 'Listbox',
    group: 'Components',
    path: '/components/listbox',
    view: () => import('@bs/views/Components/DemoListbox.vue'),
  },
  {
    label: 'Combobox',
    group: 'Components',
    path: '/components/combobox',
    view: () => import('@bs/views/Components/DemoCombobox.vue'),
  },
  {
    label: 'Modal',
    group: 'Components',
    path: '/components/modal',
    view: () => import('@bs/views/Components/DemoModal.vue'),
  },
  {
    label: 'Lightbox',
    group: 'Components',
    path: '/components/lightbox',
    view: () => import('@bs/views/Components/DemoLightbox.vue'),
  },
  {
    label: 'Breadcrumb',
    group: 'Components',
    path: '/components/breadcrumb',
    view: () => import('@bs/views/Components/DemoBreadcrumb.vue'),
  },
  {
    label: 'Image Uploader',
    group: 'Components',
    path: '/components/image-uploader',
    view: () => import('@bs/views/Components/DemoImageUploader.vue'),
  },
  {
    label: 'Color Variants',
    group: 'Reference',
    path: '/reference/color',
    view: () => import('@bs/views/Color/DemoColor.vue'),
  },
  {
    label: 'Notification',
    group: 'Reference',
    path: '/reference/notification',
    view: () => import('@bs/views/Reference/DemoNotification.vue'),
  },
  {
    label: 'Transitions',
    group: 'Reference',
    path: '/reference/transition',
    view: () => import('@bs/views/Reference/DemoTransition.vue'),
  },
  {
    label: 'Shadows',
    group: 'Reference',
    path: '/reference/shadow',
    view: () => import('@bs/views/Reference/DemoShadow.vue'),
  },
];
