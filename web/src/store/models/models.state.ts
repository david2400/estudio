/** @format */

import { IModelState } from "@store/models/models.interface";

const initialState: IModelState = {
  total: 0,
  loading: false,
  error: {},
  isError: false,
  result: [],
  limit: 10,
};

export { initialState };
