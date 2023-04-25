const getComponentContext = (instance) => {
  return instance._.type
}
const getComponentName = (instance) => {
  return getComponentContext(instance).__name
}

const getCurrentTime = () => new Date().getTime()
const setComponentTime = (instance, key) => {
  const componentName = getComponentName(instance)
  const obj = componentMap[componentName]
  const time = getCurrentTime()

  if (obj) {
    obj[key] = time
  } else {
    componentMap[componentName] = { [key]: time, component: componentName }
  }
}
const setComponentStartTime = (instance) => {
  setComponentTime(instance, 'startTime')
}
const setComponentEndTime = (instance) => {
  setComponentTime(instance, 'endTime')
}

const getComponentInfo = (instance) => {
  return componentMap[getComponentName(instance)]
}

const consoleComponentMountTime = (instance) => {
  const { startTime, endTime, component } = getComponentInfo(instance)
  component && console.log(`${component}: ${(endTime - startTime) / 1000}s`);
}

const componentMap = {}

export const useMixin = (app) => {
  app.mixin({
    beforeCreate () {
      setComponentStartTime(this)
    },
    mounted () {
      setComponentEndTime(this)
      consoleComponentMountTime(this)
    }
  })
}

