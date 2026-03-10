<script setup lang="ts">
import { ref, onMounted } from "vue";

const isVisible = ref(false);

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Jung-eunwoo", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/%EC%9D%80%EC%9A%B0-%EC%A0%95-6a66a5355/",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:jeunwoo8976@gmail.com", icon: "email" },
];

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section id="hero" class="hero dark-section">
    <!-- 보타니컬 워터마크 SVG -->
    <div class="hero-botanical" aria-hidden="true">
      <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg" fill="none">
        <!-- 몬스테라 큰 잎 -->
        <path
          d="M260 60 C340 80, 420 150, 420 240 C420 320, 370 390, 300 420 L260 450 L220 420 C150 390, 100 320, 100 240 C100 150, 180 80, 260 60"
          stroke="rgba(184,212,188,0.18)"
          stroke-width="1.5"
          fill="rgba(45,90,63,0.08)"
        />
        <!-- 잎 구멍들 -->
        <ellipse cx="220" cy="200" rx="30" ry="45" fill="rgba(12,34,24,0.6)" />
        <ellipse cx="300" cy="215" rx="25" ry="40" fill="rgba(12,34,24,0.6)" />
        <ellipse cx="260" cy="310" rx="40" ry="28" fill="rgba(12,34,24,0.5)" />
        <!-- 잎맥 -->
        <path
          d="M260 60 L260 440"
          stroke="rgba(184,212,188,0.15)"
          stroke-width="1"
        />
        <path
          d="M260 150 Q210 200, 175 250 M260 150 Q310 200, 345 250"
          stroke="rgba(184,212,188,0.12)"
          stroke-width="0.8"
          stroke-linecap="round"
        />
        <path
          d="M260 230 Q200 275, 155 310 M260 230 Q320 275, 365 310"
          stroke="rgba(184,212,188,0.12)"
          stroke-width="0.8"
          stroke-linecap="round"
        />
        <!-- 작은 잎 장식 (아래) -->
        <path
          d="M80 480 Q100 450, 130 460 Q120 490, 95 500 Q75 510, 80 480"
          stroke="rgba(184,212,188,0.2)"
          stroke-width="1"
          fill="rgba(45,90,63,0.12)"
        />
        <path
          d="M380 500 Q400 470, 430 480 Q420 510, 395 520 Q370 530, 380 500"
          stroke="rgba(184,212,188,0.2)"
          stroke-width="1"
          fill="rgba(45,90,63,0.12)"
        />
      </svg>
    </div>

    <div class="container">
      <div class="hero-content">
        <p class="hero-greeting reveal-fade" :class="{ visible: isVisible }">
          안녕하세요, 저는
        </p>
        <h1
          class="hero-name reveal"
          :class="{ visible: isVisible }"
          style="transition-delay: 0.1s"
        >
          정은우입니다
        </h1>
        <p
          class="hero-role reveal"
          :class="{ visible: isVisible }"
          style="transition-delay: 0.2s"
        >
          Frontend Developer
        </p>
        <p
          class="hero-description reveal"
          :class="{ visible: isVisible }"
          style="transition-delay: 0.3s"
        >
          사용자 중심의 UI/UX를 설계하고, 웹 접근성과 성능 최적화에 관심이
          많습니다.
          <br />
          Vue.js, TypeScript 기반의 프론트엔드 개발과 풀스택 경험을 보유하고
          있습니다.
        </p>
        <div
          class="hero-actions reveal"
          :class="{ visible: isVisible }"
          style="transition-delay: 0.4s"
        >
          <a href="#contact" class="btn btn-light">연락하기</a>
          <a href="#projects" class="btn btn-outline-light">프로젝트 보기</a>
        </div>
        <div
          class="hero-social reveal"
          :class="{ visible: isVisible }"
          style="transition-delay: 0.5s"
        >
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg v-if="link.icon === 'github'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <svg v-else-if="link.icon === 'linkedin'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <svg v-else-if="link.icon === 'email'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- 스크롤 힌트 -->
    <div class="scroll-hint" :class="{ visible: isVisible }">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px; /* navbar 높이 */
  position: relative;
  overflow: hidden;
}

/* ─── 보타니컬 워터마크 ─── */
.hero-botanical {
  position: absolute;
  right: -5%;
  top: 5%;
  width: 45%;
  max-width: 500px;
  height: 90%;
  pointer-events: none;
  z-index: 0;
}

.hero-botanical svg {
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 640px;
}

.hero-greeting {
  font-size: 0.85rem;
  color: var(--text-on-dark-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 400;
}

.hero-name {
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  /* 크림 → 세이지 그라디언트 */
  background: linear-gradient(135deg, #f5f0e8 30%, #b8d4bc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  font-size: 1.1rem;
  color: var(--sage-light);
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-bottom: 1.75rem;
}

.hero-description {
  font-size: 1rem;
  color: var(--text-on-dark-sub);
  margin-bottom: 2.5rem;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.hero-social {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--border-dark);
  color: var(--text-on-dark-muted);
  transition: all 0.2s ease;
}

.social-link:hover {
  color: var(--text-on-dark);
  border-color: var(--sage-light);
  background: rgba(184, 212, 188, 0.1);
}

/* ─── 스크롤 힌트 ─── */
.scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 1s ease 1.2s;
  pointer-events: none;
}

.scroll-hint.visible {
  opacity: 1;
}

.scroll-hint span {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-on-dark-muted);
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--text-on-dark-muted), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.1); }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
    min-height: 100svh;
  }

  .hero-botanical {
    width: 65%;
    opacity: 0.6;
  }

  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .scroll-hint {
    display: none;
  }
}
</style>
