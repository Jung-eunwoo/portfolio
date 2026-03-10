<script setup lang="ts">
import { ref, computed } from "vue";
import ProjectModal from "./ProjectModal.vue";

type ProjectType = "company" | "personal";
type FilterType = "all" | ProjectType;

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  tech: string[];
  period: string;
  company: string;
  role?: string;
  type: ProjectType;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const activeFilter = ref<FilterType>("all");
const selectedProject = ref<Project | null>(null);

const filters: { key: FilterType; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "company", label: "회사 프로젝트" },
  { key: "personal", label: "개인 / 사이드" },
];

const projects: Project[] = [
  /* ─ 회사 ─────────────────────────────── */
  {
    title: 'AI CS 챗봇 "미리봇"',
    period: "2025.08 ~ 현재",
    company: "체인팜",
    role: "UI/UX 설계 및 프론트엔드 전담 (FE 1명, BE 2명)",
    type: "company",
    description:
      "공공시설(캠핑장·체육시설·관광기업지원센터) 고객 문의를 자동화하는 AI 챗봇 SDK. n8n AI Agent의 프롬프트 전달 구조를 재설계해 응답 시간을 1분 10초 → 15초로 80% 단축. Pinecone 벡터 DB 기반 RAG로 조례·규정 의미론적 검색을 구현하고, SSE 스트리밍·postcss-prefix-selector CSS 격리·Jenkins CI/CD까지 전 과정을 단독 설계·구현했습니다.",
    highlights: [
      "응답 시간 1분 10초 → 15초 (80% 단축) — 각 MCP 툴에 맞는 프롬프트만 분리 전달하도록 구조 재설계",
      "RAG + Pinecone 벡터 DB로 조례/규정 의미론적 검색 구현 — 키워드 매칭 한계 극복",
      "SSE 기반 실시간 스트리밍 + AbortController 응답 중단(STOP) 구현",
      "postcss-prefix-selector로 호스트 JSP 사이트와 CSS 충돌 0건 달성",
      "주민번호·계좌번호 정규식 기반 개인정보 자동 차단 필터 설계",
      "퀵버튼·카드형·스텝형 등 채팅 특화 컴포넌트 라이브러리 자체 구축",
      "Jenkins CI/CD 파이프라인으로 SDK 자동 빌드·배포 환경 구성",
    ],
    tech: ["Vue.js 3", "TypeScript", "Vite", "SSE", "n8n", "Pinecone", "MCP Server", "postcss-prefix-selector", "Jenkins"],
    featured: true,
  },
  {
    title: "미리해핏 사용자/관리자 앱",
    period: "2025.05 ~ 현재",
    company: "체인팜",
    role: "프론트엔드 개발 (FE 3명, BE 2명, 기획 1명)",
    type: "company",
    description:
      "일 평균 1,500명이 이용하는 피트니스 센터 예약 서비스. 예약 상태(예약중/완료/취소/환불)가 여러 컴포넌트에서 필요해 props drilling이 심각해진 문제를, Pinia CenterStore 패턴으로 중앙 집중 관리하여 해결. Storybook 기반 CDD로 핵심 컴포넌트를 독립 개발·문서화해 8차 QA를 효율적으로 대응. PR 리뷰에서 모달 메시지 상수화를 제안해 프로젝트 전체에 적용, 유지보수성을 향상시켰습니다.",
    highlights: [
      "Pinia CenterStore로 예약 상태 중앙 집중 관리 → props drilling 완전 제거",
      "Storybook CDD 도입으로 컴포넌트 단위 독립 개발 — 8차 QA 버그 범위 특정 용이",
      "회원가입(FCM Token·전화번호 인증), 예약·이용권, 출입 내역 화면 개발",
      "관리자 앱: 레슨 일정 시각화, 강사 관리·프로필 페이지 개발",
      "TypeScript 인터페이스로 API 응답 타입 정의 → 런타임 오류 사전 방지",
      "PR 리뷰에서 모달 메시지 상수화 제안 → 프로젝트 전체 적용",
      "사용자 매뉴얼 및 정책 플로우 차트 작성",
    ],
    tech: ["Vue.js 3", "TypeScript", "Pinia", "Storybook", "Vee-Validation", "Git"],
    featured: true,
  },
  /* ─ 개인/사이드 ────────────────────────── */
  {
    title: "AI 기반 스마트 일정 추천 플래너 '바로가기'",
    period: "2025.05 ~ 현재",
    company: "개인 프로젝트",
    role: "프론트엔드 리드 (팀: BE 2명, FE 2명)",
    type: "personal",
    description:
      "키워드 기반으로 하루 일정을 자동 추천하는 스마트 플래너. 레고 블록처럼 큰 일정만 선택하면 AI가 세부 장소·루트를 생성. 프론트엔드 개발, 레이아웃 디자인, 프로젝트 구조 설계 및 리딩 담당.",
    highlights: [
      "AI 기반 하루 일정 자동 생성 서비스 기획 및 FE 리드",
      "React + React Query로 서버 상태 관리 최적화",
      "Storybook 기반 디자인 시스템 구축",
    ],
    tech: ["React", "React Query", "Storybook", "Vite", "TailwindCSS"],
    github: "https://github.com/T-BluePot/barogagi-front",
    featured: true,
  },
  {
    title: "NEVERMIND",
    period: "2023.10 ~ 2023.12",
    company: "광주인공지능사관학교",
    role: "팀장 / 프론트엔드 개발",
    type: "personal",
    description:
      "CLIP 모델 기반 콘텐츠 속 코디 인식 및 자연어 개인화 추천 서비스. 팀장으로서 프론트엔드 개발 및 프로젝트 총괄. 최종 프로젝트 발표회 우수상 수상. (팀 구성: BE 2명, FE 2명)",
    highlights: [
      "최종 프로젝트 발표회 우수상 수상",
      "CLIP 모델 기반 코디 인식 + 자연어 추천 서비스",
      "팀장으로 일정 관리, 기술 스택 선정, 발표 총괄",
      "React + TypeScript 풀스택(Node.js/Express) 개발",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "ExpressJS", "Python", "Docker"],
    github: "https://github.com/CDHANSOO/nevermind",
    featured: true,
  },
];

