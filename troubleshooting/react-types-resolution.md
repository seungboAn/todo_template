## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 React 타입 해결
* 문제 내용: React 모듈과 타입을 찾을 수 없음
* 재현 방법: 컴포넌트 파일 컴파일
* 예상 결과: React 타입이 정상적으로 인식됨
* 실제 결과: Cannot find module 'react' or its corresponding type declarations

### 원인 분석
* tsconfig.json의 moduleResolution이 Node로 설정되어 있으나 실제 모듈은 ESM
* React 타입 선언이 제대로 로드되지 않음
* global.d.ts의 참조 설정이 불완전함

### 해결 방법
1. tsconfig.json 수정
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "types": ["vite/client"],
    "allowSyntheticDefaultImports": true
  }
}
```

2. package.json 의존성 재설치
```bash
rm -rf node_modules package-lock.json
npm install
```

3. global.d.ts 수정
```typescript
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="vite/client" />
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 