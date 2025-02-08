# Todo Template Project

## 개발 실패 분석 및 교훈

### 1. 잘못된 우선순위 설정

#### 문제점
- TypeScript 설정과 모듈 임포트 문제 해결에 과도한 시간 투자
- 린터 오류 해결에 집중하여 핵심 기능 개발이 지연됨
- 기술적 완벽성을 추구하다가 MVP(Minimum Viable Product) 개발이 지연

#### 교훈
초기 스타트업에서 중요한 우선순위:
1. **핵심 기능 구현** (Todo CRUD, 필터링, 뷰 전환)
2. **사용자 경험** (UI/UX, 성능)
3. **코드 품질** (TypeScript, 린터)

### 2. 트러블슈팅 분석

#### 발생한 문제들
1. React/TypeScript 설정 문제
   - moduleResolution
   - esModuleInterop
   - 타입 정의 파일
2. 모듈 임포트 방식 문제
3. Vite 설정 문제

#### 우선순위에 따른 해결 방법
1. **즉시 해결해야 할 문제**
   - 앱 실행을 막는 치명적인 오류
   - 핵심 기능 구현을 방해하는 문제

2. **나중에 해결해도 되는 문제**
   - 린터 경고
   - 타입 정의 최적화
   - 모듈 임포트 스타일

### 3. 개선된 개발 접근 방식

1. **MVP 우선**
   - 기본적인 Todo CRUD 기능 구현
   - 필수적인 필터링 기능 구현
   - 간단한 UI 구현

2. **점진적 개선**
   - TypeScript 타입 정의
   - 코드 품질 개선
   - 성능 최적화

3. **기술 부채 관리**
   - 임시 해결책 사용 시 주석으로 표시
   - 향후 개선이 필요한 부분 문서화
   - 우선순위에 따른 기술 부채 해결 계획 수립

## 설치 및 실행

```bash
npm install
npm run dev
```

## 주요 기능

- Todo 항목 생성/수정/삭제
- 우선순위 설정
- 카테고리 분류
- 검색 및 필터링
- 그리드/캘린더 뷰 전환

## 기술 스택

- React
- TypeScript
- Vite
- TailwindCSS 