var currentComponent;

const loadComponent = (path) => {
  switch (path) {
    case '/docs/index.html':
      currentComponent.data.display = 'none'
      Home.data.display = 'block'
      currentComponent = Home
      break;
    case '/get-started':
      currentComponent.data.display = 'none'
      GetStarted.data.display = 'block'
      currentComponent = GetStarted
      break;
    case '/qcomponent':
      currentComponent.data.display = 'none'
      QComponent.data.display = 'block'
      currentComponent = QComponent
      break;

    default:

  }
}

const toPage = (path) => {
  history.pushState({}, '', path)
  loadComponent(path)
}

const indent = (code) => {
  const len = code.length;
  let c = 0;

  for (var i = 0; i < len; i++) {
    if (code[i] === ' ') {
      c++
    } else {
      break
    }
  }

  return 5 * c
}