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
        path: '/animations/ripple',
        view: () => import('@bs/views/animations/DemoRipple.vue'),
      },
      {
        label: 'Transition Effects',
        path: '/animations/transition',
        view: () => import('@bs/views/animations/DemoTransition.vue'),
      },
    ],
  },
  {
    label: 'Buttons',
    group: 'Components',
    children: [
      {
        label: 'Button',
        path: '/buttons/button',
        view: () => import('@bs/views/buttons/DemoButton.vue'),
      },
      {
        label: 'Toggle Button',
        path: '/buttons/button-toggle',
        view: () => import('@bs/views/buttons/DemoToggleButton.vue'),
      },
    ],
  },
  {
    label: 'Chips',
    group: 'Components',
    children: [
      {
        label: 'Chip',
        path: '/chips/chip',
        view: () => import('@bs/views/chips/DemoChip.vue'),
      },
      {
        label: 'Chip Group',
        path: '/chips/chip-group',
        view: () => import('@bs/views/chips/DemoChipGroup.vue'),
      },
    ],
  },
  {
    label: 'Containment',
    group: 'Components',
    children: [
      {
        label: 'AppBar',
        path: '/containment/appbar',
        view: () => import('@bs/views/containment/DemoAppbar.vue'),
      },
      {
        label: 'SideDrawer',
        path: '/containment/side-drawer',
        view: () => import('@bs/views/containment/DemoSideDrawer.vue'),
      },
      {
        label: 'Card',
        path: '/containment/card',
        view: () => import('@bs/views/containment/DemoCard.vue'),
      },
    ],
  },
  {
    label: 'Elements',
    group: 'Components',
    children: [
      {
        label: 'Alert',
        path: '/elements/alert',
        view: () => import('@bs/views/elements/DemoAlert.vue'),
      },
      {
        label: 'Avatar',
        path: '/elements/avatar',
        view: () => import('@bs/views/elements/DemoAvatar.vue'),
      },
      {
        label: 'Badge',
        path: '/elements/badge',
        view: () => import('@bs/views/elements/DemoBadge.vue'),
      },
      {
        label: 'Dropdown Menu',
        path: '/elements/dropdown-menu',
        view: () => import('@bs/views/elements/DemoDropdownMenu.vue'),
      },
      {
        label: 'Image Uploader',
        path: '/elements/image-uploader',
        view: () => import('@bs/views/elements/DemoImageUploader.vue'),
      },
      {
        label: 'List Tile',
        path: '/elements/list-tile',
        view: () => import('@bs/views/elements/DemoListTile.vue'),
      },
    ],
  },
  {
    label: 'Icons',
    group: 'Components',
    children: [
      {
        label: 'Icon',
        path: '/icons/icon',
        view: () => import('@bs/views/icons/DemoIcon.vue'),
      },
    ],
  },
  {
    label: 'Input Controls',
    group: 'Components',
    children: [
      {
        label: 'Checkbox',
        path: '/inputs/checkbox',
        view: () => import('@bs/views/inputs/DemoCheckbox.vue'),
      },
      {
        label: 'Radio Button',
        path: '/inputs/radio',
        view: () => import('@bs/views/inputs/DemoRadio.vue'),
      },
      {
        label: 'Switch Button',
        path: '/inputs/switch',
        view: () => import('@bs/views/inputs/DemoSwitch.vue'),
      },
      {
        label: 'Text Field',
        path: '/inputs/text-field',
        view: () => import('@bs/views/inputs/DemoTextField.vue'),
      },
      {
        label: 'TextArea Field',
        path: '/inputs/text-area',
        view: () => import('@bs/views/inputs/DemoTextArea.vue'),
      },
      {
        label: 'Numeric Field',
        path: '/inputs/numeric-field',
        view: () => import('@bs/views/inputs/DemoNumericField.vue'),
      },
      {
        label: 'DateTime Field',
        path: '/inputs/datetime-field',
        view: () => import('@bs/views/inputs/DemoDateTimeField.vue'),
      },
      {
        label: 'Chip Field',
        path: '/inputs/chip-field',
        view: () => import('@bs/views/inputs/DemoChipField.vue'),
      },
      {
        label: 'Listbox',
        path: '/inputs/listbox',
        view: () => import('@bs/views/inputs/DemoListbox.vue'),
      },
      {
        label: 'Combobox',
        path: '/inputs/combobox',
        view: () => import('@bs/views/inputs/DemoCombobox.vue'),
      },
      {
        label: 'Toggle Field',
        path: '/inputs/toggle-field',
        view: () => import('@bs/views/inputs/DemoToggleField.vue'),
      },
      {
        label: 'Search Field',
        path: '/inputs/search-field',
        view: () => import('@bs/views/inputs/DemoSearchField.vue'),
      },
    ],
  },
  {
    label: 'Navigations',
    group: 'Components',
    children: [
      {
        label: 'Breadcrumb',
        path: '/navigations/breadcrumb',
        view: () => import('@bs/views/navigations/DemoBreadcrumb.vue'),
      },
      {
        label: 'List Nav',
        path: '/navigations/list-nav',
        view: () => import('@bs/views/navigations/DemoListNav.vue'),
      },
      {
        label: 'Tabs',
        path: '/navigations/tabs',
        view: () => import('@bs/views/navigations/DemoTabs.vue'),
      },
    ],
  },
  {
    label: 'Overlays',
    group: 'Components',
    children: [
      {
        label: 'Lightbox',
        path: '/overlays/lightbox',
        view: () => import('@bs/views/overlays/DemoLightbox.vue'),
      },
      {
        label: 'Mask Loader',
        path: '/overlays/mask-loader',
        view: () => import('@bs/views/overlays/DemoMaskLoader.vue'),
      },
      {
        label: 'Modal',
        path: '/overlays/modal',
        view: () => import('@bs/views/overlays/DemoModal.vue'),
      },
      {
        label: 'Notification',
        path: '/overlays/notification',
        view: () => import('@bs/views/overlays/DemoNotification.vue'),
      },
      {
        label: 'Overlay',
        path: '/overlays/overlay',
        view: () => import('@bs/views/overlays/DemoOverlay.vue'),
      },
      {
        label: 'Popover',
        path: '/overlays/popover',
        view: () => import('@bs/views/overlays/DemoPopover.vue'),
      },
      {
        label: 'Tooltip',
        path: '/overlays/tooltip',
        view: () => import('@bs/views/overlays/DemoTooltip.vue'),
      },
    ],
  },
  {
    label: 'Progress Controls',
    group: 'Components',
    children: [
      {
        label: 'Progress Control',
        path: '/progress/progress-control',
        view: () => import('@bs/views/progress/DemoProgress.vue'),
      },
      {
        label: 'Progress Bar',
        path: '/progress/progress-bar',
        view: () => import('@bs/views/progress/DemoProgressBar.vue'),
      },
    ],
  },
  {
    label: 'Pickers',
    group: 'Components',
    children: [
      {
        label: 'Color Picker',
        path: '/pickers/color-picker',
        view: () => import('@bs/views/pickers/DemoColorPicker.vue'),
      },
      {
        label: 'Date Picker',
        path: '/pickers/datepicker',
        view: () => import('@bs/views/pickers/DemoDatePicker.vue'),
      },
    ],
  },
  {
    label: 'Colors',
    group: 'Reference',
    path: '/reference/color',
    view: () => import('@bs/views/references/DemoColor.vue'),
  },
  {
    label: 'Shadows',
    group: 'Reference',
    path: '/reference/shadow',
    view: () => import('@bs/views/references/DemoShadow.vue'),
  },
];
