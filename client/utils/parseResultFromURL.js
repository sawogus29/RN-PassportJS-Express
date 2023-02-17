import * as Linking from 'expo-linking';

function parseAuthResultFromURL(url) {
  if (!url) {
    return {};
  }
  const { hostname, path, queryParams } = Linking.parse(url);
  const { error, token } = queryParams;
  console.log(`error:${error}, token:${token}`);

  return { error, jwt_token: token };
}

export { parseAuthResultFromURL };
