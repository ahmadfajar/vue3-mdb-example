<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="btn in variants.slice(0, 19)" :key="btn">
        <BsButton :color="btn" class="mb-3">
          {{ toTitleCase(btn) }}
        </BsButton>
      </template>
    </div>
    <h2 class="mt-5">
      Rounded Style (Bootstrap Button)
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="btn in variants.slice(0, 19)" :key="btn">
        <BsButton
          :color="btn"
          :pill="false"
          class="mb-3"
          rounded>
          {{ toTitleCase(btn) }}
        </BsButton>
      </template>
    </div>
    <h2 class="mt-5">
      Rectangle Style
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="btn in variants.slice(0, 19)" :key="btn">
        <BsButton
          :color="btn"
          :pill="false"
          class="mb-3">
          {{ toTitleCase(btn) }}
        </BsButton>
      </template>
    </div>
    <h2 class="mt-5">
      Raised Style (Elevated Button)
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="btn in variants.slice(0, 19)" :key="btn">
        <BsButton
          :color="btn"
          class="mb-3"
          raised>
          {{ toTitleCase(btn) }}
        </BsButton>
      </template>
    </div>
    <h2 class="mt-5">
      Outline Style (Outlined Button)
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="btn in variants" :key="btn">
        <BsButton
          :color="btn"
          class="mb-3"
          outlined>
          {{ toTitleCase(btn) }}
        </BsButton>
      </template>
    </div>
    <h2 class="mt-5">
      Flat Style (Text Button)
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <template v-for="btn in variants" :key="btn">
        <BsButton
          :color="btn"
          class="mb-3"
          flat>
          {{ toTitleCase(btn) }}
        </BsButton>
      </template>
    </div>
    <h2 class="mt-5">
      Button Size
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <div class="row align-items-center">
        <div class="col">
          <BsButton class="mb-3" size="xs">
            Extra Small Button
          </BsButton>
        </div>
        <div class="col">
          <BsButton
            class="mb-3"
            color="primary"
            size="sm">
            Small Button
          </BsButton>
        </div>
        <div class="col">
          <BsButton class="mb-3" color="success">
            Normal Button
          </BsButton>
        </div>
        <div class="col">
          <BsButton
            class="mb-3"
            color="danger"
            size="lg">
            Large Button
          </BsButton>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col">
          <BsButton
            :pill="false"
            class="mb-3"
            rounded
            size="xs">
            Extra Small Button
          </BsButton>
        </div>
        <div class="col">
          <BsButton
            :pill="false"
            class="mb-3"
            color="primary"
            rounded
            size="sm">
            Small Button
          </BsButton>
        </div>
        <div class="col">
          <BsButton
            :pill="false"
            class="mb-3"
            color="success"
            rounded>
            Normal Button
          </BsButton>
        </div>
        <div class="col">
          <BsButton
            :pill="false"
            class="mb-3"
            color="danger"
            rounded
            size="lg">
            Large Button
          </BsButton>
        </div>
      </div>
    </div>
    <h2 class="mt-5">
      Icon Inside Button
    </h2>
    <BsDivider/>
    <div class="mt-4">
      <div class="row text-center">
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="primary"
            icon="shopping_cart">
            Icon Left
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="secondary"
            icon="shopping_cart_outlined"
            icon-position="right">
            Icon Right
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="success"
            icon="shopping_cart_sharp"
            icon-flip="horizontal">
            Flip Horizontal
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="danger"
            icon="shopping_cart"
            icon-flip="vertical">
            Flip Vertical
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="orange"
            icon="shopping_cart"
            icon-flip="both">
            Flip Both
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="pink"
            icon="shopping_cart"
            icon-rotation="90">
            Rotate 90&deg;
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="unique"
            icon="shopping_cart"
            icon-rotation="180">
            Rotate 180&deg;
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="unique-color"
            icon="shopping_cart"
            icon-rotation="270">
            Rotate 270&deg;
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="danger-color-dark"
            icon="rotate_right"
            icon-spin>
            Spin Animation
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="stylish-color"
            icon="rotate_right"
            icon-position="right"
            icon-pulse>
            Pulse Animation
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton color="indigo">
            <template #icon>
              <BsIconSpinner size="22" spin/>
            </template>
            Custom Icon-Spin
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton color="purple" icon-position="right">
            <template #icon>
              <BsIconSpinner size="22" pulse/>
            </template>
            Custom Icon-Pulse
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="dark-green"
            icon="shopping_cart"
            icon-size="32">
            Icon Size=32
          </BsButton>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mb-3">
          <BsButton
            color="brown"
            icon="shopping_cart"
            icon-position="right"
            icon-size="32">
            Icon Size=32
          </BsButton>
        </div>
      </div>
    </div>
    <h4 class="mt-4">
      Button Icon
    </h4>
    <BsDivider/>
    <div class="mt-4">
      <BsButton
        :icon-size="iconXs"
        class="me-4"
        icon="shopping_cart"
        mode="icon"
        size="xs"/>
      <BsButton
        :icon-size="iconSm"
        class="me-4"
        icon="shopping_cart"
        mode="icon"
        size="sm"/>
      <BsButton
        mode="icon"
        class="me-4"
        icon="shopping_cart"/>
      <BsButton
        :icon-size="iconLg"
        icon="shopping_cart"
        mode="icon"
        size="lg"/>
    </div>
    <div class="mt-4">
      <BsButton
        :icon-size="iconXs"
        class="me-4"
        color="primary"
        icon="rotate_right"
        icon-spin
        mode="icon"
        size="xs"/>
      <BsButton
        :icon-size="iconSm"
        class="me-4"
        color="primary"
        icon="rotate_right"
        icon-spin
        mode="icon"
        size="sm"/>
      <BsButton
        mode="icon"
        class="me-4"
        color="primary"
        icon="rotate_right"
        icon-spin/>
      <BsButton
        :icon-size="iconLg"
        color="primary"
        icon="rotate_right"
        icon-spin
        mode="icon"
        size="lg"/>
    </div>
    <div class="mt-4">
      <BsButton
        :icon-size="iconXs"
        class="me-4"
        color="success"
        icon="rotate_right"
        icon-pulse
        mode="icon"
        size="xs"/>
      <BsButton
        :icon-size="iconSm"
        class="me-4"
        color="success"
        icon="rotate_right"
        icon-pulse
        mode="icon"
        size="sm"/>
      <BsButton
        mode="icon"
        class="me-4"
        color="success"
        icon="rotate_right"
        icon-pulse/>
      <BsButton
        :icon-size="iconLg"
        color="success"
        icon="rotate_right"
        icon-pulse
        mode="icon"
        size="lg"/>
    </div>
    <div class="mt-4">
      <BsButton
        mode="icon"
        class="me-4"
        color="danger">
        <template #icon>
          <BsIconSpinner size="22" spin/>
        </template>
      </BsButton>
      <BsButton
        mode="icon"
        color="danger"
        icon-position="right">
        <template #icon>
          <BsIconSpinner size="22" pulse/>
        </template>
      </BsButton>
    </div>
    <h4 class="mt-5">
      Transparent Button
    </h4>
    <BsDivider/>
    <div class="mt-4">
      <div class="row text-center">
        <div class="col-6 col-lg-3 bg-indigo p-3">
          <BsButton
            :pill="false"
            rounded
            transparent>
            Button
          </BsButton>
        </div>
        <div class="col-6 col-lg-3 bg-deep-purple p-3">
          <BsButton
            :pill="false"
            rounded
            transparent>
            Button
          </BsButton>
        </div>
        <div class="col-6 col-lg-3 bg-red p-3">
          <BsButton
            :pill="false"
            rounded
            transparent>
            Button
          </BsButton>
        </div>
        <div class="col-6 col-lg-3 bg-orange p-3">
          <BsButton
            :pill="false"
            rounded
            transparent>
            Button
          </BsButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const iconXs = 16
const iconSm = 22
// const iconMd = 24
const iconLg = 32
const variants = [
  'default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light-grey', 'light', 'dark',
  'pink', 'blue', 'indigo', 'default-color', 'default-color-dark', 'secondary-color',
  'secondary-color-dark', 'info-color-dark', 'success-color-dark', 'danger-color-dark',
  'warning-color-dark', 'blue-green-color', 'blue-green-color-dark', 'stylish-color',
  'stylish-color-dark', 'special-color', 'special-color-dark', 'unique-color', 'unique-color-dark'
]

function toTitleCase (text: string) {
  return text.toLowerCase()
    .split('-')
    .map(function (word: string) {
      return word.replace(word[0], word[0].toUpperCase())
    }).join(' ')
}

</script>

<style scoped>
</style>
