<template>
  <aside class="side-drawer shadow-lg">
    <div class="text-center mb-3">
      <img
        alt="Vue logo"
        src="./assets/logo.png"
        style="width: 128px"/>
    </div>
    <div class="drawer-body px-2">
      <ul class="side-nav-menu">
        <li class="link-nav-item">
          <RouterLink to="/components/alert">
            Alert
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/avatar">
            Avatar
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/badge">
            Badge
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/button">
            Button
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/button-toggle">
            Toggle Button
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/card">
            Card
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/chip">
            Chip
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/icon">
            Icon
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/mask-loader">
            Mask Loader
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/progress">
            Progress Control
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/progress-bar">
            Progress Bar
          </RouterLink>
        </li>
        <li class="link-nav-item">
          <RouterLink to="/components/ripple">
            Ripple
          </RouterLink>
        </li>
        <BsDivider/>
        <li class="link-nav-item">
          <RouterLink to="/reference/color">
            Color Variants
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
  <div class="body-content">
    <RouterView v-slot="{ Component }">
      <Transition name="ffade" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </RouterView>
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
#app {
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  max-width: 100%;

  .side-drawer {
    left: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    width: 300px;

    > .drawer-body {
      width: auto;
      overflow-y: auto;

      .side-nav-menu {
        list-style: none;
        padding-left: 0;

        > .link-nav-item {
          padding: .25rem 0;

          > a {
            color: inherit;
            display: block;
            text-decoration: none;
            padding: .5rem .75rem;

            &.router-link-active {
              background-color: var(--bs-gray-300);
              border-radius: var(--bs-border-radius-pill);
              color: var(--bs-primary);
              font-weight: 500;
            }
          }
        }
      }
    }
  }
  .body-content {
    margin-left: 300px;
    padding-bottom: 2rem;
    position: relative;
    width: auto;

    .demo-wrapper {
      padding-top: 2rem;

      @media (min-width: 1200px) {
        max-width: 1080px;
      }

      @media (max-width: 1480px) {
        padding-left: 2rem;
      }
    }
  }
}

.ffade-enter-active,
.ffade-leave-active {
  transition: opacity 0.2s ease;
}

.ffade-enter-from,
.ffade-leave-to {
  opacity: 0;
}
</style>
