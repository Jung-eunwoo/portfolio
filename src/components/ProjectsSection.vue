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
    period: "2026.01 ~ 2026.03",
    company: "체인팜",
    role: "UI/UX 설계 및 프론트엔드 전담 (FE 1명, BE 2명)",
    type: "company",
    description:
      "AI 기반 지역 내 시설 안내 CS 챗봇 서비스.",
    highlights: [
      "레거시 시스템(JSP 기반)에 Vue 위젯을 SDK 형태(Vite IIFE 빌드)로 삽입하는 구조를 설계하고, 호스트 페이지와의 CSS 충돌을 postcss-prefix-selector 기반 격리로 해결하여 스타일 충돌 0건 달성",
      "사용자가 응답 완료까지 대기해야 하는 UX 문제를 SSE 기반 실시간 스트리밍(fetch + ReadableStream)으로 해결하여 체감 응답 시간 단축",
      "수동 배포의 휴먼 에러를 방지하기 위해 Jenkins CI/CD 파이프라인을 구축하여 배포 자동화",
    ],
    tech: ["Vue.js 3", "TypeScript", "Vite", "SSE", "n8n", "postcss-prefix-selector", "Jenkins"],
    featured: true,
  },
  {
    title: "미리해핏 사용자/관리자 앱",
    period: "2025.05 ~ 현재",
    company: "체인팜",
    role: "프론트엔드 개발 (FE 3명, BE 2명, 기획 1명)",
    type: "company",
    description:
      "월 5만명이 사용하는 피트니스 센터 예약 서비스. 사용자 앱(예약·이용권·출입 내역)과 관리자 앱(레슨 일정·강사 관리)을 프론트엔드 전담 개발했습니다.",
    highlights: [
      "사용자 앱/관리자 앱에서 유사한 UI가 중복 개발되는 비효율을 해결하기 위해 Storybook 기반 CDD를 도입하여 UI 컴포넌트 40개+를 독립 설계·개발하고, 디자이너와 컴포넌트 단위 리뷰를 진행하여 UI 일관성 확보",
      "단일 boolean 구조로는 동일 슬롯에서 복수 항목을 선택할 수 없는 문제를, 배열 기반 데이터 구조로 재설계하고 3단 컴포넌트 계층(Form→Selector→Item)으로 책임을 분리하여 다중 선택 기능 구현",
      "앱 전체에 흩어져 매번 다르게 안내되던 모달 UI를 전수 파악하여, Store 기반 모달 관리 패턴(호출→응답→후속처리)으로 통합하고 메시지를 상수로 일원화하여 사용자 안내 일관성 확보",
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
      "큰 일정만 선택하면 AI가 세부 장소·루트를 자동 생성하는 하루 일정 추천 플래너. 프론트엔드 아키텍처 설계 및 팀 리딩 담당.",
    highlights: [
      "4인 팀에서 프론트엔드 아키텍처 설계 및 Storybook 기반 컴포넌트 시스템을 구축하고, Git 서브모듈 전략과 CodeRabbit을 도입하여 코드 리뷰 효율화 및 팀 개발 컨벤션 정립을 주도",
      "5단계 회원가입 플로우를 설계하고, 인증 시간 만료 시 자동 이탈 처리 및 히스토리 기반 안전한 뒤로가기(safeBack) 유틸리티를 직접 설계하여 엣지 케이스 대응",
    ],
    tech: ["React", "React Query", "Storybook", "Vite", "TailwindCSS"],
    github: "https://github.com/T-BluePot/barogagi",
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
