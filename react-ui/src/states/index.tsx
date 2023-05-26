import { atomWithStorage } from 'jotai/utils';

type Nullable<T> = T | undefined | null;
export const loginTokenAtom = atomWithStorage<Nullable<string>>('login_token', null);
