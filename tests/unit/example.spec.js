import Vuelidate from 'vuelidate';
import TreeView from "vue-json-tree-view";
import { mount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(TreeView);
localVue.use(TreeView);

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Home, {
      localVue,
      store,
    });
    wrapper.find('#add').trigger('click');
    expect(wrapper.vm.people).toMatch('sss');
  });
});
