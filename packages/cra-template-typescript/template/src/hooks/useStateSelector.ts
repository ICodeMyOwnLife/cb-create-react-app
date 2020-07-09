import { createStateSelectorHook } from 'sp-ops-utils';
import { RootState } from 'store';

const useStateSelector = createStateSelectorHook<RootState>();

export default useStateSelector;
