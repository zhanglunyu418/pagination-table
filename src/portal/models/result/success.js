/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';
import { go } from '@lugia/lugiax-router';

const model = 'success';
const state = {

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      goBack(state, inParam) {
        go({ url: '/' });
      },
      goDetails(state, inParam) {
      },
      doPrint(state, inParam) {
      },
    },
    async: {
    },
  },
});
