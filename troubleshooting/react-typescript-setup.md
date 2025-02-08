## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 React TypeScript 설정
* 문제 내용: React 타입 정의를 찾을 수 없음
* 재현 방법: TypeScript 컴포넌트 컴파일 시도
* 예상 결과: React 타입이 정상적으로 인식됨
* 실제 결과: Cannot find module 'react' or its corresponding type declarations

### 원인 분석
* Vite의 기본 TypeScript 설정이 React와 충돌
* tsconfig.json의 moduleResolution 설정이 부적절

### 해결 방법
1. tsconfig.json 재설정
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "moduleResolution": "Node",
    "jsx": "react-jsx",
    "strict": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

2. tsconfig.node.json 수정
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 