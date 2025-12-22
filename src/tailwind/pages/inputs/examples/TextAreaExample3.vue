<script setup lang="ts">
import type { Validation } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import type { Ref, ComputedRef } from 'vue';
import { computed, reactive, ref, unref } from 'vue';
import { Helper, type INotificationProvider } from 'vue-mdbootstrap';

const loading = ref(false);
const contact = reactive({
  fullName: null,
  email: null,
  address: null,
  city: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  city: { required },
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
const cityValidator = requiredFieldValidator(v$, 'city');

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
  contact.city = null;
}
</script>

<template>
  <BsCard class="w-full max-w-100 mx-auto" shadow>
    <BsCardHeader class="flex items-center bg-violet-800 py-3">
      <BsButton color="light" flat icon="arrow_back" mode="icon" />
      <span class="text-xl text-white ps-3">Edit Contact</span>
      <BsSpacer />
      <BsButton color="light" flat icon="more_vert" mode="icon" />
    </BsCardHeader>
    <BsCardBody class="border-b">
      <div class="mb-4 mt-3">
        <BsTextField
          v-model="contact.fullName"
          :validator="fullNameValidator"
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
        <BsTextField
          v-model="contact.city"
          :validator="cityValidator"
          floating-label
          outlined
          required
          validation-icon
        >
          <label>City</label>
        </BsTextField>
      </div>
    </BsCardBody>
    <BsCardBody class="flex justify-between">
      <BsButton style="width: 106px" @click="submit($notification)">
        <BsSpinLoader v-if="loading" thickness="3" size="24" />
        <span v-else>Submit</span>
      </BsButton>
      <BsButton tonal @click="cancel()">Clear</BsButton>
    </BsCardBody>
  </BsCard>
  <BsNotification />
</template>
