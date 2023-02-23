import { RouteComponent } from 'vue-router'

export declare type TNavigationMenu = {
  label: string;
  title: string;
  group: string;
  disabled?: boolean;
  path: string;
  view: RouteComponent;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const viewResolver = (name: string) => require('./views/' + name).default

export const menuNavs: TNavigationMenu[] = [{
  label: 'Alert',
  title: 'Demo Alert',
  group: 'Components',
  path: '/components/alert',
  view: viewResolver('Components/DemoAlert')
}, {
  label: 'AppBar',
  title: 'Demo AppBar',
  group: 'Components',
  path: '/components/appbar',
  view: viewResolver('Components/DemoAppbar')
}, {
  label: 'Avatar',
  title: 'Demo Avatar',
  group: 'Components',
  path: '/components/avatar',
  view: viewResolver('Components/DemoAvatar')
}, {
  label: 'Badge',
  title: 'Demo Badge',
  group: 'Components',
  path: '/components/badge',
  view: viewResolver('Components/DemoBadge')
}, {
  label: 'Button',
  title: 'Demo Button',
  group: 'Components',
  path: '/components/button',
  view: viewResolver('Components/DemoButton')
}, {
  label: 'Toggle Button',
  title: 'Demo Toggle Button',
  group: 'Components',
  path: '/components/button-toggle',
  view: viewResolver('Components/DemoToggleButton')
}, {
  label: 'Card',
  title: 'Demo Card',
  group: 'Components',
  path: '/components/card',
  view: viewResolver('Components/DemoCard')
}, {
  label: 'Checkbox',
  title: 'Demo Checkbox',
  group: 'Components',
  path: '/components/checkbox',
  view: viewResolver('Components/DemoCheckbox')
}, {
  label: 'Chip',
  title: 'Demo Chip',
  group: 'Components',
  path: '/components/chip',
  view: viewResolver('Components/DemoChip')
}, {
  label: 'Chip Group',
  title: 'Demo Chip Group',
  group: 'Components',
  path: '/components/chip-group',
  view: viewResolver('Components/DemoChipGroup')
}, {
  label: 'Icon',
  title: 'Demo Icon',
  group: 'Components',
  path: '/components/icon',
  view: viewResolver('Components/DemoIcon')
}, {
  label: 'List Nav',
  title: 'Demo List Nav',
  group: 'Components',
  path: '/components/list-nav',
  view: viewResolver('Components/DemoListNav')
}, {
  label: 'List Tile',
  title: 'Demo List Tile',
  group: 'Components',
  path: '/components/list-tile',
  view: viewResolver('Components/DemoListTile')
}, {
  label: 'Mask Loader',
  title: 'Demo Mask Loader',
  group: 'Components',
  path: '/components/mask-loader',
  view: viewResolver('Components/DemoMaskLoader')
}, {
  label: 'Progress Control',
  title: 'Demo Progress Control',
  group: 'Components',
  path: '/components/progress',
  view: viewResolver('Components/DemoProgress')
}, {
  label: 'Progress Bar',
  title: 'Demo Progress Bar',
  group: 'Components',
  path: '/components/progress-bar',
  view: viewResolver('Components/DemoProgressBar')
}, {
  label: 'Radio',
  title: 'Demo Radio',
  group: 'Components',
  path: '/components/radio',
  view: viewResolver('Components/DemoRadio')
}, {
  label: 'Ripple',
  title: 'Demo Ripple',
  group: 'Components',
  path: '/components/ripple',
  view: viewResolver('Components/DemoRipple')
}, {
  label: 'SideDrawer',
  title: 'Demo SideDrawer',
  group: 'Components',
  path: '/components/side-drawer',
  view: viewResolver('Components/DemoSideDrawer')
}, {
  label: 'Tabs',
  title: 'Demo Tabs',
  group: 'Components',
  path: '/components/tabs',
  view: viewResolver('Components/DemoTabs')
}, {
  label: 'Text Field',
  title: 'Demo Text Field',
  group: 'Components',
  path: '/components/text-field',
  view: viewResolver('Components/DemoTextField')
}, {
  label: 'TextArea Field',
  title: 'Demo TextArea Field',
  group: 'Components',
  path: '/components/text-area',
  view: viewResolver('Components/DemoTextArea')
}, {
  label: 'Switch',
  title: 'Demo Switch',
  group: 'Components',
  path: '/components/switch',
  view: viewResolver('Components/DemoSwitch')
}, {
  label: 'Tooltips',
  title: 'Demo Tooltips',
  group: 'Components',
  path: '/components/tooltip',
  view: viewResolver('Components/DemoTooltip')
}, {
  label: 'Popover',
  title: 'Demo Popover',
  group: 'Components',
  path: '/components/popover',
  view: viewResolver('Components/DemoPopover')
}, {
  label: 'Dropdown Menu',
  title: 'Demo Dropdown Menu',
  group: 'Components',
  path: '/components/dropdown-menu',
  view: viewResolver('Components/DemoDropdownMenu')
}, {
  label: 'Color Picker',
  title: 'Demo Color Picker',
  group: 'Components',
  path: '/components/color-picker',
  view: viewResolver('Components/DemoColorPicker')
}, {
  label: 'Chip Field',
  title: 'Demo Chip Field',
  group: 'Components',
  path: '/components/chip-field',
  view: viewResolver('Components/DemoChipField')
}, {
  label: 'Toggle Field',
  title: 'Demo Toggle Field',
  group: 'Components',
  path: '/components/toggle-field',
  view: viewResolver('Components/DemoToggleField')
}, {
  label: 'Color Variants',
  title: 'Color Variants',
  group: 'Reference',
  path: '/reference/color',
  view: viewResolver('Color/DemoColor')
}]
