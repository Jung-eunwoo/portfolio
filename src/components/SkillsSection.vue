<script setup lang="ts">
interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "jQuery" },
    ],
  },
  {
    title: "State & UI",
    skills: [
      { name: "Pinia" },
      { name: "TanStack Query" },
      { name: "Storybook" },
      { name: "Vee-Validation" },
      { name: "ARIA" },
      { name: "postcss-prefix-selector" },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Spring Boot" },
      { name: "JSP" },
      { name: "MyBatis" },
      { name: "MariaDB" },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "n8n" },
      { name: "Pinecone" },
      { name: "MCP Server" },
      { name: "Jenkins" },
      { name: "SSE" },
      { name: "Git" },
      { name: "Vite" },
    ],
  },
];
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
            <span
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-tag"
            >
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
  background: var(--cream-mid);
  border-bottom: 1px solid var(--border);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  padding: 1.75rem;
  background: var(--bg-card);
}

.category-title {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1.25rem;
  font-weight: 600;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  display: inline-block;
  padding: 0.4rem 0.875rem;
  background: var(--forest-pale);
  border: 1px solid var(--sage-light);
  border-radius: 9999px;
  font-size: 0.82rem;
  color: var(--forest-dark);
  transition: all 0.2s ease;
  cursor: default;
}

.skill-tag:hover {
  background: var(--forest-medium);
  border-color: var(--forest-medium);
  color: #ffffff;
}
</style>
