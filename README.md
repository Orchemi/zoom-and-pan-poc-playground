## 목적

Zoom&Pan 기능 구현을 위한 라이브러리 구현 레벨 테스트

<br />

## 실행

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

<br />

## 비교군

### react-zoom-pan-pinch

- [react-zoom-pan-pinch](https://www.npmjs.com/package/react-zoom-pan-pinch) 라이브러리 사용
- 쉽고 간단한 인터페이스 제공
- 빠르게 구현 가능
- 제공되는 기능이 제한적

<br />

### @use-gesture/react

- [@use-gesture/react](https://www.npmjs.com/package/@use-gesture/react) 라이브러리 사용
- 자세한 인터페이스 제공 및 다양한 기능을 제공
- 조금 더 세밀한 제어 가능
- 조금 더 low한 구현 필요

<br />

### react-flow

- [react-flow](https://github.com/xyflow/xyflow) 라이브러리 사용
- node와 edge를 이용한 그래프 구현
- node의 위치를 개별적으로 제어하기 위한 위치 지정 필요
  - 개발 공수가 더 필요할 수 있음

