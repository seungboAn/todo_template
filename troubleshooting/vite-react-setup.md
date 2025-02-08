## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 Vite + React 설정
* 문제 내용: React 모듈과 타입을 찾을 수 없음
* 재현 방법: npm run dev 실행
* 예상 결과: 모든 모듈과 타입이 정상적으로 인식됨
* 실제 결과: Cannot find module 'react' 및 타입 관련 오류들

### 원인 분석
* Vite 프로젝트 초기화가 불완전함
* node_modules가 제대로 설치되지 않음
* TypeScript 설정이 Vite와 맞지 않음

### 해결 방법
1. 프로젝트 재초기화
```bash
# 1. 새 Vite + React + TypeScript 프로젝트 생성
npm create vite@latest . -- --template react-ts

# 2. 의존성 설치
npm install

# 3. 추가 패키지 설치
npm install react-calendar
npm install -D @types/react-calendar
```

2. vite.config.ts 수정
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 