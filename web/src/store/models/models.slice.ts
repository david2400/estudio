/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@store/models/models.state";
import { MODELS } from "@store/slice.constants";
import concat from "lodash/concat";

const setModel = (state: any, action: PayloadAction<{ result: any }>) => ({
  ...state,
  result: action.payload.result,
});

const addModel = (state: any, action: PayloadAction<{ result: any }>) => {
  //TODO: Reemplazar esto por adiciones inmutables, podria usar la libreria inmutability-helper o parecidas
  const models = [...state.result];
  const newResult = concat(models, action.payload.result);

  return {
    ...state,
    result: newResult,
  };
};

const setNumberOfPost = (
  state: any,
  action: PayloadAction<{ posts: any }>
) => ({
  ...state,
  posts: action.payload.posts + 10,
});

const setTotal = (state: any, action: PayloadAction<{ total: any }>) => ({
  ...state,
  total: action.payload.total,
});

const setItem = (state: any, action: PayloadAction<{ items: any }>) => ({
  ...state,
  items: action.payload.items,
});

const metaSlice = createSlice({
  name: MODELS,
  initialState,
  reducers: {
    setModels: setModel,
    addModels: addModel,
    setNumberOfPosts: setNumberOfPost,
    setItems: setItem,
    setTotals: setTotal,
  },
});

const { addModels, setModels, setNumberOfPosts, setItems, setTotals } =
  metaSlice.actions;

export { addModels, setModels, setNumberOfPosts, setItems, setTotals };

export default metaSlice.reducer;
