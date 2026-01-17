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
      "미리해핏 사용자/관리자 앱: Vue.js, TypeScript, Pinia, Storybook 기반 예약 시스템 개발",
      'AI CS 챗봇 "미리봇": n8n AI Agent 응답 시간 1분 10초 → 15초로 80% 단축',
      "웹 접근성 인증: 4개 공공 웹사이트 웹 접근성 인증 심사 통과",
      "관광 예약 웹사이트 리뉴얼(인천시티투어): 프론트엔드 전체 담당, 약 13개월 진행",
      "여주시 공공 체육시설 통합 예약 시스템: 풀스택 개발 주도, PG 연동 및 카카오 알림톡 API 연동",
      "유지보수 총괄: 공공기관 및 민간 웹사이트 21개 동시 관리",
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
  <section id="experience" class="experience">
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
          <div class="timeline-content card">
            <div class="exp-header">
              <div>
                <h3 class="exp-company">{{ exp.company }}</h3>
                <p class="exp-role">{{ exp.role }}</p>
              </div>
              <span class="exp-period badge">{{ exp.period }}</span>
            </div>
            <ul class="exp-description">
              <li v-for="(item, index) in exp.description" :key="index">
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
  border-bottom: 1px solid var(--border);
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
  background: var(--border);
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
  top: 1.5rem;
  width: 10px;
  height: 10px;
  background: var(--bg-primary);
  border: 2px solid var(--text-primary);
  border-radius: 50%;
  transform: translateX(-4.5px);
}

.timeline-content {
  padding: 1.5rem;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.exp-company {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.exp-role {
  color: var(--text-secondary);
  font-weight: 400;
}

.exp-period {
  flex-shrink: 0;
}

.exp-description {
  list-style: none;
  margin-bottom: 1rem;
}

.exp-description li {
  position: relative;
  padding-left: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  line-height: 1.7;
}

.exp-description li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--text-muted);
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: "SF Mono", "Fira Code", monospace;
}

@media (max-width: 768px) {
  .exp-header {
    flex-direction: column;
  }
}
</style>
