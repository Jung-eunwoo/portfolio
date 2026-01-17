<script setup lang="ts">
const highlights = [
  {
    icon: 'code',
    title: '클린 코드',
    description: '읽기 쉽고 유지보수하기 좋은 코드를 작성합니다.',
  },
  {
    icon: 'performance',
    title: '성능 최적화',
    description: '웹 성능을 분석하고 최적화하여 사용자 경험을 개선합니다.',
  },
  {
    icon: 'collaboration',
    title: '협업',
    description: '팀원들과 원활한 소통으로 효율적인 협업을 추구합니다.',
  },
]
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 v-scroll-reveal class="section-title reveal">About Me</h2>

      <div class="about-content">
        <div v-scroll-reveal="{ delay: 100 }" class="about-text reveal">
          <p>
            안녕하세요! 저는 <strong>N년차 프론트엔드 개발자</strong>입니다.
          </p>
          <p>
            사용자 중심의 인터페이스를 만드는 것에 열정을 가지고 있으며,
            새로운 기술을 배우고 적용하는 것을 즐깁니다.
          </p>
          <p>
            현재는 Vue.js와 TypeScript를 주로 사용하며,
            웹 접근성과 성능 최적화에 관심이 많습니다.
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
              <svg v-if="item.icon === 'code'" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z"/>
              </svg>
              <svg v-else-if="item.icon === 'performance'" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 18.94 22 15.27 22 11c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.94 2.55 2 6.81 2 12c0 4.27 2.09 7.94 5.22 9.78L6 23h5v-5l-2.28 2.28C6.92 18.96 5 16.26 5 12.99c0-4.08 3.05-7.44 7-7.93V2.05h-1z"/>
              </svg>
              <svg v-else-if="item.icon === 'collaboration'" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
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
  border-bottom: 1px solid var(--border);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-text {
  max-width: 700px;
}

.about-text p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.8;
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.highlight-card {
  text-align: center;
  padding: 2rem;
}

.highlight-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--forest-pale);
  border: 1px solid var(--forest-light);
  color: var(--forest-dark);
  margin-bottom: 1rem;
  transition: all 0.2s ease;
}

.highlight-card:hover .highlight-icon {
  background: var(--forest-light);
  color: #ffffff;
}

.highlight-title {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.highlight-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
}
</style>
