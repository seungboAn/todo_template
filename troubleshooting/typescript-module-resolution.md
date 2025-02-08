## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 TypeScript 모듈 해결
* 문제 내용: 여러 모듈과 타입을 찾을 수 없음
* 재현 방법: 
  1. Cannot find module 'react'
  2. Cannot find module 'vite'
  3. Cannot find module '@vitejs/plugin-react'
  4. Cannot find module 'path'
  5. Cannot find name '__dirname'

### 원인 분석
* TypeScript의 moduleResolution이 Node로 설정되어 있으나 ESM 환경에서 실행
* Node.js 타입이 누락됨
* vite.config.ts가 CommonJS 문법을 사용

### 해결 방법
1. vite.config.ts 수정
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
```

2. tsconfig.json 수정
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "types": ["vite/client", "node"]
  }
}
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 