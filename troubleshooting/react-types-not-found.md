## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 React 타입 설정
* 문제 내용: React 및 Vite 타입 정의를 찾을 수 없음
* 재현 방법: npm run dev 실행
* 예상 결과: TypeScript에서 React 타입 인식
* 실제 결과: Cannot find type definition file for 'react', 'react-dom', 'vite/client'

### 원인 분석
* node_modules가 제대로 설치되지 않음
* TypeScript 설정이 불완전함

### 해결 방법
1. node_modules 삭제 후 재설치
```bash
rm -rf node_modules
npm install
```

2. tsconfig.json 수정
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react-jsx"
  }
}
```

3. vite-env.d.ts 대신 global.d.ts 사용

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 