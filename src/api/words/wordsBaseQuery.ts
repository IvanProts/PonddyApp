import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query';
import Config from 'react-native-config';

export const wordsBaseQuery = fetchBaseQuery({
  baseUrl: Config.WORDS_API,
  prepareHeaders: headers => {
    const authorizationToken = Config.AUTHORIZATION_TOKEN;
    const cookie = Config.COOKIE;

    if (authorizationToken && cookie) {
      headers.set('Authorization', `SSO ${authorizationToken}`);
      headers.set('Cookie', `sessionid=${cookie}`);
    }
    return headers;
  },
});
