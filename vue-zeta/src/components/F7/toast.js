import vueVm from '../../main'
const text = 'Zetar'

export const toast = (params = {}) => {
  if (vueVm) {
    const toast = vueVm.$f7.toast
    toast.create({
      text: params.text || text,
      position: 'center',
      closeTimeout: 2000
    }).open()
    return toast
  }
}
