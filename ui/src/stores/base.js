import Cocache from 'cocache'
import CocacheSchema from 'cocache-schema'

function State(onChange) {
  const state = {}
  return {
    set(key, value) {
      state[key] = value
      onChange()
    },

    get(key, defaultValue) {
      return (state[key] === undefined) ? defaultValue : state[key]
    }
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
  const cache = Cocache({
    ...options,
    onChange,
    recordValidators: [ CocacheSchema ],
    schema: options.schema
  })
  const state = State(onChange)

  return {
    ...options,
    cache,
    state,
    subscribe,
    unsubscribe,
    emitChanged: onChange,
  }
}
