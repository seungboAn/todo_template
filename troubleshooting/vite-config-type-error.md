## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 Vite 설정
* 문제 내용: defineConfig 타입 오류
* 재현 방법: vite.config.ts 파일 수정
* 예상 결과: defineConfig가 정상적으로 인식됨
* 실제 결과: Module 'vite' has no exported member 'defineConfig'

### 원인 분석
* Vite 타입 정의가 제대로 로드되지 않음
* ESM import 문법과 타입 정의 불일치

### 해결 방법
1. global.d.ts에 Vite 타입 정의 추가
2. vite.config.ts 수정
3. node_modules 재설치

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 