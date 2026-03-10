<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

interface Project {
  title: string;
  description: string;
  tech: string[];
  period: string;
  company: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const props = defineProps<{ project: Project }>();
const emit = defineEmits<{ close: [] }>();

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") emit("close");
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <Teleport to="body">
    <div
      class="modal-backdrop"
      @click.self="emit('close')"
      role="dialog"
      aria-modal="true"
      :aria-label="project.title"
    >
      <div class="modal-container">
        <!-- 닫기 버튼 -->
        <button class="modal-close" @click="emit('close')" aria-label="닫기">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <!-- 헤더 -->
        <div class="modal-header">
          <div class="modal-meta">
            <span class="modal-company">{{ project.company }}</span>
            <span class="modal-sep">·</span>
            <span class="modal-period">{{ project.period }}</span>
            <span v-if="project.featured" class="modal-featured">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Featured
            </span>
          </div>
          <h2 class="modal-title">{{ project.title }}</h2>
        </div>

        <!-- 구분선 -->
        <div class="modal-divider"></div>

        <!-- 본문 -->
        <div class="modal-body">
          <p class="modal-description">{{ project.description }}</p>
        </div>

        <!-- 기술 스택 -->
        <div class="modal-tech">
          <p class="modal-tech-label">Tech Stack</p>
          <div class="modal-tech-list">
            <span v-for="tech in project.tech" :key="tech" class="tech-chip">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- 링크 -->
        <div v-if="project.github || project.demo" class="modal-links">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="modal-link-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="modal-link-btn modal-link-btn--outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(12, 34, 24, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: backdropIn 0.25s ease;
}

@keyframes backdropIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-container {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(16px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 스크롤바 */
.modal-container::-webkit-scrollbar {
  width: 4px;
}
.modal-container::-webkit-scrollbar-track {
  background: transparent;
}
.modal-container::-webkit-scrollbar-thumb {
  background: var(--sage-light);
  border-radius: 2px;
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cream-mid);
  border: none;
  border-radius: 50%;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--forest-pale);
  color: var(--forest-dark);
}

/* ─── 헤더 ─── */
.modal-header {
  padding-right: 2.5rem;
}

.modal-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.modal-company {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--forest-medium);
  letter-spacing: 0.03em;
}

.modal-sep {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.modal-period {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.modal-featured {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.6rem;
  background: var(--forest-pale);
  border: 1px solid var(--sage-light);
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--forest-dark);
  letter-spacing: 0.04em;
  margin-left: 0.25rem;
}

.modal-title {
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.25;
}

/* ─── 구분선 ─── */
.modal-divider {
  height: 1px;
  background: var(--border);
  margin: 1.75rem 0;
}

/* ─── 본문 ─── */
.modal-body {
  margin-bottom: 2rem;
}

.modal-description {
  font-size: 0.975rem;
  color: var(--text-secondary);
  line-height: 1.85;
}

/* ─── 기술 스택 ─── */
.modal-tech {
  margin-bottom: 2rem;
}

.modal-tech-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.modal-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  padding: 0.35rem 0.875rem;
  background: var(--forest-pale);
  border: 1px solid var(--sage-light);
  border-radius: 9999px;
  font-size: 0.8rem;
  color: var(--forest-dark);
  font-weight: 500;
}

/* ─── 링크 ─── */
.modal-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.modal-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: var(--forest-dark);
  color: #ffffff;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.modal-link-btn:hover {
  background: var(--forest-medium);
  color: #ffffff;
  transform: translateY(-1px);
}

.modal-link-btn--outline {
  background: transparent;
  border: 1.5px solid var(--forest-dark);
  color: var(--forest-dark);
}

.modal-link-btn--outline:hover {
  background: var(--forest-pale);
  color: var(--forest-dark);
}

@media (max-width: 640px) {
  .modal-container {
    padding: 1.75rem 1.5rem;
    max-height: 90vh;
    border-radius: 16px;
  }
}
</style>
