var currentComponent, timerInt;

const loadComponent = (path) => {
  alert(path)
  if (path === "/docs/nuggets") {
    timerInt = setInterval(() => Nuggets.data.time = new Date().toLocaleTimeString(), 1000)
  } else {
    clearInterval(timerInt)
  }

  switch (path) {
    case '/':
      currentComponent.hide()
      Home.show()
      currentComponent = Home 
      break;
    case '/get-started':
      currentComponent.hide()
      GetStarted.show()
      currentComponent = GetStarted
      break;
    case '/docs/app':
      currentComponent.hide()
      QComp.show()
      currentComponent = QComp
      break;
    case '/docs/component':
      currentComponent.hide()
      Compo.show()
      currentComponent = Compo
      break;
    case '/docs/project-structure':
      currentComponent.hide()
      ProjectStructure.show()
      currentComponent = ProjectStructure
      break;
    case '/docs/nuggets':
      currentComponent.hide()
      Nuggets.show()
      currentComponent = Nuggets
      break;

    default:

  }
}

const toPage = (path) => {
  history.pushState({}, '', path)
  loadComponent(path)
  window.scrollTo(0, 0)
}