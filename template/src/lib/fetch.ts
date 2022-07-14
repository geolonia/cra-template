import { Auth } from 'aws-amplify';

export const authenticatedAccessTokenFetch: typeof window.fetch = async (input, options = {}) => {
  const session = await Auth.currentSession();
  return window.fetch(input, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'authorization': `Bearer ${session.getAccessToken().getJwtToken()}`
    }
  });
};

export const authenticatedIdTokenFetch: typeof window.fetch = async (input, options = {}) => {
  const session = await Auth.currentSession();
  return window.fetch(input, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'authorization': `Bearer ${session.getIdToken().getJwtToken()}`
    }
  });
};
