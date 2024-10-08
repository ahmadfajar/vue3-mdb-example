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

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    DemoBlock: typeof DemoBlock;
  }

  interface ComponentCustomProperties {
    $route: typeof RouteLocationNormalizedLoaded;
    $router: typeof Router;
  }
}
