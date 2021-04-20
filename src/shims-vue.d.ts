declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentsOptions: ComponentOptions
  export default componentsOptions
}
declare module '*.md' {
  const str: string
  export default str
}
