var currentComponent;

const loadComponent = (path) => {
  switch (path) {
    case '/docs/index.html':
      currentComponent.hide()
      Home.show()
      currentComponent = Home
      break;
    case '/get-started':
      currentComponent.hide()
      GetStarted.show()
      currentComponent = GetStarted
      break;
    case '/qcomponent':
      currentComponent.hide()
      QComp.show()
      currentComponent = QComp
      break;

    default:

  }
}

const toPage = (path) => {
  history.pushState({}, '', path)
  loadComponent(path)
  window.scrollTo(0,0)
}

const indent = (code) => {
  const len = code.length
  let c = 0

  for (var i = 0; i < len; i++) {
    if (code[i] === ' ') {
      c++
    } else {
      break
    }
  }

  return 5 * c
}