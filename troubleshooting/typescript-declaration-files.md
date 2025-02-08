## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 타입 선언 파일
* 문제 내용: TypeScript 선언 파일을 찾을 수 없음
* 재현 방법: npm run dev 실행
* 예상 결과: 모든 타입이 정상적으로 인식됨
* 실제 결과: Cannot find type definition file for multiple modules

### 원인 분석
* 여러 선언 파일이 분산되어 있음
* vite-env.d.ts와 global.d.ts의 중복
* 타입 참조 설정이 불완전함

### 해결 방법
1. 선언 파일 통합
- vite-env.d.ts 제거
- global.d.ts로 모든 타입 선언 통합

2. tsconfig.json 수정
```json
{
  "compilerOptions": {
    "moduleResolution": "Node",
    "types": ["react", "react-dom", "node", "vite/client"]
  }
}
```

3. 패키지 재설치
```bash
npm install -D @types/react @types/react-dom @types/node
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 