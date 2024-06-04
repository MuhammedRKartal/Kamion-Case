import authReducer from "./auth";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["isAuthenticated", "token", "user"],
};

const reducers = {
  auth: persistReducer(authPersistConfig, authReducer),
};

export default reducers;
