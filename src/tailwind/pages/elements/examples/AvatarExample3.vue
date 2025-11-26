<script setup lang="ts"></script>

<template>
  <BsCard class="max-w-100">
    <BsListView class="rounded">
      <BsListTile>
        <BsListTileLeading size="42">
          <BsAvatar circle img-src="https://ahmadfajar.github.io/img/kitty-2.jpg" size="40" />
        </BsListTileLeading>
        <BsListTileContent>
          <BsListTileTitle>Avatar using external image</BsListTileTitle>
        </BsListTileContent>
      </BsListTile>
      <BsDivider />
      <BsListTile>
        <BsListTileLeading size="42">
          <BsAvatar circle class="bg-teal-700 text-white" icon="account_circle" size="40" />
        </BsListTileLeading>
        <BsListTileContent>
          <BsListTileTitle>Avatar using Material Icon</BsListTileTitle>
        </BsListTileContent>
      </BsListTile>
      <BsDivider />
      <BsListTile>
        <BsListTileLeading size="42">
          <BsAvatar circle class="bg-purple-700 text-white" text="MD" size="40" />
        </BsListTileLeading>
        <BsListTileContent>
          <BsListTileTitle>This avatar created using ShortText</BsListTileTitle>
        </BsListTileContent>
      </BsListTile>
    </BsListView>
  </BsCard>
</template>
