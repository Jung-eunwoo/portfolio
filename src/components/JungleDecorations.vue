<script setup lang="ts">
interface DecorationProps {
  type?: 'monstera' | 'fern' | 'vine' | 'palm';
  size?: 'sm' | 'md' | 'lg';
  position?: 'absolute' | 'relative';
  opacity?: number;
  animated?: boolean;
}

const props = withDefaults(defineProps<DecorationProps>(), {
  type: 'monstera',
  size: 'md',
  position: 'relative',
  opacity: 0.6,
  animated: true,
});

const getSizeClass = () => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
  };
  return sizeMap[props.size];
};

const getAnimationClass = () => {
  return props.animated ? 'jungle-float' : '';
};
</script>

<template>
  <div
    :class="[getSizeClass(), getAnimationClass()]"
    :style="{ opacity: props.opacity, position: props.position }"
    class="jungle-decoration"
  >
    <!-- Monstera Leaf -->
    <svg
      v-if="props.type === 'monstera'"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M100 20 C140 30, 170 60, 170 100 C170 130, 150 155, 120 165 L100 180 L80 165 C50 155, 30 130, 30 100 C30 60, 60 30, 100 20"
        stroke="#2d5a3f"
        stroke-width="1.5"
        fill="none"
      />
      <ellipse cx="85" cy="80" rx="15" ry="20" fill="#2d5a3f" opacity="0.3" />
      <ellipse cx="115" cy="85" rx="12" ry="18" fill="#2d5a3f" opacity="0.3" />
      <ellipse cx="100" cy="120" rx="20" ry="15" fill="#2d5a3f" opacity="0.2" />
      <path
        d="M70 70 Q65 75, 68 82 M130 90 Q135 88, 138 95"
        stroke="#4a8c5f"
        stroke-width="1"
        stroke-linecap="round"
        opacity="0.5"
      />
    </svg>

    <!-- Fern Frond -->
    <svg
      v-else-if="props.type === 'fern'"
      viewBox="0 0 100 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M50 10 Q45 40, 35 70 Q30 85, 25 100 M50 10 Q55 40, 65 70 Q70 85, 75 100"
        stroke="#2d5a3f"
        stroke-width="1.2"
        stroke-linecap="round"
      />
      <path
        d="M50 30 Q42 45, 38 60 M50 30 Q58 45, 62 60"
        stroke="#4a8c5f"
        stroke-width="0.8"
        opacity="0.6"
      />
      <path
        d="M50 55 Q40 70, 32 85 M50 55 Q60 70, 68 85"
        stroke="#4a8c5f"
        stroke-width="0.8"
        opacity="0.6"
      />
      <path
        d="M50 80 Q38 100, 28 120 M50 80 Q62 100, 72 120"
        stroke="#4a8c5f"
        stroke-width="0.8"
        opacity="0.6"
      />
      <circle cx="50" cy="10" r="2" fill="#6abf7b" />
    </svg>

    <!-- Vine/Leaf Border -->
    <svg
      v-else-if="props.type === 'vine'"
      viewBox="0 0 300 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M10 25 Q50 15, 90 25 T170 25 T250 25 T300 25"
        stroke="#4a8c5f"
        stroke-width="1.5"
        opacity="0.5"
      />
      <ellipse cx="40" cy="15" rx="8" ry="10" fill="#2d5a3f" opacity="0.3" />
      <ellipse cx="90" cy="10" rx="7" ry="9" fill="#2d5a3f" opacity="0.3" />
      <ellipse cx="140" cy="15" rx="8" ry="10" fill="#2d5a3f" opacity="0.3" />
      <ellipse cx="190" cy="12" rx="7" ry="9" fill="#2d5a3f" opacity="0.3" />
      <ellipse cx="240" cy="16" rx="8" ry="10" fill="#2d5a3f" opacity="0.3" />
      <circle cx="30" cy="28" r="2" fill="#6abf7b" opacity="0.4" />
      <circle cx="80" cy="32" r="2" fill="#6abf7b" opacity="0.4" />
      <circle cx="130" cy="28" r="2" fill="#6abf7b" opacity="0.4" />
      <circle cx="180" cy="31" r="2" fill="#6abf7b" opacity="0.4" />
      <circle cx="230" cy="29" r="2" fill="#6abf7b" opacity="0.4" />
    </svg>

    <!-- Palm Frond -->
    <svg
      v-else-if="props.type === 'palm'"
      viewBox="0 0 180 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M90 190 L85 140 L70 90 M90 190 L95 140 L110 90 M90 190 L90 140 L90 80"
        stroke="#2d5a3f"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <ellipse cx="60" cy="85" rx="12" ry="25" fill="#4a8c5f" opacity="0.4" />
      <ellipse cx="90" cy="70" rx="14" ry="28" fill="#4a8c5f" opacity="0.4" />
      <ellipse cx="120" cy="85" rx="12" ry="25" fill="#4a8c5f" opacity="0.4" />
      <ellipse cx="50" cy="110" rx="10" ry="20" fill="#4a8c5f" opacity="0.3" />
      <ellipse cx="130" cy="110" rx="10" ry="20" fill="#4a8c5f" opacity="0.3" />
    </svg>
  </div>
</template>

<style scoped>
.jungle-decoration {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
