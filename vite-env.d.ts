/// <reference types="vite/client" />
/// <reference types="vue-mdbootstrap/component" />

import { AllowedComponentProps, ComponentCustomProps, VNode, VNodeProps } from 'vue';

declare const DemoBlock: {
  new (): {
    $props: AllowedComponentProps & ComponentCustomProps & VNodeProps;
    $slots: {
      default?: () => VNode[];
    };
  };
};

declare const ShowcaseBox: {
  new (): {
    $props: AllowedComponentProps &
      ComponentCustomProps &
      VNodeProps & { tpl?: string | null; tsc?: string | null };
    $slots: {
      content?: () => VNode[];
      'side-panel'?: () => VNode[];
    };
  };
};

declare module 'vue' {
  interface GlobalComponents {
    DemoBlock: typeof DemoBlock;
    ShowcaseBox: typeof ShowcaseBox;
  }

  // interface ComponentCustomProperties {
  //   $route: RouteLocationNormalizedLoaded;
  //   $router: Router;
  // }
}
