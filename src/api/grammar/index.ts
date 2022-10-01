import {createApi} from '@reduxjs/toolkit/query/react';
import {grammarBaseQuery} from './grammarBaseQuery';

export const grammarApi = createApi({
  baseQuery: grammarBaseQuery,
  endpoints: builder => ({
    getWords: builder.query<any, void>({
      query: () => 'grammars/grammar/20',
    }),
  }),
});

export const {useGetWordsQuery} = grammarApi;
