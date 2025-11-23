/// <reference types="vite/client" />
/// <reference types="vue-mdbootstrap/component" />

import type { LinkItem } from '@shares/provider.ts';
import { AllowedComponentProps, ComponentCustomProps, VNode, VNodeProps } from 'vue';

declare type VueBaseProps = AllowedComponentProps & ComponentCustomProps & VNodeProps;

declare const DemoBlock: {
  new (): {
    $props: VueBaseProps;
    $slots: {
      default?: () => VNode[];
    };
  };
};

export declare interface ShoutBoxOptionProps {
  /**
   * Vue component template section source code.
   */
  tpl?: string | null;
  /**
   * Vue component script section source code.
   */
  tsc?: string | null;
  /**
   * ShoutBox side-panel state.
   */
  open?: boolean;
  /**
   * Expand and show template section source code automatically.
   *
   * This property will take effect only if script source code is not provided,
   * and as result, `Template` button will disappear.
   */
  expanded?: boolean;
  /**
   * Fired when this component's state is updated.
   */
  'onUpdate:open'?: (state: boolean) => void;

  /**
   * Fired when this component's state is updated.
   */
  '@update:open'?: (state: boolean) => void;
}

declare const ShoutBox: {
  new (): {
    $props: VueBaseProps & ShoutBoxOptionProps;
    $slots: {
      content?: () => VNode[];
      'side-panel'?: () => VNode[];
    };
    $emits: {
      (event: 'update:open', state: boolean): void;
    };
  };
};

declare const ContentLayout: {
  new (): {
    $props: VueBaseProps & { links?: LinkItem[] };
    $slots: {
      default?: () => VNode[];
    };
  };
};

declare module 'vue' {
  interface GlobalComponents {
    DemoBlock: typeof DemoBlock;
    ShoutBox: typeof ShoutBox;
    ContentLayout: typeof ContentLayout;
  }

  // interface ComponentCustomProperties {
  //   $route: RouteLocationNormalizedLoaded;
  //   $router: Router;
  // }
}
