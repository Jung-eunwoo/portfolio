<script setup lang="ts">
interface Skill {
  name: string
  level?: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Vue.js' },
      { name: 'React' },
    ],
  },
  {
    title: 'Styling',
    skills: [
      { name: 'Tailwind CSS' },
      { name: 'SCSS/Sass' },
      { name: 'CSS-in-JS' },
      { name: 'Styled Components' },
    ],
  },
  {
    title: 'Tools & Environment',
    skills: [
      { name: 'Git' },
      { name: 'VS Code' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'npm/pnpm' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma' },
      { name: 'Adobe XD' },
    ],
  },
]
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 v-scroll-reveal class="section-title reveal">Skills</h2>

      <div class="skills-grid">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.title"
          v-scroll-reveal="{ delay: 100 + index * 100 }"
          class="skill-category card reveal-scale"
        >
          <h3 class="category-title">{{ category.title }}</h3>
          <div class="skill-list">
            <span v-for="skill in category.skills" :key="skill.name" class="skill-tag">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  border-bottom: 1px solid var(--border);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  padding: 1.5rem;
}

.category-title {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  font-weight: 500;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  border-color: var(--text-primary);
}
</style>
