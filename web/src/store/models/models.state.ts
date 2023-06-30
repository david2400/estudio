/** @format */

import { IModelState } from "@store/models/models.interface";

const initialState: IModelState = {
  total: 0,
  loading: false,
  error: {},
  isError: false,
  result: [],
  posts: 1,
  limit: 10,
};

export { initialState };
