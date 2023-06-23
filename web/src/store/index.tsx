/** @format */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "@store/root-reducer";
// Esto lo puede colocar en el file config
const persistConfig = {
  key: "7GPQxQhd4KFGaAYgQ6URVTdM8jEmHwnyw5", // conviertala en variable de entorno
  storage,
};

function makeStore() {
  const customizedMiddleware = getDefaultMiddleware({
    thunk: false,
    immutableCheck: false,
    serializableCheck: false,
  });
  const middleware = [...customizedMiddleware];

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: true,
  });

  const persistor = persistStore(store);

  return { store, persistor };
}

export default makeStore();
