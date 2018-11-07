import Vuelidate from 'vuelidate';
import TreeView from "vue-json-tree-view";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(TreeView);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      localVue,
    });
    wrapper.find('#add').trigger('click');
    expect(wrapper.vm.people).toMatch('sss');
  });
});
