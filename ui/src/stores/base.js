function Cache(onChange) {
  let _records_ = []

  this.set = function(records) {
    _records_ = records
    onChange()
  }

  this.get = function() {
    return _records_
  }
}

export default function Store(options) {
  const subscriptions = []

  const onChange = () => subscriptions.forEach(fn => fn())
  const subscribe = fn => subscriptions.push(fn)
  const unsubscribe = fn => {
    const i = subscriptions.findIndex(sub => sub === fn)
    subscriptions.splice(i, 1)
  }
  const cache = new Cache(onChange)

  return {
    ...options,
    cache,
    subscribe,
    unsubscribe,
    emitChanged: onChange,
  }
}
