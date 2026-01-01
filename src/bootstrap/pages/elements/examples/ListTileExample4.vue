<script setup lang="ts"></script>

<template>
  <BsCard class="max-w-100" shadow>
    <BsCardMedia title="Jonathan Smith">
      <img
        alt="image"
        src="https://fastly.picsum.photos/id/91/600/350.jpg?blur=2&hmac=c-eoJJmkWO0d7n63mHebn8XQmXf9GYe8_LnjrbiK-aU"
      />
    </BsCardMedia>
    <BsListView>
      <BsListTile>
        <BsListTileLeading class="text-info" icon="phone" />
        <BsListTileContent>
          <BsListTileTitle class="font-weight-semibold"> 0821-5555-1234 </BsListTileTitle>
          <BsListTileSubtitle> Mobile | Indonesia </BsListTileSubtitle>
        </BsListTileContent>
      </BsListTile>
      <BsListTile>
        <BsListTileLeading class="md-has-icon" size="24" />
        <BsListTileContent>
          <BsListTileTitle class="font-weight-semibold"> +6221-4444-6789 </BsListTileTitle>
          <BsListTileSubtitle> Work | Indonesia </BsListTileSubtitle>
        </BsListTileContent>
      </BsListTile>
      <BsDivider left-indent="54" />
      <BsListTile>
        <BsListTileLeading class="text-info" icon="email" />
        <BsListTileContent>
          <BsListTileTitle class="font-weight-semibold">
            jonathan.smith@company.com
          </BsListTileTitle>
          <BsListTileSubtitle> Work </BsListTileSubtitle>
        </BsListTileContent>
      </BsListTile>
      <BsListTile>
        <BsListTileLeading class="md-has-icon" size="24" />
        <BsListTileContent>
          <BsListTileTitle class="font-weight-semibold">
            jonathan.smith212@example.com
          </BsListTileTitle>
          <BsListTileSubtitle> Personal </BsListTileSubtitle>
        </BsListTileContent>
      </BsListTile>
      <BsDivider left-indent="54" />
      <BsListTile>
        <BsListTileLeading class="text-info" icon="place" />
        <BsListTileContent>
          <BsListTileTitle class="font-weight-semibold"> 1400 Main Street </BsListTileTitle>
          <BsListTileSubtitle> Jakarta, Indonesia </BsListTileSubtitle>
        </BsListTileContent>
      </BsListTile>
    </BsListView>
  </BsCard>
</template>
