<script setup lang="ts"></script>

<template>
  <BsCard class="w-full max-w-110" shadow>
    <BsListView>
      <BsListTile v-for="idx in 4" :key="idx">
        <BsListTileContent>
          <BsListTileTitle>Item #{{ idx }}</BsListTileTitle>
          <BsListTileSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </BsListTileSubtitle>
        </BsListTileContent>
      </BsListTile>
    </BsListView>
  </BsCard>
</template>
