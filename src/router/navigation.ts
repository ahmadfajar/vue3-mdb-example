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
    view: () => import('@/views/Components/DemoAlert.vue')
  },
  {
    label: 'AppBar',
    group: 'Components',
    path: '/components/appbar',
    view: () => import('@/views/Components/DemoAppbar.vue')
  },
  {
    label: 'Avatar',
    group: 'Components',
    path: '/components/avatar',
    view: () => import('@/views/Components/DemoAvatar.vue')
  },
  {
    label: 'Badge',
    group: 'Components',
    path: '/components/badge',
    view: () => import('@/views/Components/DemoBadge.vue')
  },
  {
    label: 'Button',
    group: 'Components',
    path: '/components/button',
    view: () => import('@/views/Components/DemoButton.vue')
  },
  {
    label: 'Toggle Button',
    group: 'Components',
    path: '/components/button-toggle',
    view: () => import('@/views/Components/DemoToggleButton.vue')
  },
  {
    label: 'Card',
    group: 'Components',
    path: '/components/card',
    view: () => import('@/views/Components/DemoCard.vue')
  },
  {
    label: 'Checkbox',
    group: 'Components',
    path: '/components/checkbox',
    view: () => import('@/views/Components/DemoCheckbox.vue')
  },
  {
    label: 'Chip',
    group: 'Components',
    path: '/components/chip',
    view: () => import('@/views/Components/DemoChip.vue')
  },
  {
    label: 'Chip Group',
    group: 'Components',
    path: '/components/chip-group',
    view: () => import('@/views/Components/DemoChipGroup.vue')
  },
  {
    label: 'Icon',
    group: 'Components',
    path: '/components/icon',
    view: () => import('@/views/Components/DemoIcon.vue')
  },
  {
    label: 'List Nav',
    group: 'Components',
    path: '/components/list-nav',
    view: () => import('@/views/Components/DemoListNav.vue')
  },
  {
    label: 'List Tile',
    group: 'Components',
    path: '/components/list-tile',
    view: () => import('@/views/Components/DemoListTile.vue')
  },
  {
    label: 'Mask Loader',
    group: 'Components',
    path: '/components/mask-loader',
    view: () => import('@/views/Components/DemoMaskLoader.vue')
  },
  {
    label: 'Progress Control',
    group: 'Components',
    path: '/components/progress-control',
    view: () => import('@/views/Components/DemoProgress.vue')
  },
  {
    label: 'Progress Bar',
    group: 'Components',
    path: '/components/progress-bar',
    view: () => import('@/views/Components/DemoProgressBar.vue')
  },
  {
    label: 'Radio',
    group: 'Components',
    path: '/components/radio',
    view: () => import('@/views/Components/DemoRadio.vue')
  },
  {
    label: 'Ripple',
    group: 'Components',
    path: '/components/ripple',
    view: () => import('@/views/Components/DemoRipple.vue')
  },
  {
    label: 'SideDrawer',
    group: 'Components',
    path: '/components/side-drawer',
    view: () => import('@/views/Components/DemoSideDrawer.vue')
  },
  {
    label: 'Tabs',
    group: 'Components',
    path: '/components/tabs',
    view: () => import('@/views/Components/DemoTabs.vue')
  },
  {
    label: 'Text Field',
    group: 'Components',
    path: '/components/text-field',
    view: () => import('@/views/Components/DemoTextField.vue')
  },
  {
    label: 'TextArea Field',
    group: 'Components',
    path: '/components/text-area',
    view: () => import('@/views/Components/DemoTextArea.vue')
  },
  {
    label: 'Switch',
    group: 'Components',
    path: '/components/switch',
    view: () => import('@/views/Components/DemoSwitch.vue')
  },
  {
    label: 'Tooltips',
    group: 'Components',
    path: '/components/tooltip',
    view: () => import('@/views/Components/DemoTooltip.vue')
  },
  {
    label: 'Popover',
    group: 'Components',
    path: '/components/popover',
    view: () => import('@/views/Components/DemoPopover.vue')
  },
  {
    label: 'Dropdown Menu',
    group: 'Components',
    path: '/components/dropdown-menu',
    view: () => import('@/views/Components/DemoDropdownMenu.vue')
  },
  {
    label: 'Color Picker',
    group: 'Components',
    path: '/components/color-picker',
    view: () => import('@/views/Components/DemoColorPicker.vue')
  },
  {
    label: 'Chip Field',
    group: 'Components',
    path: '/components/chip-field',
    view: () => import('@/views/Components/DemoChipField.vue')
  },
  {
    label: 'Toggle Field',
    group: 'Components',
    path: '/components/toggle-field',
    view: () => import('@/views/Components/DemoToggleField.vue')
  },
  {
    label: 'Numeric Field',
    group: 'Components',
    path: '/components/numeric-field',
    view: () => import('@/views/Components/DemoNumericField.vue')
  },
  {
    label: 'Search Field',
    group: 'Components',
    path: '/components/search-field',
    view: () => import('@/views/Components/DemoSearchField.vue')
  },
  {
    label: 'Date Picker',
    group: 'Components',
    path: '/components/datepicker',
    view: () => import('@/views/Components/DemoDatePicker.vue')
  },
  {
    label: 'DateTime Field',
    group: 'Components',
    path: '/components/datetime-field',
    view: () => import('@/views/Components/DemoDateTimeField.vue')
  },
  {
    label: 'Listbox',
    group: 'Components',
    path: '/components/listbox',
    view: () => import('@/views/Components/DemoListbox.vue')
  },
  {
    label: 'Combobox',
    group: 'Components',
    path: '/components/combobox',
    view: () => import('@/views/Components/DemoCombobox.vue')
  },
  {
    label: 'Modal',
    group: 'Components',
    path: '/components/modal',
    view: () => import('@/views/Components/DemoModal.vue')
  },
  {
    label: 'Lightbox',
    group: 'Components',
    path: '/components/lightbox',
    view: () => import('@/views/Components/DemoLightbox.vue')
  },
  {
    label: 'Color Variants',
    group: 'Reference',
    path: '/reference/color',
    view: () => import('@/views/Color/DemoColor.vue')
  },
  {
    label: 'Notification',
    group: 'Reference',
    path: '/reference/notification',
    view: () => import('@/views/Reference/DemoNotification.vue')
  },
  {
    label: 'Transitions',
    group: 'Reference',
    path: '/reference/transition',
    view: () => import('@/views/Reference/DemoTransition.vue')
  },
  {
    label: 'Shadows',
    group: 'Reference',
    path: '/reference/shadow',
    view: () => import('@/views/Reference/DemoShadow.vue')
  }
];
