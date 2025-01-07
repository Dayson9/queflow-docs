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

    default:

  }
}

const toPage = (path) => {
  history.pushState({}, '', path)
  loadComponent(path)
}