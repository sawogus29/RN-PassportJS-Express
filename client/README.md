# React Native 로그인

# 시작하기

## 의존성 설치

```bash
yarn install
```

## Server URL 설정

`app.config.js`파일의 SERVER_URL을 수정해주세요.

- Express가 192.168.35.29:3000에서 실행중이라면 `http://192.168.35.29:3000`

```javascript
const SERVER_URL = "YOUR Express Server URL"

export default {
...중략
```

# 실행

## Expo go 사용

1. expo 개발서버 실행

```bash
yarn start
```

- 개발서버의 URL과 QR Code가 터미널에 출력됩니다.
- 일반적으로 19000번 포트에서 개발서버가 실행됩니다.

2. Android, IOS 기기에서 Expo Go앱을 실행하고,
   `Scan QR Code` 혹은 `Enter URL Manually`을 통해 개발서버에 연결합니다.

# 참고자료

- [Expo Linking Guide](https://docs.expo.dev/guides/linking/)
