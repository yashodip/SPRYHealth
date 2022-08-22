export function flatten(ary) {
  var ret = []
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(flatten(ary[i]))
    } else {
      ret.push(ary[i])
    }
  }
  return ret
}

export async function fetchAll(urls) {
  console.log("URLS", urls)
  const val = []
  return Promise.allSettled(urls.map((u) => fetch(u).then((res) => res.json())))
    .then((res) => {
      console.log("fetch All resp", res)
      return res.map((r) => {
        if (r.status == "fulfilled") {
          return r.value
        }
        //return r.json()
      })
    })
    .catch((err) => console.log(err))
}
