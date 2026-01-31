<script setup lang="ts"></script>
<template>
  <div class="flex flex-wrap md-gap-4">
    <div class="relative">
      <BsButton icon="inbox">
        Inbox
        <BsBadge class="ms-3" color="bg-gray-200 text-dark" style="margin-right: -14px" type="pill">
          99+
        </BsBadge>
      </BsButton>
    </div>
    <div class="relative">
      <BsButton flat icon="notifications_filled" mode="icon" />
      <BsBadge class="absolute start-100 top-0 translate-middle" type="pill" variant="danger">
        9+
      </BsBadge>
    </div>
    <div class="w-1"></div>
    <div class="relative">
      <BsButton flat icon="notifications_filled" mode="icon" />
      <BsBadge
        class="absolute start-50 top-0 rounded-circle p-2 translate-middle-y"
        variant="danger"
      />
    </div>
  </div>
</template>
