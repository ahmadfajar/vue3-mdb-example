<script setup lang="ts"></script>
<template>
  <div class="flex flex-wrap md-gap-4">
    <div class="relative">
      <BsButton icon="inbox">
        Inbox
        <BsBadge
          class="ms-4 -me-3.5"
          color="bg-gray-200 text-gray-800 dark:bg-gray-500 dark:text-gray-100"
          type="pill"
        >
          99+
        </BsBadge>
      </BsButton>
    </div>
    <div class="relative">
      <BsButton flat icon="notifications_filled" mode="icon" />
      <BsBadge
        class="absolute left-full top-0"
        style="transform: translate(-50%, -50%)"
        type="pill"
        variant="danger"
      >
        9+
      </BsBadge>
    </div>
    <div class="w-1"></div>
    <div class="relative">
      <BsButton flat icon="notifications_filled" mode="icon" />
      <BsBadge
        class="absolute left-[65%] top-1 rounded-circle p-2"
        style="transform: translateY(-50%)"
        variant="danger"
      />
    </div>
  </div>
</template>
