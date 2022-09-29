import {createApi} from '@reduxjs/toolkit/query/react';
import {wordsBaseQuery} from './wordsBaseQuery';

export const wordsApi = createApi({
  baseQuery: wordsBaseQuery,
  endpoints: builder => ({
    getWords: builder.query({
      query: () => 'grammars/grammar/20',
    }),
  }),
});

export const {useGetWordsQuery} = wordsApi;
