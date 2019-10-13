import NavBar from './F7/NavBar'
import Panel from './F7/Panel'
import ToolBar from './F7/ToolBar'
import Button from './F7/Buttons'

export function useCommonComponents (vue) {
  vue.component('NavBar', NavBar)
  vue.component('Panel', Panel)
  vue.component('ToolBar', ToolBar)
  vue.component('Buttons', Button)
}
