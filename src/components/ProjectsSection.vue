<script setup lang="ts">
import { ref } from "vue";
import ProjectModal from "./ProjectModal.vue";

interface Project {
  title: string;
  description: string;
  tech: string[];
  period: string;
  company: string;
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const selectedProject = ref<Project | null>(null);

const projects: Project[] = [
  {
    title: 'AI CS 챗봇 "미리봇"',
    period: "2025.08 ~ 현재",
    company: "체인팜",
    description:
      "n8n AI Agent 프롬프트 전달 구조 개선으로 응답 시간 1분 10초 → 15초로 약 80% 단축. Pinecone 벡터 DB를 활용한 RAG 기반 의미론적 문서 검색 구현. SSE를 통한 실시간 스트리밍 응답 처리. 전체 UI/UX 설계 및 프론트엔드 구현.",
    tech: ["Vue.js 3", "TypeScript", "Vite", "SSE", "n8n", "Pinecone", "MCP Server", "Jenkins"],
    featured: true,
  },
  {
    title: "미리해핏 사용자/관리자 앱",
    period: "2025.05 ~ 현재",
    company: "체인팜",
    description:
      "Storybook 기반 CDD로 레슨 일정, 강사 관리, 예약 상태 등 핵심 컴포넌트를 독립 개발. Pinia Store 패턴으로 복잡한 예약 상태를 중앙 집중 관리하여 props drilling 제거. 8차 QA 대응 효율화.",
    tech: ["Vue.js", "TypeScript", "Pinia", "Storybook", "Vee-Validation"],
    featured: true,
  },
  {
    title: "AI 기반 스마트 일정 추천 플래너 '바로가기'",
    period: "2025.05 ~ 현재",
    company: "개인 프로젝트",
    description:
      "키워드 기반으로 하루 일정을 자동으로 추천해주는 스마트 플래너. 레고 블록을 쌓듯이 큰 일정만 선택하면 AI가 세부 장소와 루트를 생성. 프론트엔드 개발, 레이아웃 디자인, 프로젝트 구조 설계 및 리딩 담당. (팀 구성: BE 2명, FE 2명)",
    tech: ["React", "React Query", "Storybook", "Vite", "TailwindCSS"],
    github: "https://github.com/T-BluePot/barogagi-front",
    featured: true,
  },
  {
    title: "NEVERMIND",
    period: "2023.10 ~ 2023.12",
    company: "광주인공지능사관학교",
    description:
      "CLIP 모델 기반 콘텐츠 속 코디 인식 및 추천 서비스. AI를 활용하여 온라인 콘텐츠 속에서 코디를 인식하고 자연어를 통해 개인화된 코디를 추천. 팀장으로서 프론트엔드 개발 및 프로젝트 총괄. 최종 프로젝트 발표회 우수상 수상. (팀 구성: BE 2명, FE 2명)",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "ExpressJS",
      "Python",
      "Oracle",
      "Docker",
    ],
    github: "https://github.com/CDHANSOO/nevermind",
    featured: true,
  },
  {
    title: "여주시 공공 체육시설 통합 예약 시스템",
    period: "2024.09 ~ 2025.01",
    company: "체인팜",
    description:
      "11개 읍면동 분산 예약 시스템 통합. 예약 시간대 충돌 방지 로직, PG 결제 연동, 카카오 알림톡 API 연동. 관리자 대시보드 일일/주간 예약 현황 시각화. 풀스택 개발 주도.",
    tech: ["JSP", "Spring Boot", "jQuery", "MariaDB", "PG 연동"],
    featured: true,
  },
  {
    title: "웹 접근성 인증 대응",
    period: "2024.09 ~ 현재",
    company: "체인팜",
    description:
      "4개 공공 웹사이트(금은모래 캠핑장, 이포보 캠핑장, 인천 관광기업지원센터, 여주도시공사) 웹 접근성 인증 심사 통과. 시맨틱 마크업, ARIA 속성 적용, 키보드 접근성 개선.",
    tech: ["HTML5", "CSS3", "jQuery", "ARIA"],
    featured: false,
  },
  {
    title: "인천시티투어 관광 예약 웹사이트 리뉴얼",
    period: "2024.10 ~ 2025.10",
    company: "체인팜",
    description:
      "프론트엔드 전체 담당. 메인 페이지, GNB, Footer 퍼블리싱 및 기능 구현. 달력 컴포넌트, 버스 좌석 선택 UI, 결제 페이지, 게시판 CRUD 개발. WBS 작성 및 일정 관리.",
    tech: ["JSP", "Spring Boot", "jQuery", "MyBatis", "MariaDB"],
    featured: false,
  },
];
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 v-scroll-reveal class="section-title reveal">Projects</h2>

      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          v-scroll-reveal="{ delay: 80 + index * 100 }"
          class="project-card card reveal"
          :class="{ featured: project.featured }"
          @click="selectedProject = project"
          role="button"
          tabindex="0"
          @keydown.enter="selectedProject = project"
          :aria-label="`${project.title} 상세 보기`"
        >
          <!-- 카드 헤더: 번호 + 링크 아이콘 -->
          <div class="project-header">
            <span class="project-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="project-badges">
              <span v-if="project.featured" class="featured-star" aria-label="Featured">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              <svg v-if="project.github" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="project-icon-github">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
          </div>

          <!-- 제목 -->
          <h3 class="project-title">{{ project.title }}</h3>

          <!-- 메타 -->
          <div class="project-meta">
            <span class="project-company">{{ project.company }}</span>
            <span class="project-period">{{ project.period }}</span>
          </div>

          <!-- 설명 (3줄 클램프) -->
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 프로젝트 모달 -->
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
  border: 1px solid var(--border);
  transition: all 0.25s ease;
  position: relative;
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
  margin-bottom: 1.25rem;
}

.project-index {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
}

.project-badges {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.featured-star {
  color: var(--sage);
  display: flex;
  align-items: center;
}

.project-icon-github {
  color: var(--text-muted);
}

/* ─── 제목 ─── */
.project-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.625rem;
  line-height: 1.4;
  /* 2줄 클램프 */
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
  gap: 0;
  margin-bottom: 0.875rem;
  font-size: 0.78rem;
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

/* ─── 설명 (3줄 클램프) ─── */
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
  letter-spacing: 0.03em;
  margin-top: auto;
  transition: color 0.2s ease;
}

.project-card:hover .card-hint {
  color: var(--forest-medium);
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

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
