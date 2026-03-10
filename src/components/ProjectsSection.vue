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
    role: "UI/UX 설계 및 프론트엔드 전담",
    type: "company",
    description:
      "공공시설 고객 문의를 자동화하는 AI 챗봇 SDK. n8n AI Agent 프롬프트 전달 구조를 최적화하여 응답 시간을 1분 10초 → 15초로 약 80% 단축. Pinecone 벡터 DB 기반 RAG로 조례/규정 의미론적 검색 구현. SSE 실시간 스트리밍, postcss-prefix-selector로 CSS 격리, Jenkins CI/CD 파이프라인 구축.",
    highlights: [
      "응답 시간 1분 10초 → 15초 (80% 단축) — 프롬프트 전달 구조 개선",
      "RAG + Pinecone 벡터 DB로 조례/규정 의미론적 검색 구현",
      "SSE 기반 실시간 스트리밍 + AbortController 응답 중단(STOP) 구현",
      "postcss-prefix-selector로 호스트 사이트와 CSS 충돌 0건",
      "개인정보 필터링(주민번호/계좌번호 정규식), 퀵버튼·카드형 챗봇 컴포넌트 설계",
    ],
    tech: ["Vue.js 3", "TypeScript", "Vite", "SSE", "n8n", "Pinecone", "MCP Server", "Jenkins"],
    featured: true,
  },
  {
    title: "미리해핏 사용자/관리자 앱",
    period: "2025.05 ~ 현재",
    company: "체인팜",
    role: "프론트엔드 개발 (예약 시스템 및 센터 연동)",
    type: "company",
    description:
      "일 평균 1,500명이 사용하는 피트니스 예약 서비스. Storybook 기반 CDD로 레슨 일정·강사 관리·예약 상태 핵심 컴포넌트를 독립 개발. Pinia CenterStore로 복잡한 예약 상태를 중앙 집중 관리하여 props drilling 제거. PR 리뷰에서 모달 메시지 상수화를 제안해 프로젝트 전체 적용.",
    highlights: [
      "Storybook CDD 도입으로 8차 QA 대응 효율화",
      "Pinia Store 패턴으로 props drilling 완전 제거",
      "회원가입(FCM Token/전화번호 인증), 예약/이용권, 출입 내역 개발",
      "관리자 앱: 레슨 일정 시각화, 강사 관리 페이지 개발",
      "PR 리뷰에서 상수화 제안 → 프로젝트 전체 적용, 유지보수성 향상",
    ],
    tech: ["Vue.js", "TypeScript", "Pinia", "Storybook", "Vee-Validation"],
    featured: true,
  },
  {
    title: "여주시 공공 체육시설 통합 예약 시스템",
    period: "2024.09 ~ 2025.01",
    company: "체인팜",
    role: "풀스택 개발 주도",
    type: "company",
    description:
      "11개 읍면동에 분산된 예약 시스템을 단일 플랫폼으로 통합. 예약 충돌 방지 로직, PG 결제 연동, 가상계좌 입금 처리, 카카오 알림톡 API 연동. 관리자 대시보드 일일·주간 예약 현황 시각화. 현장 담당자 직접 교육 및 매뉴얼 제작.",
    highlights: [
      "11개 읍면동 분산 시스템 → 단일 플랫폼 통합",
      "예약 시간대 충돌 방지 로직 구현",
      "PG 결제 + 가상계좌 입금 처리 연동",
      "카카오 알림톡 API 연동",
      "현장 교육 및 운영 매뉴얼 제작",
    ],
    tech: ["JSP", "Spring Boot", "jQuery", "MariaDB", "PG 연동"],
    featured: true,
  },
  {
    title: "웹 접근성 인증 대응",
    period: "2024.09 ~ 현재",
    company: "체인팜",
    role: "웹접근성 진단 및 개선",
    type: "company",
    description:
      "금은모래 캠핑장, 이포보 캠핑장, 인천 관광기업지원센터, 여주도시공사 4개 공공 웹사이트 웹접근성 인증 심사 통과. div 남용 구조를 시맨틱 마크업으로 개선하고, ARIA 속성·키보드 접근성·스크린리더 호환성을 전수 점검.",
    highlights: [
      "4개 공공 웹사이트 웹접근성 인증 심사 통과",
      "시맨틱 태그(header/nav/main/footer) 구조 전면 개선",
      "이미지 대체 텍스트 전수 점검 및 추가",
      "Skip Navigation, 포커스 아웃라인, 키보드 이동 순서 구현",
      "진단 및 개선사항 리스트업 문서화",
    ],
    tech: ["HTML5", "CSS3", "jQuery", "ARIA"],
    featured: false,
  },
  {
    title: "인천시티투어 관광 예약 웹사이트 리뉴얼",
    period: "2024.10 ~ 2025.10",
    company: "체인팜",
    role: "프론트엔드 전체 담당",
    type: "company",
    description:
      "인천시티투어 전체 프론트엔드 담당. 메인 페이지·GNB·Footer 퍼블리싱, 달력 컴포넌트, 버스 좌석 선택 UI, 결제 페이지, 게시판 CRUD 개발. WBS 작성 및 일정 관리. 약 13개월 장기 프로젝트.",
    highlights: [
      "메인~결제 전 페이지 프론트엔드 단독 담당",
      "달력·버스 좌석 선택 등 커스텀 UI 컴포넌트 개발",
      "WBS 작성 및 QA 일정 관리",
    ],
    tech: ["JSP", "Spring Boot", "jQuery", "MyBatis", "MariaDB"],
    featured: false,
  },
  {
    title: "광고 CMS 시스템",
    period: "2024.06 ~ 2024.08",
    company: "체인팜",
    role: "사용자/관리자 풀스택 개발",
    type: "company",
    description:
      "광고 계약 및 집행 관리를 위한 CMS 시스템 사용자/관리자 풀스택 개발. DB 설계(AD_CONTRACT 테이블), 전자서명 이력 관리 기능 구현. 화면설계서·DB 정의서·WBS 문서 작성.",
    highlights: [
      "AD_CONTRACT DB 설계 및 전자서명 이력 관리",
      "화면설계서·DB 정의서·WBS 전 문서 작성",
    ],
    tech: ["JSP", "Spring Boot", "jQuery", "MariaDB"],
    featured: false,
  },
  {
    title: "유지보수 총괄 (21개 사이트)",
    period: "2025.03 ~ 현재",
    company: "체인팜",
    role: "유지보수 총괄",
    type: "company",
    description:
      "공공기관 및 민간 웹사이트 21개를 동시 관리. CS 운영 대응, 레거시 코드 분석·개선, 신규 기능 추가. 백엔드 로그 직접 분석을 통해 API 오류를 BE 개발자와 협업하여 신속 해결.",
    highlights: [
      "공공기관 및 민간 웹사이트 21개 동시 관리",
      "백엔드 로그 직접 분석 → BE 협업으로 빠른 버그 대응",
      "레거시 JSP/Spring 코드 분석 및 점진적 개선",
    ],
    tech: ["JSP", "Spring Boot", "jQuery", "MariaDB"],
    featured: false,
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
          class="project-card card reveal"
          :class="{ featured: project.featured }"
          @click="selectedProject = project"
          role="button"
          tabindex="0"
          @keydown.enter="selectedProject = project"
          :aria-label="`${project.title} 상세 보기`"
          :style="{ transitionDelay: `${index * 40}ms` }"
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
