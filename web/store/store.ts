import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IRootState } from "../models/Root";
import { rootReducer } from "../reducers/root";
import { logger } from "./logger";

export function configureStore(): Store<IRootState> {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }
  try {
    const store = createStore(rootReducer as any, undefined, middleware) as Store<
      IRootState
    >;
    //
    // if (module.hot) {
    //   module.hot.accept('app/reducers', () => {
    //     const nextReducer = require('app/reducers');
    //     store.replaceReducer(nextReducer);
    //   });
    // }
    return store;
  } catch (e) {
    console.log(e);
    return {} as Store<IRootState>;
  }
}
