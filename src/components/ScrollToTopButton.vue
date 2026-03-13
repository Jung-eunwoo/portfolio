<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Transition name="fade-up">
    <button
      v-if="visible"
      class="scroll-top-btn"
      aria-label="맨 위로 이동"
      @click="scrollToTop"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: var(--forest-dark);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(26, 71, 42, 0.3);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.scroll-top-btn:hover {
  background: var(--forest-medium);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(26, 71, 42, 0.4);
}

.scroll-top-btn:active {
  transform: translateY(0);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 640px) {
  .scroll-top-btn {
    bottom: 1.25rem;
    right: 1.25rem;
  }
}
</style>
