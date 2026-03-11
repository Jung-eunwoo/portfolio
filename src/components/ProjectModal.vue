<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  tech: string[];
  period: string;
  company: string;
  role?: string;
  type?: string;
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
        <!-- 닫기 -->
        <button class="modal-close" @click="emit('close')" aria-label="닫기">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <!-- 헤더 -->
        <div class="modal-header">
          <div class="modal-meta">
            <span v-if="project.type" class="modal-type-badge" :class="project.type">
              {{ project.type === 'company' ? '회사 프로젝트' : '개인 프로젝트' }}
            </span>
            <span v-if="project.featured" class="modal-featured">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Featured
            </span>
          </div>
          <h2 class="modal-title">{{ project.title }}</h2>

          <!-- 회사 / 기간 / 역할 -->
          <div class="modal-info-row">
            <span class="modal-company">{{ project.company }}</span>
            <span class="modal-sep">·</span>
            <span class="modal-period">{{ project.period }}</span>
          </div>
          <p v-if="project.role" class="modal-role">{{ project.role }}</p>
        </div>

        <div class="modal-divider"></div>

        <!-- 설명 -->
        <div class="modal-body">
          <p class="modal-description">{{ project.description }}</p>
        </div>

        <!-- 주요 성과 -->
        <div v-if="project.highlights?.length" class="modal-highlights">
          <p class="modal-section-label">주요 성과</p>
          <ul class="highlight-list">
            <li v-for="h in project.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>

        <!-- 기술 스택 -->
        <div class="modal-tech">
          <p class="modal-section-label">Tech Stack</p>
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
  background: rgba(12, 34, 24, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: backdropIn 0.22s ease;
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
  max-width: 620px;
  max-height: 88vh;
  overflow-y: auto;
  position: relative;
  animation: modalIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 28px 72px rgba(0, 0, 0, 0.22);
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.93) translateY(14px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.modal-container::-webkit-scrollbar { width: 4px; }
.modal-container::-webkit-scrollbar-track { background: transparent; }
.modal-container::-webkit-scrollbar-thumb { background: var(--sage-light); border-radius: 2px; }

/* ─── 닫기 ─── */
.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 34px;
  height: 34px;
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
  margin-bottom: 1.5rem;
}

.modal-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.modal-type-badge {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.625rem;
  border-radius: 4px;
}

.modal-type-badge.company {
  background: var(--forest-pale);
  color: var(--forest-medium);
}

.modal-type-badge.personal {
  background: rgba(201, 168, 76, 0.12);
  color: #8a6d1a;
}

.modal-featured {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.6rem;
  background: var(--forest-pale);
  border: 1px solid var(--sage-light);
  border-radius: 9999px;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--forest-dark);
  letter-spacing: 0.04em;
}

.modal-title {
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

.modal-info-row {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 0.3rem;
  flex-wrap: wrap;
}

.modal-company {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--forest-medium);
}

.modal-sep {
  margin: 0 0.4rem;
  color: var(--text-muted);
  font-size: 0.82rem;
}

.modal-period {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.modal-role {
  font-size: 0.82rem;
  color: var(--text-secondary);
  font-style: italic;
}

/* ─── 구분선 ─── */
.modal-divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 1.75rem;
}

/* ─── 섹션 레이블 ─── */
.modal-section-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

/* ─── 설명 ─── */
.modal-body {
  margin-bottom: 1.75rem;
}

.modal-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.85;
}

/* ─── 주요 성과 ─── */
.modal-highlights {
  margin-bottom: 1.75rem;
}

.highlight-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.highlight-list li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.7;
}

.highlight-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--forest-light);
  font-size: 0.78rem;
  top: 0.08em;
}

/* ─── 기술 스택 ─── */
.modal-tech {
  margin-bottom: 1.75rem;
}

.modal-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  padding: 0.3rem 0.8rem;
  background: var(--forest-pale);
  border: 1px solid var(--sage-light);
  border-radius: 9999px;
  font-size: 0.78rem;
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
  padding: 0.6rem 1.2rem;
  background: var(--forest-dark);
  color: #ffffff;
  border-radius: 9999px;
  font-size: 0.83rem;
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
    max-height: 92vh;
    border-radius: 16px;
  }
}
</style>
