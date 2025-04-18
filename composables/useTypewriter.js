import { ref, onMounted } from 'vue';

export function useTypewriter(
  texts,
  speed = 100,
  delayBetweenTexts = 1000,
  textShowSpeed = 1000
) {
  const currentText = ref('');
  let textIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (textIndex >= texts.length) {
      textIndex = 0; // Ulang dari awal (atau hapus ini kalau mau berhenti)
    }

    const fullText = texts[textIndex];
    if (charIndex < fullText.length) {
      currentText.value += fullText.charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      let charIndex2 = charIndex;
      const decrementText = () => {
        charIndex2--;
        const arrText = currentText.value.split('');
        arrText.splice(charIndex2, 1);
        currentText.value = arrText.join('');
        console.log(currentText.value);
        if (charIndex2 < 0) {
          setTimeout(() => {
            charIndex = 0;
            textIndex++;
            type();
          }, delayBetweenTexts);
        } else {
          setTimeout(decrementText, speed);
        }
      };
      setTimeout(decrementText, textShowSpeed);
    }
  };

  onMounted(() => {
    type();
  });

  return {
    currentText,
  };
}
