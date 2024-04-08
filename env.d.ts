/// <reference types="vite/client" />
/// <reference types="vue-mdbootstrap/component" />

import { AllowedComponentProps, ComponentCustomProps, VNode, VNodeProps } from 'vue';

export declare const DemoBlock: {
  new (): {
    $props: AllowedComponentProps & ComponentCustomProps & VNodeProps;
    $slots: {
      default?: () => VNode[];
    };
  };
};

declare module 'vue' {
  export interface GlobalComponents {
    DemoBlock: typeof DemoBlock;
  }
}
