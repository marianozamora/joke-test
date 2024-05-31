/* eslint-disable no-undef */
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';

import JokeItem from '../../src/components/molecules/JokeItem.vue';

describe('JokeItem.vue', () => {
  it('renders props.joke when passed', () => {
    const joke = { setup: 'Test setup', punchline: 'Test punchline', rating: 0 };
    const wrapper = shallowMount(JokeItem, {
      propsData: { joke },
    });
    expect(wrapper.text()).toMatch(joke.setup);
    expect(wrapper.text()).toMatch(joke.punchline);
  });

  it('emits update:joke event with updated joke when rateJoke is called', () => {
    const joke = { setup: 'Test setup', punchline: 'Test punchline', rating: 0 };
    const wrapper = shallowMount(JokeItem, {
      propsData: { joke },
    });
    wrapper.vm.rateJoke(1);
    expect(wrapper.emitted('update:joke')).toBeTruthy();
    expect(wrapper.emitted('update:joke')[0]).toEqual([{ ...joke, rating: 1 }]);
  });

  it('emits remove event with joke id when removeJoke is called', () => {
    const joke = {
      id: 1, setup: 'Test setup', punchline: 'Test punchline', rating: 0,
    };
    const wrapper = shallowMount(JokeItem, {
      propsData: { joke },
    });
    wrapper.vm.removeJoke();
    expect(wrapper.emitted('remove')).toBeTruthy();
    expect(wrapper.emitted('remove')[0]).toEqual([joke.id]);
  });
});