const filteredProjects = computed(() =>
  activeFilter.value === "all"
    ? projects
    : projects.filter((p) => p.type === activeFilter.value)
);

const counts = computed(() => ({
  all: projects.length,
  company: projects.filter((p) => p.type === "company").length,
  personal: projects.filter((p) => p.type === "personal").length,
}));
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <!-- 헤더 + 탭 -->
      <div class="projects-header">
        <h2 v-scroll-reveal class="section-title reveal">Projects</h2>

        <div v-scroll-reveal="{ delay: 80 }" class="filter-tabs reveal-fade">
          <button
            v-for="f in filters"
            :key="f.key"
            class="filter-tab"
            :class="{ active: activeFilter === f.key }"
            @click="activeFilter = f.key"
          >
            {{ f.label }}
            <span class="tab-count">{{ counts[f.key] }}</span>
          </button>
        </div>
      </div>

      <!-- 그리드 -->
      <TransitionGroup name="project-list" tag="div" class="projects-grid">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          v-scroll-reveal="{ delay: index * 80 }"
          class="project-card card reveal"
          :class="{ featured: project.featured }"
          @click="selectedProject = project"
          role="button"
          tabindex="0"
          @keydown.enter="selectedProject = project"
          :aria-label="`${project.title} 상세 보기`"
        >
          <!-- 카드 헤더 -->
          <div class="project-header">
            <div class="project-type-badge" :class="project.type">
              {{ project.type === 'company' ? '회사' : '개인' }}
            </div>
            <div class="project-badges">
              <span v-if="project.featured" class="featured-star" aria-label="Featured">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              <svg v-if="project.github" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" class="icon-github">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
          </div>

          <!-- 제목 + 메타 -->
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-meta">
            <span class="project-company">{{ project.company }}</span>
            <span class="project-period">{{ project.period }}</span>
          </div>

          <!-- 설명 -->
          <p class="project-description">{{ project.description }}</p>

          <!-- 기술 스택 -->
          <div class="project-tech">
            <span v-for="tech in project.tech.slice(0, 4)" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
            <span v-if="project.tech.length > 4" class="tech-tag tech-more">
              +{{ project.tech.length - 4 }}
            </span>
          </div>

          <!-- 클릭 힌트 -->
          <div class="card-hint">
            자세히 보기
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </article>
      </TransitionGroup>
    </div>
  </section>

  <!-- 모달 -->
  <Transition name="modal-fade">
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </Transition>
</template>

<style scoped>
.projects {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
}

/* ─── 헤더 ─── */
.projects-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.projects-header .section-title {
  margin-bottom: 0;
}

/* ─── 필터 탭 ─── */
.filter-tabs {
  display: flex;
  gap: 0.375rem;
  background: var(--cream-mid);
  border-radius: 9999px;
  padding: 0.25rem;
}

.filter-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.filter-tab:hover {
  color: var(--text-secondary);
}

.filter-tab.active {
  background: var(--forest-dark);
  color: #ffffff;
}

.tab-count {
  font-size: 0.68rem;
  opacity: 0.7;
  font-variant-numeric: tabular-nums;
}

.filter-tab.active .tab-count {
  opacity: 0.8;
}

/* ─── 그리드 ─── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.25rem;
}

/* ─── 카드 ─── */
.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.project-card:hover {
  border-color: var(--sage-light);
  box-shadow: 0 8px 28px rgba(26, 71, 42, 0.1);
  transform: translateY(-3px);
}

.project-card.featured {
  border-left: 3px solid var(--forest-light);
}

/* ─── 카드 헤더 ─── */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-type-badge {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.625rem;
  border-radius: 4px;
}

.project-type-badge.company {
  background: var(--forest-pale);
  color: var(--forest-medium);
}

.project-type-badge.personal {
  background: rgba(201, 168, 76, 0.1);
  color: #8a6d1a;
}

.project-badges {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
}

.featured-star {
  color: var(--sage);
  display: flex;
  align-items: center;
}

.icon-github {
  color: var(--text-muted);
}

/* ─── 제목 ─── */
.project-title {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── 메타 ─── */
.project-meta {
  display: flex;
  align-items: center;
  margin-bottom: 0.875rem;
  font-size: 0.77rem;
}

.project-company {
  color: var(--forest-medium);
  font-weight: 600;
}

.project-company::after {
  content: "·";
  margin: 0 0.4rem;
  color: var(--text-muted);
  font-weight: 400;
}

.project-period {
  color: var(--text-muted);
}

/* ─── 설명 ─── */
.project-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.75;
  flex: 1;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── 기술 스택 ─── */
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.tech-tag {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--forest-medium);
  background: var(--forest-pale);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-family: "SF Mono", "Fira Code", monospace;
}

.tech-more {
  color: var(--text-muted);
  background: var(--cream-mid);
}

/* ─── 클릭 힌트 ─── */
.card-hint {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-top: auto;
  transition: color 0.2s ease;
}

.project-card:hover .card-hint {
  color: var(--forest-medium);
}

/* ─── TransitionGroup 애니메이션 ─── */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.3s ease;
}

.project-list-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.project-list-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.project-list-move {
  transition: transform 0.35s ease;
}

/* ─── 모달 트랜지션 ─── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* ─── 모바일 ─── */
@media (max-width: 640px) {
  .projects-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
