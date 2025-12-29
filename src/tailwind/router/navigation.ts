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
    view: () => import('@tw/pages/home.vue'),
  },
  {
    text: 'Animations',
    group: 'Components',
    children: [
      {
        text: 'Ripple',
        path: '/animations/ripple',
        view: () => import('@tw/pages/animations/RipplePage.vue'),
      },
      {
        text: 'Transition Effects',
        path: '/animations/transition',
        view: () => import('@tw/pages/animations/TransitionPage.vue'),
      },
      {
        text: 'Transition Effects',
        name: 'transition-effects-id',
        path: '/animations/transition/:id',
        hidden: true,
        view: () => import('@tw/pages/animations/TransitionPage.vue'),
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
        view: () => import('@tw/pages/buttons/ButtonPage.vue'),
      },
      {
        text: 'Button',
        name: 'button-id',
        path: '/buttons/button/:id',
        hidden: true,
        view: () => import('@tw/pages/buttons/ButtonPage.vue'),
      },
      {
        text: 'Toggle Button',
        path: '/buttons/toggle-button',
        view: () => import('@tw/pages/buttons/ToggleButtonPage.vue'),
      },
      {
        text: 'Toggle Button',
        name: 'toggle-button-id',
        path: '/buttons/toggle-button/:id',
        hidden: true,
        view: () => import('@tw/pages/buttons/ToggleButtonPage.vue'),
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
        view: () => import('@tw/pages/chips/ChipPage.vue'),
      },
      {
        text: 'Chip',
        name: 'chip-id',
        path: '/chips/chip/:id',
        hidden: true,
        view: () => import('@tw/pages/chips/ChipPage.vue'),
      },
      {
        text: 'Chip Group',
        path: '/chips/chip-group',
        view: () => import('@tw/pages/chips/ChipGroupPage.vue'),
      },
      {
        text: 'Chip Group',
        name: 'chip-group-id',
        path: '/chips/chip-group/:id',
        hidden: true,
        view: () => import('@tw/pages/chips/ChipGroupPage.vue'),
      },
    ],
  },
  {
    text: 'Containment',
    group: 'Components',
    children: [
      {
        text: 'Appbar',
        path: '/containment/appbar',
        view: () => import('@tw/pages/containment/AppbarPage.vue'),
      },
      {
        text: 'Appbar',
        name: 'appbar-id',
        path: '/containment/appbar/:id',
        hidden: true,
        view: () => import('@tw/pages/containment/AppbarPage.vue'),
      },
      {
        text: 'Card',
        path: '/containment/card',
        view: () => import('@tw/pages/containment/CardPage.vue'),
      },
      {
        text: 'Card',
        name: 'card-id',
        path: '/containment/card/:id',
        hidden: true,
        view: () => import('@tw/pages/containment/CardPage.vue'),
      },
      {
        text: 'SideDrawer',
        path: '/containment/side-drawer',
        view: () => import('@tw/pages/containment/SideDrawerPage.vue'),
      },
      {
        text: 'SideDrawer',
        name: 'side-drawer-id',
        path: '/containment/side-drawer/:id',
        hidden: true,
        view: () => import('@tw/pages/containment/SideDrawerPage.vue'),
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
        view: () => import('@tw/pages/elements/AlertPage.vue'),
      },
      {
        text: 'Alert',
        name: 'alert-id',
        path: '/elements/alert/:id',
        hidden: true,
        view: () => import('@tw/pages/elements/AlertPage.vue'),
      },
      {
        text: 'Avatar',
        path: '/elements/avatar',
        view: () => import('@tw/pages/elements/AvatarPage.vue'),
      },
      {
        text: 'Avatar',
        name: 'avatar-id',
        path: '/elements/avatar/:id',
        hidden: true,
        view: () => import('@tw/pages/elements/AvatarPage.vue'),
      },
      {
        text: 'Badge',
        path: '/elements/badge',
        view: () => import('@tw/pages/elements/BadgePage.vue'),
      },
      {
        text: 'Badge',
        name: 'badge-id',
        path: '/elements/badge/:id',
        hidden: true,
        view: () => import('@tw/pages/elements/BadgePage.vue'),
      },
      {
        text: 'Dropdown Menu',
        path: '/elements/dropdown-menu',
        view: () => import('@tw/pages/elements/DropdownMenuPage.vue'),
      },
      {
        text: 'Dropdown Menu',
        name: 'dropdown-menu-id',
        path: '/elements/dropdown-menu/:id',
        hidden: true,
        view: () => import('@tw/pages/elements/DropdownMenuPage.vue'),
      },
      {
        text: 'Image Placeholder',
        path: '/elements/image-placeholder',
        view: () => import('@tw/pages/elements/ImageHolderPage.vue'),
      },
      {
        text: 'Image Placeholder',
        name: 'image-placeholder-id',
        path: '/elements/image-placeholder/:id',
        hidden: true,
        view: () => import('@tw/pages/elements/ImageHolderPage.vue'),
      },
      {
        text: 'Image Uploader',
        path: '/elements/image-uploader',
        view: () => import('@tw/pages/elements/ImageUploaderPage.vue'),
      },
      {
        text: 'List Tile',
        path: '/elements/list-tile',
        view: () => import('@tw/pages/elements/ListTilePage.vue'),
      },
      {
        text: 'List Tile',
        name: 'list-tile-id',
        path: '/elements/list-tile/:id',
        hidden: true,
        view: () => import('@tw/pages/elements/ListTilePage.vue'),
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
        view: () => import('@tw/pages/icons/IconPage.vue'),
      },
      {
        text: 'Icon',
        name: 'icon-id',
        path: '/icons/icon/:id',
        hidden: true,
        view: () => import('@tw/pages/icons/IconPage.vue'),
      },
      {
        text: 'Fontawesome Icon',
        path: '/icons/fontawesome',
        view: () => import('@tw/pages/icons/FontawesomePage.vue'),
      },
      {
        text: 'Fontawesome Icon',
        name: 'fontawesome-icon-id',
        path: '/icons/fontawesome/:id',
        hidden: true,
        view: () => import('@tw/pages/icons/FontawesomePage.vue'),
      },
      {
        text: 'Spinner Icon',
        path: '/icons/spinner',
        view: () => import('@tw/pages/icons/SpinnerIconPage.vue'),
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
        view: () => import('@tw/pages/inputs/CheckboxPage.vue'),
      },
      {
        text: 'Checkbox',
        name: 'checkbox-id',
        path: '/inputs/checkbox/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/CheckboxPage.vue'),
      },
      {
        text: 'Radio Button',
        path: '/inputs/radio',
        view: () => import('@tw/pages/inputs/RadioPage.vue'),
      },
      {
        text: 'Radio Button',
        name: 'radio-button-id',
        path: '/inputs/radio/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/RadioPage.vue'),
      },
      {
        text: 'Switch Button',
        path: '/inputs/switch',
        view: () => import('@tw/pages/inputs/SwitchPage.vue'),
      },
      {
        text: 'Text Field',
        path: '/inputs/text-field',
        view: () => import('@tw/pages/inputs/TextFieldPage.vue'),
      },
      {
        text: 'Text Field',
        name: 'text-field-id',
        path: '/inputs/text-field/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/TextFieldPage.vue'),
      },
      {
        text: 'TextArea Field',
        path: '/inputs/text-area',
        view: () => import('@tw/pages/inputs/TextAreaPage.vue'),
      },
      {
        text: 'TextArea Field',
        name: 'text-area-field-id',
        path: '/inputs/text-area/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/TextAreaPage.vue'),
      },
      {
        text: 'Numeric Field',
        path: '/inputs/numeric-field',
        view: () => import('@tw/pages/inputs/NumericFieldPage.vue'),
      },
      {
        text: 'Numeric Field',
        name: 'numeric-field-id',
        path: '/inputs/numeric-field/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/NumericFieldPage.vue'),
      },
      {
        text: 'DateTime Field',
        path: '/inputs/datetime-field',
        view: () => import('@tw/pages/inputs/DateTimeFieldPage.vue'),
      },
      {
        text: 'DateTime Field',
        name: 'date-time-field-id',
        path: '/inputs/datetime-field/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/DateTimeFieldPage.vue'),
      },
      {
        text: 'Chip Field',
        path: '/inputs/chip-field',
        view: () => import('@tw/pages/inputs/ChipFieldPage.vue'),
      },
      {
        text: 'Combobox',
        path: '/inputs/combobox',
        view: () => import('@tw/pages/inputs/ComboboxPage.vue'),
      },
      {
        text: 'Combobox',
        name: 'combobox-id',
        path: '/inputs/combobox/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/ComboboxPage.vue'),
      },
      {
        text: 'Listbox',
        path: '/inputs/listbox',
        view: () => import('@tw/pages/inputs/ListboxPage.vue'),
      },
      {
        text: 'Listbox',
        name: 'listbox-id',
        path: '/inputs/listbox/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/ListboxPage.vue'),
      },
      {
        text: 'Toggle Field',
        path: '/inputs/toggle-field',
        view: () => import('@tw/pages/inputs/ToggleFieldPage.vue'),
      },
      {
        text: 'Toggle Field',
        name: 'toggle-field-id',
        path: '/inputs/toggle-field/:id',
        hidden: true,
        view: () => import('@tw/pages/inputs/ToggleFieldPage.vue'),
      },
      {
        text: 'Search Field',
        path: '/inputs/search-field',
        view: () => import('@tw/pages/inputs/DemoSearchField.vue'),
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
        view: () => import('@tw/pages/navigations/BreadcrumbPage.vue'),
      },
      {
        text: 'Breadcrumb',
        name: 'breadcrumb-id',
        path: '/navigations/breadcrumb/:id',
        hidden: true,
        view: () => import('@tw/pages/navigations/BreadcrumbPage.vue'),
      },
      {
        text: 'List Nav',
        path: '/navigations/list-nav',
        view: () => import('@tw/pages/navigations/ListNavPage.vue'),
      },
      {
        text: 'List Nav',
        name: 'list-nav-id',
        path: '/navigations/list-nav/:id',
        hidden: true,
        view: () => import('@tw/pages/navigations/ListNavPage.vue'),
      },
      {
        text: 'Tabs',
        path: '/navigations/tabs',
        view: () => import('@tw/pages/navigations/TabsPage.vue'),
      },
      {
        text: 'Tabs',
        name: 'tabs-id',
        path: '/navigations/tabs/:id',
        hidden: true,
        view: () => import('@tw/pages/navigations/TabsPage.vue'),
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
        view: () => import('@tw/pages/overlays/LightboxPage.vue'),
      },
      {
        text: 'Lightbox',
        name: 'lightbox-id',
        path: '/overlays/lightbox/:id',
        hidden: true,
        view: () => import('@tw/pages/overlays/LightboxPage.vue'),
      },
      {
        text: 'Mask Loader',
        path: '/overlays/mask-loader',
        view: () => import('@tw/pages/overlays/MaskLoaderPage.vue'),
      },
      {
        text: 'Mask Loader',
        name: 'mask-loader-id',
        path: '/overlays/mask-loader/:id',
        hidden: true,
        view: () => import('@tw/pages/overlays/MaskLoaderPage.vue'),
      },
      {
        text: 'Modal',
        path: '/overlays/modal',
        view: () => import('@tw/pages/overlays/ModalPage.vue'),
      },
      {
        text: 'Modal',
        name: 'modal-id',
        path: '/overlays/modal/:id',
        hidden: true,
        view: () => import('@tw/pages/overlays/ModalPage.vue'),
      },
      {
        text: 'Notification',
        path: '/overlays/notification',
        view: () => import('@tw/pages/overlays/NotificationPage.vue'),
      },
      {
        text: 'Overlay',
        path: '/overlays/overlay',
        view: () => import('@tw/pages/overlays/OverlayPage.vue'),
      },
      {
        text: 'Popover',
        path: '/overlays/popover',
        view: () => import('@tw/pages/overlays/PopoverPage.vue'),
      },
      {
        text: 'Popover',
        name: 'popover-id',
        path: '/overlays/popover/:id',
        hidden: true,
        view: () => import('@tw/pages/overlays/PopoverPage.vue'),
      },
      {
        text: 'Tooltip',
        path: '/overlays/tooltip',
        view: () => import('@tw/pages/overlays/TooltipPage.vue'),
      },
      {
        text: 'Tooltip',
        name: 'tooltip-id',
        path: '/overlays/tooltip/:id',
        hidden: true,
        view: () => import('@tw/pages/overlays/TooltipPage.vue'),
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
        view: () => import('@tw/pages/progress/ProgressPage.vue'),
      },
      {
        text: 'Progress',
        name: 'progress-id',
        path: '/progress-control/progress/:id',
        hidden: true,
        view: () => import('@tw/pages/progress/ProgressPage.vue'),
      },
      {
        text: 'Progress Bar',
        path: '/progress-control/progress-bar',
        view: () => import('@tw/pages/progress/ProgressBarPage.vue'),
      },
      {
        text: 'Progress Bar',
        name: 'progress-bar-id',
        path: '/progress-control/progress-bar/:id',
        hidden: true,
        view: () => import('@tw/pages/progress/ProgressBarPage.vue'),
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
        view: () => import('@tw/pages/pickers/ColorPickerPage.vue'),
      },
      {
        text: 'Color Picker',
        name: 'color-picker-id',
        path: '/pickers/color-picker/:id',
        hidden: true,
        view: () => import('@tw/pages/pickers/ColorPickerPage.vue'),
      },
      {
        text: 'Date Picker',
        path: '/pickers/datepicker',
        view: () => import('@tw/pages/pickers/DatePickerPage.vue'),
      },
      {
        text: 'Date Picker',
        name: 'date-picker-id',
        path: '/pickers/datepicker/:id',
        hidden: true,
        view: () => import('@tw/pages/pickers/DatePickerPage.vue'),
      },
    ],
  },
  {
    text: 'Shadows',
    group: 'Reference',
    path: '/reference/shadow',
    view: () => import('@tw/pages/references/DemoShadow.vue'),
  },
];
