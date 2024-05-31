/* eslint-disable no-undef */
import Vue from 'vue';

import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import JokeList from '../../src/components/organisms/JokeList.vue';

jest.mock('axios');

describe('JokeList.vue', () => {
  let wrapper;

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1, setup: 'Joke 1', punchline: 'Punchline 1', rating: 0,
        },
        {
          id: 2, setup: 'Joke 2', punchline: 'Punchline 2', rating: 0,
        },
      ],
    });

    wrapper = shallowMount(JokeList);
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders the correct number of jokes', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('jokeitem-stub')).toHaveLength(2);
  });

  it('nextPage and prevPage work correctly', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.currentPage).toBe(1);
    wrapper.vm.nextPage();
    expect(wrapper.vm.currentPage).toBe(2);
    wrapper.vm.prevPage();
    expect(wrapper.vm.currentPage).toBe(1);
  });

  it('updateJoke and removeJoke work correctly', async () => {
    await wrapper.vm.$nextTick();
    wrapper.vm.updateJoke({
      id: 1, setup: 'Updated Joke', punchline: 'Updated Punchline', rating: 5,
    });
    expect(wrapper.vm.jokes[0].setup).toBe('Updated Joke');
    wrapper.vm.removeJoke(1);
    expect(wrapper.vm.jokes).toHaveLength(1);
  });
});
