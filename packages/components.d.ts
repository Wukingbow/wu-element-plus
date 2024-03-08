import WuLayoutPage from './layout-page/src/index.vue'
import WuLayoutPageItem from './layout-page-item/src/index.vue'
import WuButton from './button/src/index.vue'
import WuChart from './chart/src/index.vue'
import WuTabs from './tabs/src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    WuLayoutPage: typeof WuLayoutPage
    WuLayoutPageItem: typeof WuLayoutPageItem
    WuButton: typeof WuButton
    WuChart: typeof WuChart
    WuTabs: typeof WuTabs
  }
}
