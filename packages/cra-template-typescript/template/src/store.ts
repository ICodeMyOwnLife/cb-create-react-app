import { createStore, GetRootState } from 'sp-ops-utils';

const store = createStore({});

export default store;

export type RootState = GetRootState<typeof store>;
