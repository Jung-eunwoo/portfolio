<script setup lang="ts">
import JungleDecorations from "./JungleDecorations.vue";

interface Skill {
  name: string;
  level?: number;
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
    <div class="skills-decoration-left">
      <JungleDecorations type="vine" size="lg" position="absolute" :opacity="0.08" />
    </div>
    <div class="skills-decoration-right">
      <JungleDecorations type="palm" size="md" position="absolute" :opacity="0.12" />
    </div>
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
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.skills-decoration-left {
  position: absolute;
  bottom: 50px;
  left: -100px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}

.skills-decoration-right {
  position: absolute;
  top: 100px;
  right: -80px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
}

.container {
  position: relative;
  z-index: 1;
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
  background: transparent;
  border: 1px solid var(--forest-light);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--forest-dark);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: var(--forest-light);
  border-color: var(--forest-light);
  color: #ffffff;
}
</style>
