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
  isScrolled.value = window.scrollY > 50;
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
    <div class="container navbar-container">
      <a href="#" class="logo">Portfolio</a>

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
        aria-label="메뉴 열기"
      >
        <svg
          v-if="!isMobileMenuOpen"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
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
/* 오른쪽 수직 사이드바 네비게이션 */
.navbar {
  position: fixed;
  top: 30%;
  right: 0%;
  width: 80px;
  margin: 0px 24px;
  /* height: 100vh; */
  z-index: 1000;
  padding: 2rem 0;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.navbar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0;
}

.logo {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--forest-dark);
  letter-spacing: 0.05em;
  writing-mode: vertical-rl;
  transform: rotate(270deg);
}

.nav-desktop {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.nav-link {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.75rem;
  transition: all 0.2s ease;
  position: relative;
  writing-mode: vertical-rl;
  transform: rotate(270deg);
  padding: 0.75rem 0.5rem;
  border-radius: 4px;
}

.nav-link:hover {
  color: var(--forest-dark);
  background: var(--forest-pale);
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
  font-weight: 500;
  text-align: center;
  transition: color 0.2s ease;
}

.nav-link-mobile:hover {
  color: var(--forest-dark);
}

/* 모바일: 하단 가로 바로 전환 */
@media (max-width: 768px) {
  .navbar {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 0.75rem 1rem;
    border-left: none;
    border-top: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }

  .navbar-container {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: auto;
  }

  .logo {
    display: none;
  }

  .nav-desktop {
    flex-direction: row;
    gap: 0;
    width: 100%;
    justify-content: space-around;
  }

  .nav-link {
    writing-mode: horizontal-tb;
    transform: none;
    font-size: 0.7rem;
    padding: 0.5rem;
  }

  .mobile-menu-btn {
    display: none;
  }

  .nav-mobile {
    display: none;
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
