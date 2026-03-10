<script setup lang="ts">
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    company: "체인팜",
    role: "Frontend Developer",
    period: "2024.06 - 현재",
    description: [
      "미리해핏 사용자/관리자 앱: Vue.js, TypeScript, Pinia, Storybook 기반 예약 시스템 개발 (Pinia Store로 props drilling 제거)",
      'AI CS 챗봇 "미리봇": RAG 기반 의미론적 검색으로 AI 챗봇 응답 시간 80% 단축 (1분 10초 → 15초)',
      "웹 접근성 인증: 4개 공공 웹사이트 웹 접근성 심사 통과 (시맨틱 마크업, ARIA 속성, 키보드 접근성)",
      "관광 예약 웹사이트 리뉴얼(인천시티투어): 메인-결제 페이지까지 프론트엔드 전체 담당, 약 13개월 진행",
      "여주시 공공 체육시설 통합 예약 시스템: 풀스택 개발 주도 (11개 읍면동 분산 시스템 통합, 예약 충돌 방지 로직 구현)",
      "유지보수 총괄: 공공기관 및 민간 웹사이트 21개를 동시 관리하며 빠른 버그 대응 및 기능 추가",
    ],
    tech: [
      "Vue.js",
      "TypeScript",
      "Pinia",
      "Storybook",
      "n8n",
      "Spring Boot",
      "jQuery",
    ],
  },
];
</script>

<template>
  <section id="experience" class="experience dark-section">
    <div class="container">
      <h2 v-scroll-reveal class="section-title reveal">Experience</h2>

      <div class="timeline">
        <article
          v-for="(exp, index) in experiences"
          :key="exp.company + exp.period"
          v-scroll-reveal="{ delay: 100 + index * 200 }"
          class="timeline-item reveal-left"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content card-dark">
            <div class="exp-header">
              <div>
                <h3 class="exp-company">{{ exp.company }}</h3>
                <p class="exp-role">{{ exp.role }}</p>
              </div>
              <span class="exp-period">{{ exp.period }}</span>
            </div>
            <ul class="exp-description">
              <li v-for="(item, i) in exp.description" :key="i">
                {{ item }}
              </li>
            </ul>
            <div v-if="exp.tech" class="exp-tech">
              <span v-for="tech in exp.tech" :key="tech" class="tech-tag">
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
.experience {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--border-dark);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 1.75rem;
  width: 9px;
  height: 9px;
  background: var(--sage);
  border: 2px solid var(--forest-deep);
  border-radius: 50%;
  transform: translateX(-4px);
  box-shadow: 0 0 0 3px rgba(122, 158, 126, 0.25);
}

.timeline-content {
  padding: 1.75rem;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.exp-company {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--text-on-dark);
}

.exp-role {
  color: var(--sage-light);
  font-weight: 400;
  font-size: 0.9rem;
}

.exp-period {
  flex-shrink: 0;
  font-size: 0.78rem;
  color: var(--text-on-dark-muted);
  background: rgba(184, 212, 188, 0.12);
  border: 1px solid rgba(184, 212, 188, 0.2);
  padding: 0.25rem 0.875rem;
  border-radius: 9999px;
  letter-spacing: 0.02em;
}

.exp-description {
  list-style: none;
  margin-bottom: 1.25rem;
}

.exp-description li {
  position: relative;
  padding-left: 1.25rem;
  color: var(--text-on-dark-sub);
  margin-bottom: 0.6rem;
  line-height: 1.75;
  font-size: 0.925rem;
}

.exp-description li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--sage);
  font-weight: 300;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-dark);
}

.tech-tag {
  font-size: 0.78rem;
  color: var(--text-on-dark-muted);
  font-family: "SF Mono", "Fira Code", monospace;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .exp-header {
    flex-direction: column;
  }
}
</style>
