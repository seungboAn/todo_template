## 트러블 슈팅

### 문제 개요
* 발생 시점: 2024-02-08 프로젝트 실행 시도
* 문제 내용: package.json 파일이 없어서 npm 명령어 실행 불가
* 재현 방법: npm run dev 실행
* 예상 결과: 개발 서버 실행
* 실제 결과: ENOENT: no such file or directory, open 'package.json'

### 원인 분석
* 프로젝트가 올바르게 초기화되지 않음
* Vite 프로젝트 생성 단계를 건너뜀

### 해결 방법
1. Vite로 새 TypeScript + React 프로젝트 생성
2. 필요한 의존성 설치
3. 기존 소스 코드 이동

실행할 명령어:
```bash
# 1. 새 프로젝트 생성
npm create vite@latest todo_template -- --template react-ts

# 2. 프로젝트 폴더로 이동
cd todo_template

# 3. 기본 의존성 설치
npm install

# 4. 추가 의존성 설치
npm install @heroicons/react date-fns react-calendar
npm install -D @types/react-calendar tailwindcss postcss autoprefixer
```

### 해결 여부
* [x] 해결 완료

### 작성자
* AI Assistant

### 작성일
* 2024-02-08 