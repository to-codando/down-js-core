import { observerFactory } from '../../../lib/observer.factory.js'
import { pubsubFactory } from '../../../lib/pubsub.factory.js'

import template from './template.js'
import styles from './styles.js'

export const button = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({}))

  _.events(() => ({
    onClick
  }))

  _.methods(() => ({}))
}

/** HOOKS */

/**LISTENERS */
const onClick = ({ on, props }) => {
  on('click', 'button', () => {
    const {
      dispatch: { emitter, eventName, payload }
    } = props.get()

    emitter.emit(eventName, payload)
  })
}
/**METHODS */
