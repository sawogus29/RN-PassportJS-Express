# Passport Naver + JWT

# 시작하기

## 의존성 설치

```bash
yarn install
```

## 환경변수 설정

`.env` 파일을 수정해주세요

- `NAVER_CLIENT_ID`: NAVER 개발자 센터에서 발급받은 Client ID
- `NAVER_CLIENT_SECRET`: NAVER 개발자 센터에서 발급받은 Client Secret
- `MOBILE_APP_URL`: `exp://Expo 개발 서버 URL/--`
  - Expo가 192.168.35.29:19000에서 실행중이라면 `exp://192.168.35.29:19000/--`

# 실행

```bash
yarn start
```

- 3000번 포트에서 서버가 실행됩니다.

# 참고자료

- [passport-naver](http://www.passportjs.org/packages/passport-naver/)
- [The Ultimate Guide to Passport JS](https://www.zachgollwitzer.com/posts/passport-js-course#JWT-Based-Authentication-Implementation)
- [네이버 로그인 API](https://developers.naver.com/docs/login/api/api.md)
