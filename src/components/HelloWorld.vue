<template>
  <div>
    <div v-for="(item, index) in v.people.$each.$iter" :key="index">
      <div class="form-group" :class="{ 'form-group--error': item.$error }">
        <label class="form__label">Name for {{ index }}</label>
        <input class="form__input" v-model.trim="item.$model"/>
      </div>
      <div class="error" v-if="!item.required">Name is required.</div>
      <div class="error" v-if="!item.minLength">Name must have at least {{ item.$params.minLength.min }} letters.</div>
    </div>
    <div>
      <button class="button" id="add" @click="$store.commit('ADD')">Add</button>
    </div>
    <div class="form-group" :class="{ 'form-group--error': v.people.$error }"></div>
    <div class="error" v-if="!v.people.minLength">List must have at least {{ v.people.$params.minLength.min }} elements.</div>
    <div class="error" v-else-if="!v.people.required">List must not be empty.</div>
    <div class="error" v-else-if="v.people.$error">List is invalid.</div>
    <button class="button" @click="v.people.$touch">$touch</button>
    <button class="button" @click="v.people.$reset">$reset</button>
    <tree-view :data="v.people" :options="{rootObjectKey: 'v.people', maxDepth: 2}"></tree-view>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: ['v'],
}
</script>
