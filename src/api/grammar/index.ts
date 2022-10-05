import {createApi} from '@reduxjs/toolkit/query/react';
import {grammarBaseQuery} from './grammarBaseQuery';
import {IdsArray} from './types/bodyTypes';

export const grammarApi = createApi({
  baseQuery: grammarBaseQuery,
  endpoints: builder => ({
    getWords: builder.query<any, void>({
      query: () => 'grammars/grammar/20',
    }),
    getWord: builder.mutation<Array<Object>, IdsArray>({
      query: args => ({
        url: 'dictionaries/dictionaries/bulk',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const {useGetWordsQuery, useGetWordMutation} = grammarApi;
