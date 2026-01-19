<script setup lang="ts">
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

const projects: Project[] = [
  {
    title: "AI 기반 스마트 일정 추천 플래너",
    period: "2025.05 ~ 현재",
    company: "개인 프로젝트",
    description:
      "키워드 기반으로 하루 일정을 자동으로 추천해주는 스마트 플래너. 레고 블록을 쌓듯이 큰 일정만 선택하면 AI가 세부 장소와 루트를 생성. 프론트엔드 개발, 레이아웃 디자인, 프로젝트 구조 설계 및 리딩 담당. (팀 구성: BE 2명, FE 2명)",
    tech: ["React", "React Query", "Storybook", "Vite", "TailwindCSS"],
    github: "https://github.com/T-BluePot/barogagi-front",
    featured: true,
  },
  {
    title: "CHUKAPOKA",
    period: "2023.12 ~ 2024.04",
    company: "개인 프로젝트",
    description:
      "온라인 축하 편지 공유 사이트. 생일축하, 감사 인사 등 직접 전하기 어려운 말들을 간접적으로 전할 수 있는 서비스. 페이지 전체 레이아웃 디자인, circleIcon, treeEditCard 등 컴포넌트 제작. (팀 구성: BE 2명, FE 2명)",
    tech: [
      "Vue.js",
      "SCSS",
      "Vite",
      "Storybook",
      "Vercel",
      "AWS Elastic Beanstalk",
      "Spring Boot",
    ],
    github: "https://github.com/Chukapoka",
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
    title: "NDB",
    period: "2023.07 ~ 2023.08",
    company: "광주인공지능사관학교",
    description:
      "Chat-GPT API를 활용한 개인별 맞춤 코딩 예제 제공 서비스. 프로그래밍 학습 개인화를 목적으로 개발. 팀장으로서 레이아웃 설계 및 전체 프로젝트 관리, 코딩테스트 페이지 iframe 구현. 핵심 프로젝트 발표회 최우수상 수상. (팀 구성: BE 4명, FE 2명)",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "jQuery",
      "ExpressJS",
      "MySQL",
    ],
    github: "https://github.com/eunwooGOD/NDB-Project",
    featured: false,
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
    title: 'AI CS 챗봇 "미리봇"',
    period: "2025.08 ~ 2025.09",
    company: "체인팜",
    description:
      "n8n AI Agent 프롬프트 전달 구조 개선으로 응답 시간 1분 10초 → 15초로 약 80% 단축. Pinecone 벡터 DB를 활용한 RAG 기반 의미론적 문서 검색 구현. 전체 UI/UX 설계 및 프론트엔드 구현.",
    tech: ["Vue.js", "n8n", "Pinecone", "MCP Server"],
    featured: true,
  },
  {
    title: "인천제3연육교 예약 페이지",
    period: "2025.03 ~ 2025.05",
    company: "체인팜",
    description:
      "프로젝트 시작부터 끝까지 프론트엔드 전체 단독 개발. 시설 예약 페이지 프론트엔드 설계 및 구현. 예약 플로우 전체 UI/UX 설계.",
    tech: ["Vue.js", "TypeScript"],
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
          v-scroll-reveal="{ delay: 100 + index * 150 }"
          class="project-card card reveal"
          :class="{ featured: project.featured }"
        >
          <div class="project-content">
            <div class="project-header">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  d="M3 3h18v18H3V3z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 9h18M9 21V9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="project-links">
                <a
                  v-if="project.github"
                  :href="project.github"
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="project-title-row">
              <h3 class="project-title">{{ project.title }}</h3>
              <span v-if="project.featured" class="featured-badge"
                >Featured</span
              >
            </div>
            <div class="project-meta">
              <span class="project-company">{{ project.company }}</span>
              <span class="project-period">{{ project.period }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  border-bottom: 1px solid var(--border);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow: hidden;
}

.project-card.featured {
  border-left: 3px solid var(--forest-medium);
}

.project-card.featured:hover {
  border-left-color: var(--forest-glow);
}

.project-title-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-title {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  font-size: 1.25rem;
  font-weight: 500;
}

.project-title:hover {
  white-space: normal;
  overflow: visible;
}

.featured-badge {
  flex-shrink: 0;
  padding: 0.15rem 0.5rem;
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--forest-medium);
  border: 1px solid var(--forest-medium);
  border-radius: 3px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  color: var(--text-muted);
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.project-link {
  color: var(--text-muted);
  transition: all 0.2s ease;
}

.project-link:hover {
  color: var(--forest-dark);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  font-family: "SF Mono", "Fira Code", monospace;
}

.project-company {
  color: var(--forest-medium);
  font-weight: 500;
}

.project-period {
  color: var(--text-muted);
}

.project-company::after {
  content: "·";
  margin-left: 0.75rem;
  color: var(--text-muted);
}

.project-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
}

.tech-tag {
  font-size: 0.8rem;
  color: var(--forest-medium);
  font-family: "SF Mono", "Fira Code", monospace;
}
</style>
