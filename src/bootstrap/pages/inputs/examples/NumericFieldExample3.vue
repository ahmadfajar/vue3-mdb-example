<script setup lang="ts">
import type { Validation } from '@vuelidate/core';
import { email, maxValue, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import type { Ref, ComputedRef } from 'vue';
import { computed, reactive, ref, unref } from 'vue';
import { Helper, type INotificationProvider } from 'vue-mdbootstrap';

const loading = ref(false);
const person = reactive({
  fullName: null,
  emailAddress: null,
  age: null,
  gender: 'male',
});
const personRules = {
  fullName: { required },
  emailAddress: { required, email },
  age: { required, maxAge: maxValue(50) },
};
const genders = [
  { value: 'male', label: 'MALE' },
  { value: 'female', label: 'FEMALE' },
];

function requiredFieldValidator(
  validator: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(validator)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['emailAddress'];

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

function ageFieldValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; maxAge: boolean };
  messages: { required: string; maxAge: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['age'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      maxAge: obj.maxAge.$message,
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      maxAge: unref(obj.maxAge.$invalid),
    },
  }));
}

const v$ = useVuelidate(personRules, person);
const fullNameValidator = requiredFieldValidator(v$, 'fullName');
const emailValidator = emailFieldValidator(v$);
const ageValidator = ageFieldValidator(v$);

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success('Data has been submitted.');
    }, 1000);
  }
}

function clear() {
  unref(v$).$reset();
  person.fullName = null;
  person.emailAddress = null;
  person.age = null;
  person.gender = 'male';
}
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
            v-model="person.fullName"
            :validator="fullNameValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            prepend-icon="person"
            required
            validation-icon
          >
            <label>Your Name</label>
          </BsTextField>
        </div>
        <div class="mb-4">
          <BsTextField
            v-model="person.emailAddress"
            :validator="emailValidator"
            action-icon-variant="filled"
            floating-label
            outlined
            prepend-icon="email"
            required
            type="email"
            validation-icon
          >
            <label>Your Email</label>
          </BsTextField>
        </div>
        <div class="mb-4">
          <BsNumericField
            v-model="person.age"
            :validator="ageValidator"
            action-icon-variant="filled"
            floating-label
            min-value="10"
            outlined
            prepend-icon="manage_accounts"
            required
            validation-icon
          >
            <label>Your Age</label>
          </BsNumericField>
        </div>
        <div class="mb-2">
          <BsToggleButton v-model="person.gender" :items="genders" color="primary" outlined>
            <template #icon="item">
              <BsSvgIcon v-if="item?.value === person.gender" icon="check" />
            </template>
          </BsToggleButton>
        </div>
      </form>
    </BsCardBody>
    <BsCardBody class="flex justify-between">
      <BsButton style="width: 106px" @click="submit($notification)">
        <BsSpinLoader v-if="loading" tag="span" thickness="3" size="24" />
        <span v-else>Save</span>
      </BsButton>
      <BsButton tonal @click="clear()"> Clear </BsButton>
    </BsCardBody>
  </BsCard>
  <BsNotification />
</template>
