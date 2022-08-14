<template>
  <div class="docs-color-table">
    <div v-if="palette === 'bootstrap'" class="row">
      <div
        v-for="(value, key) in themeColors"
        :key="key"
        class="col-md-6 col-xl-4 mb-4">
        <div :class="bootstrapColor(key)" class="d-flex p-3 md-shadow-1">
          <span class="flex-grow-1">{{ key }}</span>
          <span class="opacity-50">{{ value.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'grays'" class="row">
      <div class="col-md-6 col-xl-4">
        <div
          v-for="(value, key) in grayColors"
          :key="key"
          :class="grayColor(key)"
          class="p-3 d-flex">
          <span class="flex-grow-1">grey-{{ key }}</span>
          <span class="opacity-50">{{ value.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'fullColor'" class="row">
      <div
        v-for="(items, key) in fullColors"
        :key="key"
        class="col-md-6 col-xl-4 mb-4">
        <div
          v-for="(value, prop) in items"
          :key="key + prop"
          :class="fullColorInfo(key, prop)"
          class="p-3 d-flex">
          <span class="flex-grow-1">{{ fullColorName(key, prop) }}</span>
          <span class="opacity-50">{{ value.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'material'" class="row">
      <div
        v-for="(item, key) in materialColors"
        :key="key"
        class="mb-4 col-md-6 col-xl-3">
        <div
          :class="['bg-' + materialColorInfo(item)[0].color]"
          class="docs-color-block text-white">
          <div>{{ materialColorInfo(item)[0].color }}</div>
          <div>{{ materialColorInfo(item)[0].value.toUpperCase() }}</div>
        </div>
        <div
          :class="['bg-' + materialColorInfo(item)[1].color]"
          class="md-shadow-1 docs-color-block text-white">
          <div>{{ materialColorInfo(item)[1].color }}</div>
          <div>{{ materialColorInfo(item)[1].value.toUpperCase() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { materialColors, themeColors, grayColors } from './themeColors'
import { fullColors } from './fullColors'

function bootstrapColor (name: string) {
  return {
    ['bg-' + name]: true,
    'text-black': ['lime', 'yellow', 'amber', 'white', 'light', 'light-grey'].includes(name),
    'text-white': !['lime', 'yellow', 'amber', 'white', 'light', 'light-grey'].includes(name)
  }
}

function grayColor (name: string) {
  return {
    [`bg-grey-${name}`]: true,
    'text-black': ['100', '200', '300', '400', '500'].includes(name),
    'text-white': !['100', '200', '300', '400', '500'].includes(name)
  }
}

function materialColorInfo (color: object) {
  const keys = Object.keys(color)
  const values = Object.values(color)

  return [
    {
      color: keys[0],
      value: values[0]
    },
    {
      color: keys[1],
      value: values[1]
    }
  ]
}

function fullColorInfo (base: string, prop: string) {
  return {
    [`bg-${base}`]: true,
    [prop]: prop !== 'base',
    'text-white': ![
      'lighten-5',
      'lighten-4',
      'lighten-3',
      'lighten-2',
      'lighten-1',
      'accent-1',
      'accent-2',
      'accent-3'
    ].includes(prop) && !(['lime', 'yellow', 'amber'].includes(base) && prop === 'base'),
    'text-black':
      [
        'lighten-5',
        'lighten-4',
        'lighten-3',
        'lighten-2',
        'lighten-1',
        'accent-1',
        'accent-2',
        'accent-3'
      ].includes(prop) || (['lime', 'yellow', 'amber'].includes(base) && prop === 'base')
  }
}

function fullColorName (base: string, prop: string) {
  if (prop === 'base') {
    return base
  } else {
    return `${base} ${prop}`
  }
}

export default defineComponent({
  name: 'ColorPalette',
  props: {
    palette: {
      type: String,
      default: undefined
    }
  },
  setup () {
    return {
      materialColors,
      themeColors,
      grayColors,
      fullColors,
      bootstrapColor,
      grayColor,
      materialColorInfo,
      fullColorInfo,
      fullColorName
    }
  }
})
</script>

<style lang="scss">
.docs-color-block {
  padding: 1.5rem;
  text-align: center;
}
</style>
