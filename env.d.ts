/// <reference types="vite/client" />
/// <reference types="vue-mdbootstrap/component" />

import { AllowedComponentProps, ComponentCustomProps, VNode, VNodeProps } from 'vue';

declare interface TypesConfig {}

export declare const DemoBlock: {
  new (): {
    $props: AllowedComponentProps & ComponentCustomProps & VNodeProps;
    $slots: {
      default?: () => VNode[];
    };
  };
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DemoBlock: TypesConfig extends Record<'DemoBLock', infer T> ? T : typeof DemoBlock;
  }
}
