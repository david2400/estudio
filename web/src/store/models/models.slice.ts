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

const setLimit = (state: any, action: PayloadAction<{ limit: any }>) => ({
  ...state,
  limit: action.payload.limit+10,
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
    setLimits: setLimit,
    setItems: setItem,
    setTotals: setTotal,
  },
});

const { addModels, setModels, setLimits, setItems, setTotals } =
  metaSlice.actions;

export { addModels, setModels, setLimits, setItems, setTotals };

export default metaSlice.reducer;
