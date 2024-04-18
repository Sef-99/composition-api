import { ref } from 'vue';

const useCounter = (initValue = 5) => {
  const count = ref(initValue);
  const increase = () => {
    count.value++;
  };

  const decrease = () => {
    count.value--;
  };

  return { count, increase, decrease };
};

export default useCounter;
