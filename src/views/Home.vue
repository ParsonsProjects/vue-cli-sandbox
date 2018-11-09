<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :v="$v" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { required, minLength } from 'vuelidate/lib/validators';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  validations: {
    people: {
      required,
      minLength: minLength(3),
      $each: {
        required,
        minLength: minLength(2),
      },
    },
  },
  computed: {
    people() { return this.$store.getters.people; },
  },
};
</script>
