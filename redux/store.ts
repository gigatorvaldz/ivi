import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import filmListReducer from './features/filmList/filmList';

const rootReducer = combineReducers({
  filmList: filmListReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
