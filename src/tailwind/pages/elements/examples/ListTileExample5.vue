<script setup lang="ts">
import { ref } from 'vue';

const enableFiltering = ref(false);
const enablePassword = ref(false);
const enableNotification = ref(false);
const enableSound = ref(false);
const enableWidget = ref(false);

function toggleEnableNotification() {
  enableNotification.value = !enableNotification.value;
}

function toggleEnableSound() {
  enableSound.value = !enableSound.value;
}

function toggleEnableWidget() {
  enableWidget.value = !enableWidget.value;
}
</script>

<template>
  <BsApp class="p-2">
    <BsCard class="w-full max-w-100 mx-auto" shadow>
      <BsAppbar class="bg-indigo-700">
        <BsButton color="light" flat icon="arrow_back" mode="icon"></BsButton>
        <BsAppbarTitle class="text-light" title="Setting"></BsAppbarTitle>
      </BsAppbar>
      <BsListView individual-state>
        <BsSubheader>User Controls</BsSubheader>
        <BsListTile>
          <BsListTileContent multi-line>
            <BsListTile-title class="font-weight-semibold">Content Filtering</BsListTile-title>
            <BsListTileSubtitle class="text-subtle-secondary">
              Set the content filtering level to restrict appts that can be downloaded
            </BsListTileSubtitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsSwitch v-model="enableFiltering" :value="true" />
          </BsListTileAction>
        </BsListTile>
        <BsListTile>
          <BsListTileContent multi-line>
            <BsListTile-title class="font-weight-semibold">Password</BsListTile-title>
            <BsListTileSubtitle class="text-subtle-secondary">
              Require password for purchase or use password to restrict purchase
            </BsListTileSubtitle>
          </BsListTileContent>
          <BsListTileAction center>
            <BsSwitch v-model="enablePassword" :value="true" />
          </BsListTileAction>
        </BsListTile>
        <BsDivider />
        <bs-subheader>General</bs-subheader>
        <BsListTile navigable @click.stop="toggleEnableNotification()">
          <BsListTileAction>
            <BsCheckbox :model-value="enableNotification" :value="true" />
          </BsListTileAction>
          <BsListTileContent multi-line>
            <BsListTile-title class="font-weight-semibold">Notifications</BsListTile-title>
            <BsListTileSubtitle class="text-subtle-secondary">
              Notify me about updates to apps or games that I downloaded
            </BsListTileSubtitle>
          </BsListTileContent>
        </BsListTile>
        <BsListTile navigable @click.stop="toggleEnableSound()">
          <BsListTileAction>
            <BsCheckbox :model-value="enableSound" :value="true" />
          </BsListTileAction>
          <BsListTileContent multi-line>
            <BsListTile-title class="font-weight-semibold">Sound</BsListTile-title>
            <BsListTileSubtitle class="text-subtle-secondary">
              Auto-update apps at any time. Data charges may apply
            </BsListTileSubtitle>
          </BsListTileContent>
        </BsListTile>
        <BsListTile navigable @click.stop="toggleEnableWidget()">
          <BsListTileAction>
            <BsCheckbox :model-value="enableWidget" :value="true" />
          </BsListTileAction>
          <BsListTileContent multi-line>
            <BsListTile-title class="font-weight-semibold">Auto-add widgets</BsListTile-title>
            <BsListTileSubtitle class="text-subtle-secondary">
              Automatically add home screen widgets when downloads complete
            </BsListTileSubtitle>
          </BsListTileContent>
        </BsListTile>
      </BsListView>
    </BsCard>
  </BsApp>
</template>
