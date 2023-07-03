import type { RouteComponent } from 'vue-router'

export declare type TNavigationRecord = {
  label: string;
  group: string;
  disabled?: boolean;
  path: string;
  view: RouteComponent;
};

const viewResolver = async (name: string) => await import(/* @vite-ignore */ '../views/' + name + '.vue');

export const menuNavs: TNavigationRecord[] = [{
  label: 'Alert',
  group: 'Components',
  path: '/components/alert',
  view: viewResolver('Components/DemoAlert')
}, {
  label: 'AppBar',
  group: 'Components',
  path: '/components/appbar',
  view: viewResolver('Components/DemoAppbar')
}, {
  label: 'Avatar',
  group: 'Components',
  path: '/components/avatar',
  view: viewResolver('Components/DemoAvatar')
}, {
  label: 'Badge',
  group: 'Components',
  path: '/components/badge',
  view: viewResolver('Components/DemoBadge')
}, {
  label: 'Button',
  group: 'Components',
  path: '/components/button',
  view: viewResolver('Components/DemoButton')
}, {
  label: 'Toggle Button',
  group: 'Components',
  path: '/components/button-toggle',
  view: viewResolver('Components/DemoToggleButton')
}, {
  label: 'Card',
  group: 'Components',
  path: '/components/card',
  view: viewResolver('Components/DemoCard')
}, {
  label: 'Checkbox',
  group: 'Components',
  path: '/components/checkbox',
  view: viewResolver('Components/DemoCheckbox')
}, {
  label: 'Chip',
  group: 'Components',
  path: '/components/chip',
  view: viewResolver('Components/DemoChip')
}, {
  label: 'Chip Group',
  group: 'Components',
  path: '/components/chip-group',
  view: viewResolver('Components/DemoChipGroup')
}, {
  label: 'Icon',
  group: 'Components',
  path: '/components/icon',
  view: viewResolver('Components/DemoIcon')
}, {
  label: 'List Nav',
  group: 'Components',
  path: '/components/list-nav',
  view: viewResolver('Components/DemoListNav')
}, {
  label: 'List Tile',
  group: 'Components',
  path: '/components/list-tile',
  view: viewResolver('Components/DemoListTile')
}, {
  label: 'Mask Loader',
  group: 'Components',
  path: '/components/mask-loader',
  view: viewResolver('Components/DemoMaskLoader')
}, {
  label: 'Progress Control',
  group: 'Components',
  path: '/components/progress',
  view: viewResolver('Components/DemoProgress')
}, {
  label: 'Progress Bar',
  group: 'Components',
  path: '/components/progress-bar',
  view: viewResolver('Components/DemoProgressBar')
}, {
  label: 'Radio',
  group: 'Components',
  path: '/components/radio',
  view: viewResolver('Components/DemoRadio')
}, {
  label: 'Ripple',
  group: 'Components',
  path: '/components/ripple',
  view: viewResolver('Components/DemoRipple')
}, {
  label: 'SideDrawer',
  group: 'Components',
  path: '/components/side-drawer',
  view: viewResolver('Components/DemoSideDrawer')
}, {
  label: 'Tabs',
  group: 'Components',
  path: '/components/tabs',
  view: viewResolver('Components/DemoTabs')
}, {
  label: 'Text Field',
  group: 'Components',
  path: '/components/text-field',
  view: viewResolver('Components/DemoTextField')
}, {
  label: 'TextArea Field',
  group: 'Components',
  path: '/components/text-area',
  view: viewResolver('Components/DemoTextArea')
}, {
  label: 'Switch',
  group: 'Components',
  path: '/components/switch',
  view: viewResolver('Components/DemoSwitch')
}, {
  label: 'Tooltips',
  group: 'Components',
  path: '/components/tooltip',
  view: viewResolver('Components/DemoTooltip')
}, {
  label: 'Popover',
  group: 'Components',
  path: '/components/popover',
  view: viewResolver('Components/DemoPopover')
}, {
  label: 'Dropdown Menu',
  group: 'Components',
  path: '/components/dropdown-menu',
  view: viewResolver('Components/DemoDropdownMenu')
}, {
  label: 'Color Picker',
  group: 'Components',
  path: '/components/color-picker',
  view: viewResolver('Components/DemoColorPicker')
}, {
  label: 'Chip Field',
  group: 'Components',
  path: '/components/chip-field',
  view: viewResolver('Components/DemoChipField')
}, {
  label: 'Toggle Field',
  group: 'Components',
  path: '/components/toggle-field',
  view: viewResolver('Components/DemoToggleField')
}, {
  label: 'Numeric Field',
  group: 'Components',
  path: '/components/numeric-field',
  view: viewResolver('Components/DemoNumericField')
}, {
  label: 'Search Field',
  group: 'Components',
  path: '/components/search-field',
  view: viewResolver('Components/DemoSearchField')
}, {
  label: 'Date Picker',
  group: 'Components',
  path: '/components/datepicker',
  view: viewResolver('Components/DemoDatePicker')
}, {
  label: 'DateTime Field',
  group: 'Components',
  path: '/components/datetime-field',
  view: viewResolver('Components/DemoDateTimeField')
}, {
  label: 'Listbox',
  group: 'Components',
  path: '/components/listbox',
  view: viewResolver('Components/DemoListbox')
}, {
  label: 'Combobox',
  group: 'Components',
  path: '/components/combobox',
  view: viewResolver('Components/DemoCombobox')
}, {
  label: 'Modal',
  group: 'Components',
  path: '/components/modal',
  view: viewResolver('Components/DemoModal')
}, {
  label: 'Lightbox',
  group: 'Components',
  path: '/components/lightbox',
  view: viewResolver('Components/DemoLightbox')
}, {
  label: 'Color Variants',
  group: 'Reference',
  path: '/reference/color',
  view: viewResolver('Color/DemoColor')
}, {
  label: 'Notification',
  group: 'Reference',
  path: '/reference/notification',
  view: viewResolver('Reference/DemoNotification')
}, {
  label: 'Transitions',
  group: 'Reference',
  path: '/reference/transition',
  view: viewResolver('Reference/DemoTransition')
}, {
  label: 'Shadows',
  group: 'Reference',
  path: '/reference/shadow',
  view: viewResolver('Reference/DemoShadow')
}]
