# Portfolio Website

Frontend Developer 정은우의 포트폴리오 웹사이트입니다.
Vue 3와 TypeScript를 사용하여 개발되었으며, 경력 기술서와 프로젝트 경험을 효과적으로 전달하기 위해 제작되었습니다.

## 🛠 Tech Stack

- **Core**: Vue 3 (Composition API), TypeScript
- **Build Tool**: Vite
- **Styling**: Modern CSS3 (Responsive Design)
- **Deployment**: GitHub Pages

## ✨ Key Features

- **Single Page Application (SPA)**: 끊김 없는 사용자 경험 제공
- **Scroll Animations**: Intersection Observer API를 활용한 커스텀 디렉티브(`v-scroll-reveal`) 구현
- **Responsive Layout**: 모바일, 태블릿, 데스크탑 환경 최적화
- **Sections**:
  - **About**: 자기소개 및 핵심 역량
  - **Experience**: 업무 경력 타임라인
  - **Projects**: 주요 프로젝트 리스트 및 상세 정보
  - **Skills**: 보유 기술 스택 시각화
  - **Contact**: 연락처 및 소셜 링크

## 🚀 Getting Started

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### Installation

```bash
# Repository cloning
git clone https://github.com/Jung-eunwoo/portfolio.git

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## 📂 Project Structure

```bash
src/
├── components/      # 섹션별 컴포넌트 (Hero, About, Projects 등)
├── directives/      # 커스텀 디렉티브 (Scroll Reveal 등)
├── assets/          # 정적 리소스
├── App.vue          # 메인 레이아웃
└── main.ts          # 진입점 및 전역 설정
```
