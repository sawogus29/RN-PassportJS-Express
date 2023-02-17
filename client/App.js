import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Platform, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { parseAuthResultFromURL } from './utils/parseResultFromURL';
import Constants from 'expo-constants';

const NAVER_SIGNIN_ENDPOINT = `${Constants.expoConfig.extra.SERVER_URL}/auth/my-signin/naver`;

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const url = Linking.useURL(); // com.meerzet.app//redirect?token=XXXXXX
  console.log(url);
  const { error, jwt_token } = parseAuthResultFromURL(url); // Pseudo Code

  const NaverLoginClickHandler = () => {
    WebBrowser.openAuthSessionAsync(NAVER_SIGNIN_ENDPOINT);
  };

  return (
    <SafeAreaView>
      <View>
        {error && <Text>로그인 중 에러가 발생했습니다</Text>}
        {jwt_token ? (
          <>
            <Text>로그인 성공</Text>
            <Button
              title="로그아웃"
              onPress={() => Linking.openURL(Linking.createURL('/redirect'))}
            />
          </>
        ) : (
          <Button title="Naver로 로그인" onPress={NaverLoginClickHandler} />
        )}
      </View>
      <Text>{url}</Text>
    </SafeAreaView>
  );
}
