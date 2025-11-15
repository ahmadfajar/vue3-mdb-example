import type { RouteComponent } from 'vue-router';

declare type TNavigation = {
  text: string;
  path: string;
  name?: string;
  hidden?: boolean;
  view: RouteComponent;
};

export declare type TMainNavigation = {
  text: string;
  hidden?: boolean;
  group?: string;
  path?: string;
  children?: TNavigation[];
  view?: RouteComponent;
};

export const menuNavs: TMainNavigation[] = [
  {
    text: 'Home',
    path: '/home',
    hidden: true,
    view: () => import('@tw/views/home.vue'),
  },
  {
    text: 'Animations',
    group: 'Components',
    children: [
      {
        text: 'Ripple',
        path: '/animations/ripple',
        view: () => import('@tw/views/animations/RipplePage.vue'),
      },
      {
        text: 'Transition Effects',
        path: '/animations/transition',
        view: () => import('@tw/views/animations/TransitionPage.vue'),
      },
      {
        text: 'Transition Effects',
        name: 'transition-effects-id',
        path: '/animations/transition/:id',
        hidden: true,
        view: () => import('@tw/views/animations/TransitionPage.vue'),
      },
    ],
  },
  {
    text: 'Buttons',
    group: 'Components',
    children: [
      {
        text: 'Button',
        path: '/buttons/button',
        view: () => import('@tw/views/buttons/ButtonPage.vue'),
      },
      {
        text: 'Button',
        name: 'button-id',
        path: '/buttons/button/:id',
        hidden: true,
        view: () => import('@tw/views/buttons/ButtonPage.vue'),
      },
      // {
      //   text: 'Button Example',
      //   path: '/buttons/button-example',
      //   view: () => import('@tw/views/buttons/DemoButton.vue'),
      // },
      {
        text: 'Toggle Button',
        path: '/buttons/toggle-button',
        view: () => import('@tw/views/buttons/DemoToggleButton.vue'),
      },
    ],
  },
  {
    text: 'Chips',
    group: 'Components',
    children: [
      {
        text: 'Chip',
        path: '/chips/chip',
        view: () => import('@tw/views/chips/DemoChip.vue'),
      },
      {
        text: 'Chip Group',
        path: '/chips/chip-group',
        view: () => import('@tw/views/chips/DemoChipGroup.vue'),
      },
    ],
  },
  {
    text: 'Containment',
    group: 'Components',
    children: [
      {
        text: 'AppBar',
        path: '/containment/appbar',
        view: () => import('@tw/views/containment/DemoAppbar.vue'),
      },
      {
        text: 'SideDrawer',
        path: '/containment/side-drawer',
        view: () => import('@tw/views/containment/DemoSideDrawer.vue'),
      },
      {
        text: 'Card',
        path: '/containment/card',
        view: () => import('@tw/views/containment/DemoCard.vue'),
      },
    ],
  },
  {
    text: 'Elements',
    group: 'Components',
    children: [
      {
        text: 'Alert',
        path: '/elements/alert',
        view: () => import('@tw/views/elements/DemoAlert.vue'),
      },
      {
        text: 'Avatar',
        path: '/elements/avatar',
        view: () => import('@tw/views/elements/DemoAvatar.vue'),
      },
      {
        text: 'Badge',
        path: '/elements/badge',
        view: () => import('@tw/views/elements/DemoBadge.vue'),
      },
      {
        text: 'Dropdown Menu',
        path: '/elements/dropdown-menu',
        view: () => import('@tw/views/elements/DemoDropdownMenu.vue'),
      },
      {
        text: 'Image Uploader',
        path: '/elements/image-uploader',
        view: () => import('@tw/views/elements/DemoImageUploader.vue'),
      },
      {
        text: 'List Tile',
        path: '/elements/list-tile',
        view: () => import('@tw/views/elements/DemoListTile.vue'),
      },
    ],
  },
  {
    text: 'Icons',
    group: 'Components',
    children: [
      {
        text: 'Icon',
        path: '/icons/icon',
        view: () => import('@tw/views/icons/DemoIcon.vue'),
      },
    ],
  },
  {
    text: 'Input Controls',
    group: 'Components',
    children: [
      {
        text: 'Checkbox',
        path: '/inputs/checkbox',
        view: () => import('@tw/views/inputs/DemoCheckbox.vue'),
      },
      {
        text: 'Radio Button',
        path: '/inputs/radio',
        view: () => import('@tw/views/inputs/DemoRadio.vue'),
      },
      {
        text: 'Switch Button',
        path: '/inputs/switch',
        view: () => import('@tw/views/inputs/DemoSwitch.vue'),
      },
      {
        text: 'Text Field',
        path: '/inputs/text-field',
        view: () => import('@tw/views/inputs/DemoTextField.vue'),
      },
      {
        text: 'TextArea Field',
        path: '/inputs/text-area',
        view: () => import('@tw/views/inputs/DemoTextArea.vue'),
      },
      {
        text: 'Numeric Field',
        path: '/inputs/numeric-field',
        view: () => import('@tw/views/inputs/DemoNumericField.vue'),
      },
      {
        text: 'DateTime Field',
        path: '/inputs/datetime-field',
        view: () => import('@tw/views/inputs/DemoDateTimeField.vue'),
      },
      {
        text: 'Chip Field',
        path: '/inputs/chip-field',
        view: () => import('@tw/views/inputs/DemoChipField.vue'),
      },
      {
        text: 'Combobox',
        path: '/inputs/combobox',
        view: () => import('@tw/views/inputs/DemoCombobox.vue'),
      },
      {
        text: 'Listbox',
        path: '/inputs/listbox',
        view: () => import('@tw/views/inputs/DemoListbox.vue'),
      },
      {
        text: 'Toggle Field',
        path: '/inputs/toggle-field',
        view: () => import('@tw/views/inputs/DemoToggleField.vue'),
      },
      {
        text: 'Search Field',
        path: '/inputs/search-field',
        view: () => import('@tw/views/inputs/DemoSearchField.vue'),
      },
    ],
  },
  {
    text: 'Navigations',
    group: 'Components',
    children: [
      {
        text: 'Breadcrumb',
        path: '/navigations/breadcrumb',
        view: () => import('@tw/views/navigations/DemoBreadcrumb.vue'),
      },
      {
        text: 'List Nav',
        path: '/navigations/list-nav',
        view: () => import('@tw/views/navigations/DemoListNav.vue'),
      },
      {
        text: 'Tabs',
        path: '/navigations/tabs',
        view: () => import('@tw/views/navigations/DemoTabs.vue'),
      },
    ],
  },
  {
    text: 'Overlays',
    group: 'Components',
    children: [
      {
        text: 'Lightbox',
        path: '/overlays/lightbox',
        view: () => import('@tw/views/overlays/DemoLightbox.vue'),
      },
      {
        text: 'Mask Loader',
        path: '/overlays/mask-loader',
        view: () => import('@tw/views/overlays/DemoMaskLoader.vue'),
      },
      {
        text: 'Modal',
        path: '/overlays/modal',
        view: () => import('@tw/views/overlays/DemoModal.vue'),
      },
      {
        text: 'Notification',
        path: '/overlays/notification',
        view: () => import('@tw/views/overlays/DemoNotification.vue'),
      },
      {
        text: 'Overlay',
        path: '/overlays/overlay',
        view: () => import('@tw/views/overlays/DemoOverlay.vue'),
      },
      {
        text: 'Popover',
        path: '/overlays/popover',
        view: () => import('@tw/views/overlays/DemoPopover.vue'),
      },
      {
        text: 'Tooltip',
        path: '/overlays/tooltip',
        view: () => import('@tw/views/overlays/DemoTooltip.vue'),
      },
    ],
  },
  {
    text: 'Progress Controls',
    group: 'Components',
    children: [
      {
        text: 'Progress',
        path: '/progress-control/progress',
        view: () => import('@tw/views/progress/DemoProgress.vue'),
      },
      {
        text: 'Progress Bar',
        path: '/progress-control/progress-bar',
        view: () => import('@tw/views/progress/DemoProgressBar.vue'),
      },
    ],
  },
  {
    text: 'Pickers',
    group: 'Components',
    children: [
      {
        text: 'Color Picker',
        path: '/pickers/color-picker',
        view: () => import('@tw/views/pickers/DemoColorPicker.vue'),
      },
      {
        text: 'Date Picker',
        path: '/pickers/datepicker',
        view: () => import('@tw/views/pickers/DemoDatePicker.vue'),
      },
    ],
  },
  {
    text: 'Shadows',
    group: 'Reference',
    path: '/reference/shadow',
    view: () => import('@tw/views/references/DemoShadow.vue'),
  },
];
