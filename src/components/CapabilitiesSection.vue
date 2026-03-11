<script setup lang="ts">
interface Capability {
  number: string;
  title: string;
  summary: string;
  points: string[];
  tags: string[];
}

const capabilities: Capability[] = [
  {
    number: "01",
    title: "컴포넌트 주도 개발",
    summary: "재사용 가능한 UI를 설계하고 문서화합니다",
    points: [
      "Storybook 기반 CDD로 독립적인 컴포넌트 개발",
      "Pinia Store 패턴으로 복잡한 상태 중앙 집중 관리",
      "Vue.js 3 / React 양쪽 프로덕션 경험",
    ],
    tags: ["Vue.js 3", "React", "TypeScript", "Pinia", "Storybook"],
  },
  {
    number: "02",
    title: "성능 최적화",
    summary: "측정 가능한 성과로 사용자 경험을 개선합니다",
    points: [
      "AI 챗봇 응답시간 80% 단축 (1분 10초 → 15초)",
      "SSE 기반 실시간 스트리밍 응답 처리",
      "RAG + Pinecone 벡터 DB 의미론적 검색 구현",
    ],
    tags: ["SSE", "n8n", "Pinecone", "Vite", "성능 튜닝"],
  },
  {
    number: "03",
    title: "웹 접근성 인증",
    summary: "공공 웹사이트 4개 웹 접근성 심사 통과",
    points: [
      "시맨틱 HTML 마크업 및 ARIA 속성 적용",
      "키보드 탐색 및 스크린리더 대응",
      "공공기관 웹 접근성 인증마크 획득 경험",
    ],
    tags: ["HTML5", "ARIA", "CSS3", "접근성 인증"],
  },
  {
    number: "04",
    title: "풀스택 개발",
    summary: "프론트-백엔드 전 영역을 아우르는 개발 역량",
    points: [
      "Spring Boot + MariaDB 백엔드 설계 및 구현",
      "PG 결제 연동, 카카오 알림톡 API 연동",
      "공공기관 21개 웹사이트 유지보수 총괄",
    ],
    tags: ["Spring Boot", "JSP", "MyBatis", "MariaDB", "jQuery"],
  },
];
</script>

<template>
  <section id="capabilities" class="capabilities dark-section">
    <div class="container">
      <div class="capabilities-header">
        <h2 v-scroll-reveal class="section-title reveal">What I Do</h2>
        <p v-scroll-reveal="{ delay: 100 }" class="capabilities-lead reveal">
          프론트엔드 개발을 중심으로 성능 최적화, 접근성, AI 파이프라인까지<br class="pc-only" />
          다양한 영역에서 실무 경험을 쌓아왔습니다.
        </p>
      </div>

      <div class="capabilities-grid">
        <div
          v-for="(item, index) in capabilities"
          :key="item.number"
          v-scroll-reveal="{ delay: 100 + index * 120 }"
          class="capability-card reveal-scale"
        >
          <div class="card-number">{{ item.number }}</div>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-summary">{{ item.summary }}</p>

          <ul class="card-points">
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>

          <div class="card-tags">
            <span v-for="tag in item.tags" :key="tag" class="cap-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.capabilities {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.capabilities-header {
  margin-bottom: 4rem;
}

.capabilities-lead {
  font-size: 1rem;
  color: var(--text-on-dark-sub);
  line-height: 1.85;
  max-width: 560px;
  margin-top: 1rem;
}

.pc-only {
  display: none;
}

@media (min-width: 768px) {
  .pc-only {
    display: block;
  }
}

/* ─── 그리드 ─── */
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* ─── 카드 ─── */
.capability-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-dark);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.capability-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--forest-light), var(--sage-light));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.capability-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(184, 212, 188, 0.3);
  transform: translateY(-3px);
}

.capability-card:hover::before {
  opacity: 1;
}

/* ─── 번호 ─── */
.card-number {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--sage);
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

/* ─── 제목 ─── */
.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-on-dark);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

/* ─── 요약 ─── */
.card-summary {
  font-size: 0.85rem;
  color: var(--sage-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* ─── 포인트 목록 ─── */
.card-points {
  list-style: none;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-points li {
  font-size: 0.855rem;
  color: var(--text-on-dark-sub);
  padding-left: 1.1rem;
  position: relative;
  line-height: 1.65;
}

.card-points li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--sage);
  font-size: 0.75rem;
  top: 0.05em;
}

/* ─── 태그 ─── */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-dark);
}

.cap-tag {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-on-dark-muted);
  background: rgba(255, 255, 255, 0.07);
  padding: 0.2rem 0.625rem;
  border-radius: 4px;
  font-family: "SF Mono", "Fira Code", monospace;
  transition: color 0.2s ease;
}

.capability-card:hover .cap-tag {
  color: var(--sage-light);
}

/* ─── 모바일 ─── */
@media (max-width: 640px) {
  .capabilities-grid {
    grid-template-columns: 1fr;
  }
}
</style>
