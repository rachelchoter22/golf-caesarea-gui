

import { ADD_ITEM, DELETE_ITEM,DIRECTION,SET_TEXT } from '../constants';

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};
export const setDir = (payload) => ({
  type: DIRECTION,
  payload,
});

export const setText = (payload) => ({
  type: SET_TEXT,
  payload,
});
const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export { addItem, deleteItem };