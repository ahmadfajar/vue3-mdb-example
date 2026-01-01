<script setup lang="ts">
import type { Validation } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { type Ref, type ComputedRef, onBeforeUnmount } from 'vue';
import { computed, reactive, ref, unref } from 'vue';
import { BsStore, Helper, type INotificationProvider, type TDataSource } from 'vue-mdbootstrap';

const statesSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const loading = ref(false);
const contact = reactive({
  fullName: null,
  email: null,
  address: null,
  state: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  state: { required },
};

function requiredFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      email: 'Email address format is invalid.',
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      email: unref(obj.email.$invalid),
    },
  }));
}

const v$ = useVuelidate(contactRules, contact);
const fullNameValidator = requiredFieldValidator(v$, 'fullName');
const emailValidator = emailFieldValidator(v$, 'email');
const addressValidator = requiredFieldValidator(v$, 'address');
const countryStateValidator = requiredFieldValidator(v$, 'state');

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success('Data has been sent.');
    }, 1000);
  }
}

function cancel() {
  unref(v$).$reset();
  contact.fullName = null;
  contact.email = null;
  contact.address = null;
  contact.state = null;
}

onBeforeUnmount(() => {
  statesSrc.proxy.destroy();
});
</script>

<template>
  <BsCard class="w-full max-w-100 mx-auto" shadow>
    <BsCardHeader class="flex items-center bg-violet-800 py-3">
      <BsButton color="light" flat icon="arrow_back" mode="icon" />
      <span class="text-xl text-white ps-3">Contact Details</span>
      <BsSpacer />
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
    <BsCardBody class="border-b">
      <form novalidate>
        <div class="mb-4 mt-3">
          <BsTextField
            v-model="contact.fullName"
            :validator="fullNameValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            required
            validation-icon
          >
            <label>Full Name</label>
          </BsTextField>
        </div>
        <div class="mb-4">
          <BsTextField
            v-model="contact.email"
            :validator="emailValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            required
            type="email"
            validation-icon
          >
            <label>Email</label>
          </BsTextField>
        </div>
        <div class="mb-4">
          <BsTextArea
            v-model="contact.address"
            :validator="addressValidator"
            action-icon-variant="filled"
            auto-grow
            floating-label
            outlined
            required
            validation-icon
          >
            <label>Address</label>
          </BsTextArea>
        </div>
        <div class="mb-2">
          <BsCombobox
            v-model="contact.state"
            :data-source="statesSrc"
            :validator="countryStateValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            required
            validation-icon
          >
            <label>State</label>
          </BsCombobox>
        </div>
      </form>
    </BsCardBody>
    <BsCardBody class="flex justify-between">
      <BsButton style="width: 106px" @click="submit($notification)">
        <BsSpinLoader v-if="loading" tag="span" thickness="3" size="24" />
        <span v-else>Submit</span>
      </BsButton>
      <BsButton tonal @click="cancel()">Clear</BsButton>
    </BsCardBody>
  </BsCard>
  <BsNotification />
</template>
