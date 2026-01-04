<template>
  <BsCard class="w-full" shadow style="max-width: 440px">
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
