<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner container">
      <a href="#" class="logo" @click="closeMobileMenu">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="logo-leaf">
          <path d="M12 2c5.33 4.55 8 6.75 8 9.72C20 17.4 16.4 21 12 21s-8-3.6-8-9.28C4 8.75 6.67 6.55 12 2z" />
        </svg>
        Portfolio
      </a>

      <nav class="nav-desktop">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-link"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :aria-label="isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'"
      >
        <svg v-if="!isMobileMenuOpen" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>

    <Transition name="slide-down">
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
  transition: all 0.35s ease;
  /* 다크 히어로 위 → 투명 */
  background: transparent;
  --nav-text: var(--text-on-dark);
  --nav-text-muted: var(--text-on-dark-muted);
  --nav-logo-color: var(--text-on-dark);
}

.navbar.scrolled {
  background: rgba(249, 246, 240, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.06);
  --nav-text: var(--text-secondary);
  --nav-text-muted: var(--text-muted);
  --nav-logo-color: var(--forest-dark);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--nav-logo-color);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;
}

.logo:hover {
  color: var(--sage-light);
}

.logo-leaf {
  flex-shrink: 0;
  animation: sway 4s ease-in-out infinite;
  transform-origin: bottom center;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  color: var(--nav-text);
  font-weight: 400;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.5rem 0.875rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--nav-logo-color);
  background: rgba(255, 255, 255, 0.1);
}

.navbar.scrolled .nav-link:hover {
  color: var(--forest-dark);
  background: var(--forest-pale);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--nav-text);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: color 0.3s ease;
}

/* ─── 모바일 메뉴 ─── */
.nav-mobile {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(12, 34, 24, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-dark);
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 1rem;
}

.navbar.scrolled .nav-mobile {
  background: rgba(249, 246, 240, 0.98);
  border-color: var(--border);
}

.nav-link-mobile {
  display: block;
  padding: 0.875rem 2rem;
  color: var(--text-on-dark);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 0.2s ease, background 0.2s ease;
}

.navbar.scrolled .nav-link-mobile {
  color: var(--text-secondary);
}

.nav-link-mobile:hover {
  color: var(--sage-light);
  background: rgba(255, 255, 255, 0.06);
}

.navbar.scrolled .nav-link-mobile:hover {
  color: var(--forest-dark);
  background: var(--forest-pale);
}

/* ─── 모바일 브레이크포인트 ─── */
@media (max-width: 640px) {
  .nav-desktop {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* ─── 트랜지션 ─── */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
