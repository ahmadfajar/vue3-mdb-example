/// <reference types="vite/client" />
/// <reference types="vue-mdbootstrap/component" />

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

export declare interface ShowcaseBoxOptionProps {
  /**
   * Vue component template section source code.
   */
  tpl?: string | null;
  /**
   * Vue component script section source code.
   */
  tsc?: string | null;
  /**
   * Showcase side-panel state.
   */
  open?: boolean;
  /**
   * Fired when the component's state is updated.
   */
  'onUpdate:open'?: (state: boolean) => void;

  /**
   * Fired when the component's state is updated.
   */
  '@update:open'?: (state: boolean) => void;
}

declare const ShowcaseBox: {
  new (): {
    $props: VueBaseProps & ShowcaseBoxOptionProps;
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
    $props: VueBaseProps;
    $slots: {
      default?: () => VNode[];
    };
  };
};

declare module 'vue' {
  interface GlobalComponents {
    DemoBlock: typeof DemoBlock;
    ShowcaseBox: typeof ShowcaseBox;
    ContentLayout: typeof ContentLayout;
  }

  // interface ComponentCustomProperties {
  //   $route: RouteLocationNormalizedLoaded;
  //   $router: Router;
  // }
}
