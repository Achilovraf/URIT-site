<template>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" 
  :width="size" 
  :height="size" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ec455a" d="M48 23a12.943 12.943 0 0 0-9 3.633A12.99 12.99 0 0 0 17 36c0 12 18.76 23.367 22 23.367S61 48 61 36a13 13 0 0 0-13-13z" opacity="1" data-original="#ec455a" class=""></path><rect width="22" height="35" x="7" y="8" fill="#e9e9ea" rx="2" opacity="1" data-original="#e9e9ea"></rect><path fill="#2488ff" d="M11 12h14v25H11z" opacity="1" data-original="#2488ff" class=""></path><circle cx="18" cy="21" r="3" fill="#ff9811" opacity="1" data-original="#ff9811"></circle><path fill="#ffcbbe" d="m15 61-1.855-15.2a2 2 0 0 1 .3-1.467l.712-1.068A5 5 0 0 0 15 40.486v-.415a5 5 0 0 0-1.464-3.535L13 36l2.272-3.787A1.811 1.811 0 0 0 15 30a1.811 1.811 0 0 0-2.213-.272L9.67 31.6a1 1 0 0 1-1.222-.15l-1.155-1.157A1 1 0 0 1 7 29.586V18l-3.857 9.642a2.016 2.016 0 0 0-.143.743v10.282a4 4 0 0 0 .8 2.4l.66.879a6.005 6.005 0 0 1 1.118 4.586L4 61z" opacity="1" data-original="#ffcbbe" class=""></path><g fill="#ff9811"><path d="M43.586 16.586a2 2 0 1 0 2.828 0 2 2 0 0 0-2.828 0zM49.243 13.757a6.007 6.007 0 0 0-8.486 0l1.414 1.414a4.007 4.007 0 0 1 5.658 0z" fill="#ff9811" opacity="1" data-original="#ff9811"></path><path d="M52.071 10.929a10 10 0 0 0-14.142 0l1.414 1.414a8 8 0 0 1 11.314 0z" fill="#ff9811" opacity="1" data-original="#ff9811"></path><path d="M53.485 9.515 54.9 8.1a14.014 14.014 0 0 0-19.8 0l1.414 1.414a12.013 12.013 0 0 1 16.971.001z" fill="#ff9811" opacity="1" data-original="#ff9811"></path></g><path fill="#85d5e3" d="M40 55a1 1 0 0 1-.949-.684l-4.184-12.554-2.953 6.644A1 1 0 0 1 31 49H17v-2h13.35l3.736-8.406a1.026 1.026 0 0 1 .962-.594 1 1 0 0 1 .9.683l3.914 11.742 4.168-16.668a1 1 0 0 1 1.96.1L47.867 47H61v2H47a1 1 0 0 1-.99-.858L44.732 39.2 40.97 54.243a1 1 0 0 1-.931.756z" opacity="1" data-original="#85d5e3"></path></g></svg>
</template>

<script setup>
defineProps({
  size: {
    type: [Number, String],
    default: 24, // по умолчанию 24px
  },
//   color: {
//     type: String,
//     default: 'currentColor', // наследует цвет текста, удобно
//   },
})
</script>