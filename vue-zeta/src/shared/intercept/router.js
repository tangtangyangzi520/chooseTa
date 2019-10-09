export default function checkAuth (to, from, resolve, reject) {
  const s = true
  if (s) {
    resolve()
  } else {
    reject()
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
