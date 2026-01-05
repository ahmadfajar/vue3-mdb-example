<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref(0);
</script>

<template>
  <BsCard shadow>
    <BsApp>
      <BsAppbar class="bg-indigo-600">
        <BsButton color="light" flat icon="menu" mode="icon" />
        <BsAppbarTitle class="text-white" title="Page Title" />
        <BsSpacer />
        <BsButton color="light" flat icon="more_vert" mode="icon" />
      </BsAppbar>
      <BsTabs v-model="activeTab" color="bg-indigo-600" variant="material">
        <BsTab label="Home">
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
          aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
          helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
          aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        </BsTab>
        <BsTab label="Person">
          Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
          Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan
          four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft
          beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
          assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.
        </BsTab>
        <BsTab label="Story">
          Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
          lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
          tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie
          helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
          Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
          mlkshk vice blog.
        </BsTab>
        <template #append-header>
          <BsButton class="me-3" color="light" flat icon="favorite_filled" mode="icon" />
        </template>
      </BsTabs>
    </BsApp>
  </BsCard>
</template>
