## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 React/Vite 임포트
* 문제 내용: 여러 컴포넌트에서 React 모듈을 찾을 수 없음
* 재현 방법: npm run dev 실행
* 예상 결과: 모든 컴포넌트에서 React 임포트 가능
* 실제 결과: Cannot find module 'react' 오류 다수 발생

### 원인 분석
* tsconfig.json의 moduleResolution 설정이 부적절
* node_modules가 제대로 설치되지 않음
* package.json의 dependencies가 불완전

### 해결 방법
1. package.json 수정 및 의존성 재설치
```bash
rm -rf node_modules package-lock.json
npm install react react-dom
npm install -D @types/react @types/react-dom typescript @vitejs/plugin-react
```

2. tsconfig.json 수정
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

3. vite.config.ts 수정
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 