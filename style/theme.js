import { onBeforeMount } from "vue";

const themes = [
  {
    name: 'default',
    colors: {
      primary: '#005b3d',
      secondary: ''
    },
  },
  {
    name: 'blue',
    colors: {
      primary: '#385e9d',
      secondary: ''
    },
  },
  {
    name: 'orange',
    colors: {
      primary: '#ed7e30',
      secondary: ''
    },
  },
  {
    name: 'red',
    colors: {
      primary: '#e74432',
      secondary: ''
    },
  },
]
const theme = 'default'
onBeforeMount(() => {
  theme = localStorage.theme ? localStorage.theme : 'default'
})
// if(process.client) {
// }
const currentTheme = themes.find(item => item.name == theme)
console.log(theme);
console.log(currentTheme);
export default currentTheme.colors
