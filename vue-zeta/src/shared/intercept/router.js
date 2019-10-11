export function beforeEnter (to, from, resolve, reject) {
  const s = true
  if (s) {
    resolve()
  } else {
    reject()
    // this.navigate('/login')
  }
}

// beforeEnter: (routeTo, routeFrom, resolve, reject) => {
//     const s = true
//     if (s) {
//       resolve()
//     } else {
//       reject()
//     }
//     console.log(routeTo, '-------', routeFrom, '-------', resolve, '-------', reject)
//   },
//   beforeLeave: (routeTo, routeFrom, resolve, reject) => {
//     console.log(routeTo, '-------', routeFrom, '-------', resolve, '-------', reject)
//   }
