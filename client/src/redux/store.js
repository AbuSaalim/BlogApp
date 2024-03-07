import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"; // Assuming userSlice exports the userReducer directly
import themeReducer from "./theme/themeSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist"; // Correct import for persistStore

// Define your rootReducer
const rootReducer = combineReducers({
  user: userReducer, // Assuming userReducer is exported from userSlice
  theme: themeReducer,
});

// Define persistConfig directly without combineReducers
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // To avoid serialization check for redux-persist
    }),
});

// Export persistor
export const persistor = persistStore(store);
