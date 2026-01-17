<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-container">
      <a href="#" class="logo">Portfolio</a>

      <nav class="nav-desktop">
        <a v-for="item in navItems" :key="item.label" :href="item.href" class="nav-link">
          {{ item.label }}
        </a>
      </nav>

      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="메뉴 열기">
        <svg v-if="!isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>

    <Transition name="fade">
      <nav v-if="isMobileMenuOpen" class="nav-mobile">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-link-mobile"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.3s ease;
  background: var(--bg-primary);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.nav-desktop {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  color: var(--text-muted);
  font-weight: 400;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
}

.nav-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding: 1rem;
}

.nav-link-mobile {
  display: block;
  padding: 1rem;
  color: var(--text-secondary);
  font-weight: 400;
  text-align: center;
  transition: color 0.2s ease;
}

.nav-link-mobile:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav-mobile {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
