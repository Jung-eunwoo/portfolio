<script setup lang="ts">
interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  github?: string
  demo?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: '프로젝트 1',
    description: '프로젝트에 대한 설명을 작성하세요. 어떤 문제를 해결했는지, 어떤 기술을 사용했는지 설명합니다.',
    tech: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: '프로젝트 2',
    description: '프로젝트에 대한 설명을 작성하세요. 어떤 문제를 해결했는지, 어떤 기술을 사용했는지 설명합니다.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: '프로젝트 3',
    description: '프로젝트에 대한 설명을 작성하세요. 어떤 문제를 해결했는지, 어떤 기술을 사용했는지 설명합니다.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    github: '#',
    featured: false,
  },
  {
    title: '프로젝트 4',
    description: '프로젝트에 대한 설명을 작성하세요. 어떤 문제를 해결했는지, 어떤 기술을 사용했는지 설명합니다.',
    tech: ['Vue.js', 'Pinia', 'Firebase'],
    github: '#',
    featured: false,
  },
]
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
          :class="{ 'featured': project.featured }"
        >
          <div class="project-content">
            <div class="project-header">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 3h18v18H3V3z" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 9h18M9 21V9" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="project-links">
                <a v-if="project.github" :href="project.github" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a v-if="project.demo" :href="project.demo" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
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
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.project-card.featured {
  border-color: rgba(59, 130, 246, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  color: var(--accent);
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.project-link {
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.project-link:hover {
  color: var(--accent);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
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
  gap: 0.5rem;
  margin-top: auto;
}

.tech-tag {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: 'SF Mono', 'Fira Code', monospace;
}
</style>
