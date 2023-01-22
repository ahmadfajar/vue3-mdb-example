import { RouteComponent } from 'vue-router'

export declare type INavigationMenu = {
  label: string;
  title: string;
  group: string;
  disabled?: boolean;
  path: string;
  view: RouteComponent;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const viewResolver = (name: string) => require('./views/' + name).default

export const menuNavs: INavigationMenu[] = [{
  label: 'Alert',
  title: 'Demo Alert',
  group: 'Group A',
  path: '/components/alert',
  view: viewResolver('Alert/DemoAlert')
}, {
  label: 'AppBar',
  title: 'Demo AppBar',
  group: 'Group A',
  path: '/components/appbar',
  view: viewResolver('Appbar/DemoAppbar')
}, {
  label: 'Avatar',
  title: 'Demo Avatar',
  group: 'Group A',
  path: '/components/avatar',
  view: viewResolver('Avatar/DemoAvatar')
}, {
  label: 'Badge',
  title: 'Demo Badge',
  group: 'Group A',
  path: '/components/badge',
  view: viewResolver('Badge/DemoBadge')
}, {
  label: 'Button',
  title: 'Demo Button',
  group: 'Group A',
  path: '/components/button',
  view: viewResolver('Button/DemoButton')
}, {
  label: 'Toggle Button',
  title: 'Demo Toggle Button',
  group: 'Group A',
  path: '/components/button-toggle',
  view: viewResolver('Button/DemoToggleButton')
}, {
  label: 'Card',
  title: 'Demo Card',
  group: 'Group A',
  path: '/components/card',
  view: viewResolver('Card/DemoCard')
}, {
  label: 'Checkbox',
  title: 'Demo Checkbox',
  group: 'Group A',
  path: '/components/checkbox',
  view: viewResolver('Checkbox/DemoCheckbox')
}, {
  label: 'Chip',
  title: 'Demo Chip',
  group: 'Group A',
  path: '/components/chip',
  view: viewResolver('Chip/DemoChip')
}, {
  label: 'Chip Group',
  title: 'Demo Chip Group',
  group: 'Group A',
  path: '/components/chip-group',
  view: viewResolver('Chip/DemoChipGroup')
}, {
  label: 'Icon',
  title: 'Demo Icon',
  group: 'Group A',
  path: '/components/icon',
  view: viewResolver('Icon/DemoIcon')
}, {
  label: 'List Nav',
  title: 'Demo List Nav',
  group: 'Group A',
  path: '/components/list-nav',
  view: viewResolver('ListView/DemoListNav')
}, {
  label: 'List Tile',
  title: 'Demo List Tile',
  group: 'Group A',
  path: '/components/list-tile',
  view: viewResolver('ListView/DemoListTile')
}, {
  label: 'Mask Loader',
  title: 'Demo Mask Loader',
  group: 'Group A',
  path: '/components/mask-loader',
  view: viewResolver('Progress/DemoMaskLoader')
}, {
  label: 'Progress Control',
  title: 'Demo Progress Control',
  group: 'Group A',
  path: '/components/progress',
  view: viewResolver('Progress/DemoProgress')
}, {
  label: 'Progress Bar',
  title: 'Demo Progress Bar',
  group: 'Group A',
  path: '/components/progress-bar',
  view: viewResolver('Progress/DemoProgressBar')
}, {
  label: 'Radio',
  title: 'Demo Radio',
  group: 'Group A',
  path: '/components/radio',
  view: viewResolver('Radio/DemoRadio')
}, {
  label: 'Ripple',
  title: 'Demo Ripple',
  group: 'Group A',
  path: '/components/ripple',
  view: viewResolver('Animation/DemoRipple')
}, {
  label: 'SideDrawer',
  title: 'Demo SideDrawer',
  group: 'Group A',
  path: '/components/side-drawer',
  view: viewResolver('Drawer/DemoSideDrawer')
}, {
  label: 'Tabs',
  title: 'Demo Tabs',
  group: 'Group A',
  path: '/components/tabs',
  view: viewResolver('Tabs/DemoTabs')
}, {
  label: 'Text Field',
  title: 'Demo Text Field',
  group: 'Group A',
  path: '/components/text-field',
  view: viewResolver('Field/DemoTextField')
}, {
  label: 'TextArea Field',
  title: 'Demo TextArea Field',
  group: 'Group A',
  path: '/components/text-area',
  view: viewResolver('Field/DemoTextArea')
}, {
  label: 'Color Variants',
  title: 'Color Variants',
  group: 'Group B',
  path: '/reference/color',
  view: viewResolver('Color/DemoColor')
}]
