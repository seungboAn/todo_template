## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 TypeScript 설정
* 문제 내용: React 타입 정의를 찾을 수 없음
* 재현 방법: TypeScript 컴포넌트 작성 시도
* 예상 결과: TypeScript에서 React 타입 인식
* 실제 결과: Cannot find module 'react' or its corresponding type declarations

### 원인 분석
* TypeScript 설정이 React와 제대로 통합되지 않음
* moduleResolution이 "bundler"로 설정되어 있어 문제 발생

### 해결 방법
1. tsconfig.json의 moduleResolution 설정 변경
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "jsx": "react-jsx",
    "types": ["react", "react-dom"]
  }
}
```

2. 필요한 패키지 재설치
```bash
npm install react react-dom @types/react @types/react-dom
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 