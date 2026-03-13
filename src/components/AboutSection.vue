<script setup lang="ts">
const highlights = [
  {
    icon: "code",
    title: "컴포넌트 주도 개발",
    description:
      "Storybook 기반 CDD로 UI 컴포넌트 40개+를 독립 설계·개발하고, 디자이너와 컴포넌트 단위 리뷰를 진행하여 UI 일관성 확보.",
  },
  {
    icon: "performance",
    title: "서비스 전 과정 주도",
    description:
      "설계·개발·배포를 넘어, 현장 담당자 소통을 통한 민원 데이터 분석 및 주간 현황 대시보드 개발로 민원 30% 감소.",
  },
  {
    icon: "collaboration",
    title: "DX 개선 및 팀 리딩",
    description:
      "Git 서브모듈 전략, CodeRabbit 도입, Jenkins CI/CD 구축 등 팀 개발 생산성 향상을 주도.",
  },
];
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 v-scroll-reveal class="section-title reveal">About Me</h2>

      <div class="about-content">
        <div v-scroll-reveal="{ delay: 100 }" class="about-text reveal">
          <p>
            <strong>월 5만명이 사용하는 예약 서비스의 프론트엔드를 바닥부터 설계하고, 운영하고 있습니다.</strong>
          </p>
          <p>
            런칭 이후에도 11개 현장 담당자와 직접 소통하며 운영상 불편을 파악하고, 주간 현황 대시보드를 추가 개발해 민원 건수를 30% 감소시키는 등 단순한 기능 개발을 넘어 사후 개선까지 서비스 전 과정을 주도해왔습니다.
          </p>
        </div>

        <div class="highlights">
          <div
            v-for="(item, index) in highlights"
            :key="item.title"
            v-scroll-reveal="{ delay: 200 + index * 100 }"
            class="highlight-card card reveal-scale"
          >
            <div class="highlight-icon">
              <svg
                v-if="item.icon === 'code'"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z"
                />
              </svg>
              <svg
                v-else-if="item.icon === 'performance'"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 18.94 22 15.27 22 11c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.94 2.55 2 6.81 2 12c0 4.27 2.09 7.94 5.22 9.78L6 23h5v-5l-2.28 2.28C6.92 18.96 5 16.26 5 12.99c0-4.08 3.05-7.44 7-7.93V2.05h-1z"
                />
              </svg>
              <svg
                v-else-if="item.icon === 'collaboration'"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                />
              </svg>
            </div>
            <h3 class="highlight-title">{{ item.title }}</h3>
            <p class="highlight-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.about-text {
  max-width: 680px;
}

.about-text p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 1.1rem;
  line-height: 1.85;
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.highlight-card {
  text-align: center;
  padding: 2.25rem 1.75rem;
}

.highlight-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--forest-pale);
  color: var(--forest-dark);
  margin-bottom: 1.25rem;
  transition: all 0.25s ease;
}

.highlight-card:hover .highlight-icon {
  background: var(--forest-medium);
  color: #ffffff;
}

.highlight-title {
  margin-bottom: 0.6rem;
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.highlight-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}
</style>
