<template>
  <div class="demo-wrapper container-lg mx-auto">
    <h2>Overview</h2>
    <BsDivider/>
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar
            class="bg-purple darken-3 rounded-top"
            shadow>
            <BsButton
              mode="icon"
              color="light-grey"
              icon="menu"
              flat/>
            <BsAppbarTitle title="Menus" class="text-white"/>
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="folder" label="My Files"/>
              <BsListNavItem icon="folder-shared" label="Shared with me"/>
              <BsListNavItem icon="star" label="Starred"/>
              <BsListNavItem icon="upload" label="Upload"/>
              <BsListNavItem icon="cloud_upload" label="Backup"/>
              <BsListNavItem icon="delete" label="Trash"/>
            </BsListNav>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
    <h2 class="mt-5">
      Nested Navigation
    </h2>
    <BsDivider/>
    <BsAppContainer>
      <div class="demo-block-content bg-grey-200 rounded-4 mt-3">
        <BsCard class="mobi-card mx-auto" shadow>
          <BsAppbar
            class="bg-purple darken-3 rounded-top"
            shadow>
            <BsButton
              mode="icon"
              color="light-grey"
              icon="menu"
              flat/>
            <BsAppbarTitle title="Topics" class="text-white"/>
            <BsSpacer/>
            <BsButton
              color="light-grey"
              icon="more_vert"
              mode="icon"
              flat/>
          </BsAppbar>
          <BsListView>
            <BsListNav>
              <BsListNavItem icon="widgets" label="Attractions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1"/>
                  <BsListNavItem label="Topic 2" disabled/>
                  <BsListNavItem label="Topic 3"/>
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="restaurant" label="Dining">
                <BsListNav child>
                  <BsListNavItem label="Breakfast"/>
                  <BsListNavItem label="Sushi"/>
                  <BsListNavItem label="Pizza"/>
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="school" label="Education">
                <BsListNav child>
                  <BsListNavItem label="Topic 1"/>
                  <BsListNavItem label="Topic 2"/>
                  <BsListNavItem label="Topic 3"/>
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="people" label="Family">
                <BsListNav child>
                  <BsListNavItem label="Topic 1"/>
                  <BsListNavItem label="Topic 2"/>
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="medication" label="Health">
                <BsListNav child>
                  <BsListNavItem label="Topic 1"/>
                  <BsListNavItem label="Topic 2"/>
                  <BsListNavItem label="Topic 3"/>
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="warehouse" label="Office">
                <BsListNav child>
                  <BsListNavItem label="Topic 1"/>
                  <BsListNavItem label="Topic 2"/>
                </BsListNav>
              </BsListNavItem>
              <BsListNavItem icon="redeem" label="Promotions">
                <BsListNav child>
                  <BsListNavItem label="Topic 1"/>
                  <BsListNavItem label="Topic 2"/>
                </BsListNav>
              </BsListNavItem>
            </BsListNav>
          </BsListView>
        </BsCard>
      </div>
    </BsAppContainer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
</style>
