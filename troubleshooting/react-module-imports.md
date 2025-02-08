## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 React 모듈 임포트
* 문제 내용: React 모듈의 named exports를 찾을 수 없음
* 재현 방법: React 컴포넌트에서 useState 등의 named imports 사용
* 예상 결과: React 모듈의 모든 exports가 정상적으로 인식됨
* 실제 결과: 
  - Module '"react"' has no exported member 'useState'
  - Module '"react"' can only be default-imported
  - Cannot use JSX unless the '--jsx' flag is provided

### 원인 분석
* tsconfig.json의 esModuleInterop 설정이 불완전함
* jsx 설정이 누락됨
* React 타입 선언이 제대로 로드되지 않음

### 해결 방법
1. tsconfig.json 수정
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "bundler",
    "types": ["react", "react-dom", "vite/client", "node"]
  }
}
```

2. React 임포트 방식 수정
```typescript
import * as React from 'react';
// 또는
import React, { useState, type FC } from 'react';
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 