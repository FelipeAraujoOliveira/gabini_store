<template>
    <div class="star-container">
      <svg
        v-for="n in 5"
        :key="n"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23.79 22.78"
        :width="width"
        :height="height"
        class="star"
      >
        <path
          fill="#FF8A00"
          d="M11.9 0l3.5 7.06 7.79 1.13-5.64 5.5 1.33 7.75-6.96-3.66L4 21.44l1.33-7.75-5.64-5.5 7.79-1.13L11.9 0z"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Star_component',
    props: {
      width: {
        type: String,
        default: '23.79px',
      },
      height: {
        type: String,
        default: '22.78px',
      },
    },
  };
  </script>
  
  <style scoped>
  .star-container {
    display: flex;
  }
  
  .star {
    margin-right: 5px;
  }
  </style>
  