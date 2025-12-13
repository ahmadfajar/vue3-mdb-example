import {
  type Reactive,
  reactive,
  ref,
  type Ref,
  shallowReadonly,
  type UnwrapNestedRefs,
} from 'vue';
import type { RouteLocationAsRelativeGeneric } from 'vue-router';

export declare type LinkItem = { text: string; location: RouteLocationAsRelativeGeneric };

export declare type ScreenSize = 'desktop' | 'tablet' | 'mobile';

export declare interface IMyAppProvider {
  get screenSize(): ScreenSize;
  set screenSize(value: ScreenSize);

  get appbarClass(): string[];
  set appbarClass(value: string[]);

  pageLinks: Readonly<UnwrapNestedRefs<Map<string, RouteLocationAsRelativeGeneric>>>;

  get linksCount(): number;
  clearPageLinks(): void;
  setPageLinks(links: Readonly<LinkItem[]>): void;

  sidebar: Reactive<{ open: boolean }>;
  toggleSidebar(): void;
}

export class MyAppProvider implements IMyAppProvider {
  public pageLinks: Readonly<UnwrapNestedRefs<Map<string, RouteLocationAsRelativeGeneric>>>;
  public sidebar: Reactive<{ open: boolean }>;

  private readonly _pageLinks: Reactive<Map<string, RouteLocationAsRelativeGeneric>>;
  private _screenSize: Ref<ScreenSize>;
  private _appbarClass: Ref<string[]>;

  constructor(screenSize: ScreenSize, appbarClass: string[]) {
    this._screenSize = ref(screenSize);
    this._appbarClass = ref(appbarClass);
    this._pageLinks = reactive(new Map<string, RouteLocationAsRelativeGeneric>());
    this.pageLinks = shallowReadonly(this._pageLinks);
    this.sidebar = reactive({ open: true });
  }

  get appbarClass(): string[] {
    return this._appbarClass.value;
  }

  set appbarClass(value: string[]) {
    this._appbarClass.value = value;
  }

  get screenSize(): ScreenSize {
    return this._screenSize.value;
  }

  set screenSize(value: ScreenSize) {
    this._screenSize.value = value;
  }

  get linksCount(): number {
    return this._pageLinks.size;
  }

  clearPageLinks() {
    this._pageLinks.clear();
  }

  setPageLinks(links: Readonly<LinkItem[]>): void {
    this._pageLinks.clear();

    for (const it of links) {
      this._pageLinks.set(it.text, it.location);
    }
  }

  toggleSidebar(): void {
    const oldState = this.sidebar.open;
    this.sidebar.open = !oldState;
  }
}
