<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const socialLinks = [
  { name: 'GitHub', url: '#', icon: 'github' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:your@email.com', icon: 'email' },
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content">
        <p class="hero-greeting reveal-fade" :class="{ visible: isVisible }">안녕하세요, 저는</p>
        <h1 class="hero-name reveal" :class="{ visible: isVisible }" style="transition-delay: 0.1s">
          홍길동입니다
        </h1>
        <p class="hero-role reveal" :class="{ visible: isVisible }" style="transition-delay: 0.2s">Frontend Developer</p>
        <p class="hero-description reveal" :class="{ visible: isVisible }" style="transition-delay: 0.3s">
          사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성합니다.
          <br />
          새로운 기술을 배우고 적용하는 것을 즐깁니다.
        </p>
        <div class="hero-actions reveal" :class="{ visible: isVisible }" style="transition-delay: 0.4s">
          <a href="#contact" class="btn">연락하기</a>
          <a href="#projects" class="btn btn-outline">프로젝트 보기</a>
        </div>
        <div class="hero-social reveal" :class="{ visible: isVisible }" style="transition-delay: 0.5s">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg v-if="link.icon === 'github'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <svg v-else-if="link.icon === 'linkedin'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <svg v-else-if="link.icon === 'email'" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  border-bottom: 1px solid var(--border);
}

.hero-content {
  max-width: 600px;
}

.hero-greeting {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.hero-name {
  margin-bottom: 0.75rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--forest-dark), var(--forest-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-social {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: all 0.2s ease;
}

.social-link:hover {
  color: var(--forest-dark);
  border-color: var(--forest-dark);
  background: var(--forest-pale);
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    min-height: auto;
    padding-bottom: 3rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    text-align: center;
    justify-content: center;
  }
}
</style>
