const topics = {}

export default {
  subscribe(topic, func) {
    if (!topics[topic]) {
      topics[topic] = []
    } else if ('lastData' in topics[topic]) {
      func(topics[topic].lastData)
    }
    topics[topic].push(func)
  },
  unsubscribe(topic, func) {
    if (topics[topic]) {
      topics[topic].splice(topics[topic].indexOf(func), 1)
    }
  },
  publish(topic, data) {
    if (!topics[topic]) {
      topics[topic] = []
    } else {
      topic[topic].forEach(func => func(data))
    }
    topics[topic].lastData = data
  },
  unpublish(topic) {
    if (topics[topic]) {
      delete topics[topic].lastData
    }
  }
}