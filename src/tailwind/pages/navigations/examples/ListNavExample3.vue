<script setup lang="ts"></script>

<template>
  <BsCard class="w-full max-w-100 mx-auto" shadow>
    <BsCardHeader class="flex items-center bg-purple-800 py-3">
      <BsButton color="light" flat icon="menu" mode="icon" />
      <div class="h4 font-weight-normal text-white flex-fill ps-3">Topics</div>
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
    <BsListView>
      <BsListNav>
        <BsListNavItem label="Attractions">
          <BsListNav child>
            <BsListNavItem label="Topic 1" />
            <BsListNavItem disabled label="Topic 2" />
            <BsListNavItem label="Topic 3" />
          </BsListNav>
        </BsListNavItem>
        <BsListNavItem label="Dining">
          <BsListNav child>
            <BsListNavItem label="Breakfast" />
            <BsListNavItem label="Sushi" />
            <BsListNavItem label="Pizza" />
          </BsListNav>
        </BsListNavItem>
        <BsListNavItem label="Education">
          <BsListNav child>
            <BsListNavItem label="Topic 1" />
            <BsListNavItem label="Topic 2">
              <BsListNav child>
                <BsListNavItem label="Topic 2.1" />
                <BsListNavItem label="Topic 2.2" />
                <BsListNavItem label="Topic 2.3" />
              </BsListNav>
            </BsListNavItem>
            <BsListNavItem label="Topic 3" />
          </BsListNav>
        </BsListNavItem>
        <BsListNavItem label="Family">
          <BsListNav child>
            <BsListNavItem label="Topic 1" />
            <BsListNavItem label="Topic 2" />
          </BsListNav>
        </BsListNavItem>
        <BsListNavItem label="Health">
          <BsListNav child>
            <BsListNavItem label="Topic 1" />
            <BsListNavItem label="Topic 2" />
            <BsListNavItem label="Topic 3" />
          </BsListNav>
        </BsListNavItem>
        <BsListNavItem label="Office">
          <BsListNav child>
            <BsListNavItem label="Topic 1" />
            <BsListNavItem label="Topic 2" />
          </BsListNav>
        </BsListNavItem>
        <BsListNavItem label="Promotions">
          <BsListNav child>
            <BsListNavItem label="Topic 1" />
            <BsListNavItem label="Topic 2">
              <BsListNav child>
                <BsListNavItem label="Topic 2.1" />
                <BsListNavItem label="Topic 2.2" />
                <BsListNavItem label="Topic 2.3" />
              </BsListNav>
            </BsListNavItem>
          </BsListNav>
        </BsListNavItem>
      </BsListNav>
    </BsListView>
  </BsCard>
</template>
