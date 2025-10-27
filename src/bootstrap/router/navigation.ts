import type { RouteComponent } from 'vue-router';

declare type TNavigation = {
  label: string;
  path: string;
  view: RouteComponent;
};

export declare type TMainNavigation = {
  label: string;
  hidden?: boolean;
  group?: string;
  path?: string;
  children?: TNavigation[];
  view?: RouteComponent;
};

export const menuNavs: TMainNavigation[] = [
  {
    label: 'Home',
    path: '/home',
    hidden: true,
    view: () => import('@bs/views/home.vue'),
  },
  {
    label: 'Animations',
    group: 'Components',
    children: [
      {
        label: 'Ripple',
        path: '/components/ripple',
        view: () => import('@bs/views/Components/DemoRipple.vue'),
      },
      {
        label: 'Transition Effects',
        path: '/components/transition',
        view: () => import('@bs/views/Components/DemoTransition.vue'),
      },
    ],
  },
  {
    label: 'Buttons',
    group: 'Components',
    children: [
      {
        label: 'Button',
        path: '/components/button',
        view: () => import('@bs/views/Components/DemoButton.vue'),
      },
      {
        label: 'Toggle Button',
        path: '/components/button-toggle',
        view: () => import('@bs/views/Components/DemoToggleButton.vue'),
      },
    ],
  },
  {
    label: 'Chips',
    group: 'Components',
    children: [
      {
        label: 'Chip',
        path: '/components/chip',
        view: () => import('@bs/views/Components/DemoChip.vue'),
      },
      {
        label: 'Chip Group',
        path: '/components/chip-group',
        view: () => import('@bs/views/Components/DemoChipGroup.vue'),
      },
    ],
  },
  {
    label: 'Containment',
    group: 'Components',
    children: [
      {
        label: 'AppBar',
        path: '/components/appbar',
        view: () => import('@bs/views/Components/DemoAppbar.vue'),
      },
      {
        label: 'SideDrawer',
        path: '/components/side-drawer',
        view: () => import('@bs/views/Components/DemoSideDrawer.vue'),
      },
      {
        label: 'Card',
        path: '/components/card',
        view: () => import('@bs/views/Components/DemoCard.vue'),
      },
    ],
  },
  {
    label: 'Elements',
    group: 'Components',
    children: [
      {
        label: 'Alert',
        path: '/components/alert',
        view: () => import('@bs/views/Components/DemoAlert.vue'),
      },
      {
        label: 'Avatar',
        path: '/components/avatar',
        view: () => import('@bs/views/Components/DemoAvatar.vue'),
      },
      {
        label: 'Badge',
        path: '/components/badge',
        view: () => import('@bs/views/Components/DemoBadge.vue'),
      },
      {
        label: 'Breadcrumb',
        path: '/components/breadcrumb',
        view: () => import('@bs/views/Components/DemoBreadcrumb.vue'),
      },
      {
        label: 'Dropdown Menu',
        path: '/components/dropdown-menu',
        view: () => import('@bs/views/Components/DemoDropdownMenu.vue'),
      },
      {
        label: 'Image Uploader',
        path: '/components/image-uploader',
        view: () => import('@bs/views/Components/DemoImageUploader.vue'),
      },
      {
        label: 'List Tile',
        path: '/components/list-tile',
        view: () => import('@bs/views/Components/DemoListTile.vue'),
      },
    ],
  },
  {
    label: 'Icons',
    group: 'Components',
    children: [
      {
        label: 'Icon',
        path: '/components/icon',
        view: () => import('@bs/views/Components/DemoIcon.vue'),
      },
    ],
  },
  {
    label: 'Input Controls',
    group: 'Components',
    children: [
      {
        label: 'Checkbox',
        path: '/components/checkbox',
        view: () => import('@bs/views/Components/DemoCheckbox.vue'),
      },
      {
        label: 'Radio Button',
        path: '/components/radio',
        view: () => import('@bs/views/Components/DemoRadio.vue'),
      },
      {
        label: 'Switch Button',
        path: '/components/switch',
        view: () => import('@bs/views/Components/DemoSwitch.vue'),
      },
      {
        label: 'Text Field',
        path: '/components/text-field',
        view: () => import('@bs/views/Components/DemoTextField.vue'),
      },
      {
        label: 'TextArea Field',
        path: '/components/text-area',
        view: () => import('@bs/views/Components/DemoTextArea.vue'),
      },
      {
        label: 'Numeric Field',
        path: '/components/numeric-field',
        view: () => import('@bs/views/Components/DemoNumericField.vue'),
      },
      {
        label: 'DateTime Field',
        path: '/components/datetime-field',
        view: () => import('@bs/views/Components/DemoDateTimeField.vue'),
      },
      {
        label: 'Chip Field',
        path: '/components/chip-field',
        view: () => import('@bs/views/Components/DemoChipField.vue'),
      },
      {
        label: 'Toggle Field',
        path: '/components/toggle-field',
        view: () => import('@bs/views/Components/DemoToggleField.vue'),
      },
      {
        label: 'Listbox',
        path: '/components/listbox',
        view: () => import('@bs/views/Components/DemoListbox.vue'),
      },
      {
        label: 'Combobox',
        path: '/components/combobox',
        view: () => import('@bs/views/Components/DemoCombobox.vue'),
      },
      {
        label: 'Search Field',
        path: '/components/search-field',
        view: () => import('@bs/views/Components/DemoSearchField.vue'),
      },
    ],
  },
  {
    label: 'Navigations',
    group: 'Components',
    children: [
      {
        label: 'List Nav',
        path: '/components/list-nav',
        view: () => import('@bs/views/Components/DemoListNav.vue'),
      },
      {
        label: 'Tabs',
        path: '/components/tabs',
        view: () => import('@bs/views/Components/DemoTabs.vue'),
      },
    ],
  },
  {
    label: 'Overlays',
    group: 'Components',
    children: [
      {
        label: 'Lightbox',
        path: '/components/lightbox',
        view: () => import('@bs/views/Components/DemoLightbox.vue'),
      },
      {
        label: 'Mask Loader',
        path: '/components/mask-loader',
        view: () => import('@bs/views/Components/DemoMaskLoader.vue'),
      },
      {
        label: 'Modal',
        path: '/components/modal',
        view: () => import('@bs/views/Components/DemoModal.vue'),
      },
      {
        label: 'Notification',
        path: '/components/notification',
        view: () => import('@bs/views/Components/DemoNotification.vue'),
      },
      {
        label: 'Overlay',
        path: '/components/overlay',
        view: () => import('@bs/views/Components/DemoOverlay.vue'),
      },
      {
        label: 'Popover',
        path: '/components/popover',
        view: () => import('@bs/views/Components/DemoPopover.vue'),
      },
      {
        label: 'Tooltip',
        path: '/components/tooltip',
        view: () => import('@bs/views/Components/DemoTooltip.vue'),
      },
    ],
  },
  {
    label: 'Progress Controls',
    group: 'Components',
    children: [
      {
        label: 'Progress Control',
        path: '/components/progress-control',
        view: () => import('@bs/views/Components/DemoProgress.vue'),
      },
      {
        label: 'Progress Bar',
        path: '/components/progress-bar',
        view: () => import('@bs/views/Components/DemoProgressBar.vue'),
      },
    ],
  },
  {
    label: 'Pickers',
    group: 'Components',
    children: [
      {
        label: 'Color Picker',
        path: '/components/color-picker',
        view: () => import('@bs/views/Components/DemoColorPicker.vue'),
      },
      {
        label: 'Date Picker',
        path: '/components/datepicker',
        view: () => import('@bs/views/Components/DemoDatePicker.vue'),
      },
    ],
  },
  {
    label: 'Colors',
    group: 'Reference',
    path: '/reference/color',
    view: () => import('@bs/views/Color/DemoColor.vue'),
  },
  {
    label: 'Shadows',
    group: 'Reference',
    path: '/reference/shadow',
    view: () => import('@bs/views/Reference/DemoShadow.vue'),
  },
];
