<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer p {
  color: var(--text-muted);
  font-size: 0.875rem;
}
</style>
