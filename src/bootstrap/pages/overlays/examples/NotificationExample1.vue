<script setup lang="ts"></script>

<template>
  <div>
    <BsButton {$colors} @{$click_events}>
      Show Notification
    </BsButton>
    <BsNotification />
  </div>
</template>
