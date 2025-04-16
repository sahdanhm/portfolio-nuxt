import { ref, onMounted, onUnmounted, nextTick } from 'vue';

export function useStyleInMiddle() {
  const itemRefs = ref([]);
  const activeIndex = ref(null);
  let observers = [];

  function setItemRef(el) {
    if (el) itemRefs.value.push(el);
  }

  onMounted(async () => {
    await nextTick();

    const isMobileOrTablet = window.innerWidth <= 1024; // 1024px ke bawah = tablet/HP
    if (!isMobileOrTablet) return; // jangan jalanin observer kalau bukan mobile/tablet

    itemRefs.value.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const midY = window.innerHeight / 2;
          const top = entry.boundingClientRect.top;
          const bottom = entry.boundingClientRect.bottom;

          if (top <= midY && bottom >= midY) {
            activeIndex.value = index;
          } else if (activeIndex.value === index) {
            activeIndex.value = null;
          }
        },
        {
          threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        }
      );

      if (el) observer.observe(el);
      observers.push(observer);
    });
  });

  onUnmounted(() => {
    observers.forEach((observer, i) => {
      if (itemRefs.value[i]) observer.unobserve(itemRefs.value[i]);
    });
  });

  return {
    setItemRef,
    activeIndex,
  };
}
