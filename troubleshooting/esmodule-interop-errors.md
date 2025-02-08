## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 모듈 임포트
* 문제 내용: esModuleInterop 관련 오류 다수 발생
* 재현 방법: React 모듈 임포트 시도
* 예상 결과: 모든 모듈이 정상적으로 임포트됨
* 실제 결과: "This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag"

### 원인 분석
* moduleResolution이 "Node"로 설정되어 있으나 ESM 환경
* React 모듈의 임포트 방식이 부적절
* tsconfig.json의 설정이 불완전

### 해결 방법
1. tsconfig.json 수정
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "module": "ESNext",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

2. React 임포트 방식 통일
```typescript
import React from 'react';
import { useState, type FC } from 'react';
```

3. node_modules 재설치
```bash
rm -rf node_modules package-lock.json
npm install
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 