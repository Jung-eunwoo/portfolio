# 🤖 Claude Code 개발 가이드

> Portfolio 프로젝트의 코드 작성, Git 브랜치, 커밋 컨벤션 가이드

---

## 📝 코드 작성 규칙

### 네이밍 컨벤션

```typescript
// ✅ 파일명: 파스칼케이스 (PascalCase)
UserProfile.vue
MainLayout.vue
AuthService.ts

// ✅ 변수명: 카멜케이스 (camelCase)
const userName = 'John';
const isActive = true;
const buttonColor = '#fff';

// ✅ 상수명: 대문자 영어 스네이크케이스 (UPPER_SNAKE_CASE)
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_COUNT = 3;
const DEFAULT_TIMEOUT = 5000;
```

---

## 🌿 Git 브랜치 전략

### 브랜치 구조

```
release        ← 최종 배포 완료 코드 (프로덕션)
  ↑
main           ← 배포 후보 코드 (QA, UAT 테스트)
  ↑
develop (dev)  ← 개발 통합 브랜치
  ↑
feature/기능명 ← 개별 기능 개발 브랜치
```

### 브랜치 종류 및 역할

| 브랜치 이름 | 용도 |
|------------|------|
| `release` | 배포 완료된 안정적인 코드만 포함 |
| `main` | 배포 직전 최종 QA를 위한 브랜치 |
| `develop` (dev) | 개발 통합 브랜치 (feat 브랜치들이 여기로 병합) |
| `feat/기능명` | 실제 개발 작업 진행, 완료 시 dev로 PR |
| `fix/버그명` | 버그 수정 전용 브랜치 |
| `design/작업명` | CSS 및 디자인 작업 |
| `refactor/작업명` | 기능 변화 없이 코드 구조 개선 |
| `test/테스트명` | 테스트 코드 추가 |
| `chore/작업명` | 설정 변경, 문서 작업 등 코드 외 작업 |
| `docs/문서명` | 프로젝트 문서 작성 |
| `comment/작업명` | 주석 및 코드 내부 설명 추가 |
| `hotfix/긴급수정` | 운영 중 긴급 이슈 수정 (main에 직접 병합) |

### 브랜치 생성 규칙

**브랜치 이름은 케밥케이스(kebab-case) 사용**

```bash
# 기능 추가
feat/user-authentication
feat/image-upload

# 버그 수정
fix/login-error
fix/api-timeout

# 디자인 작업
design/main-header
design/button-styles

# 리팩토링
refactor/api-service
refactor/state-management

# 설정/문서
chore/eslint-config
docs/readme-update
```

---

## 🚀 배포 흐름

```
feat/* → develop → main → release
```

1. **기능 개발 완료** → `develop`로 Pull Request
2. **배포 준비** → `main` 브랜치로 병합 (QA 테스트)
3. **배포 확정** → `release`로 병합 후 Tag 작성

---

## 📄 커밋 메시지 컨벤션

### 기본 형식

```
[타입] 작업 내용 간단 요약
```

### 커밋 타입

| 타입 | 설명 | 예시 |
|------|------|------|
| `[feat]` | 새로운 기능 추가 | `[feat] 회원가입 입력폼 유효성 검증 추가` |
| `[fix]` | 버그 수정 | `[fix] 예약 목록 조회 실패 오류 수정` |
| `[design]` | CSS 및 UI 변경 | `[design] 메인 헤더 반응형 레이아웃 수정` |
| `[refactor]` | 코드 리팩토링 | `[refactor] API 호출 로직 모듈화` |
| `[test]` | 테스트 코드 추가/수정 | `[test] 로그인 API 테스트 추가` |
| `[chore]` | 설정 파일 수정, 빌드 설정 | `[chore] ESLint 설정 파일 수정` |
| `[docs]` | 문서 작성/수정 | `[docs] README 작성` |
| `[comment]` | 주석 추가/수정 | `[comment] 유틸리티 함수 주석 추가` |
| `[hotfix]` | 긴급 수정 | `[hotfix] 프로덕션 로그인 오류 긴급 수정` |

### 커밋 예시

```bash
[feat] 사용자 프로필 페이지 구현
[fix] 이미지 업로드 시 파일 크기 제한 오류 수정
[design] 버튼 hover 효과 추가
[refactor] API 서비스 클래스 구조 개선
[test] 유저 인증 API 단위 테스트 작성
[chore] Vite 설정 파일 업데이트
[docs] Git 브랜치 전략 가이드 작성
```

---

## 🛠 브랜치 작업 순서 예시

```bash
# 1. 최신 develop 브랜치로 이동
git checkout develop
git pull origin develop

# 2. 기능 브랜치 생성
git checkout -b feat/user-profile

# 3. 작업 후 커밋 & 푸시
git add .
git commit -m "[feat] 사용자 프로필 페이지 추가"
git push origin feat/user-profile

# 4. GitHub에서 develop로 Pull Request 생성
```

---

## 🙋 기타 규칙

- ✅ `main`, `release`에서는 **직접 작업 금지**
- ✅ PR 승인 전 병합 금지 **(리뷰 최소 1인 이상)**
- ✅ 모든 PR은 `develop` 브랜치로 생성
- ✅ 커밋 메시지는 명확하고 간결하게 작성

---

## 📚 참고 자료

- [Git 브랜치 전략: GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commit 규칙](https://www.conventionalcommits.org/ko/v1.0.0/)
