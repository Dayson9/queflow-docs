var currentComponent, timerInt;

const loadComponent = (path) => {
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
    case '/introduction':
      currentComponent.hide()
      Introduction.show()
      currentComponent = Introduction
      break;
    case '/docs/template-syntax':
      currentComponent.hide()
      Syntax.show()
      currentComponent = Syntax
      break;
    case '/docs/app':
      currentComponent.hide()
      App_.show()
      currentComponent = App_
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

    case '/docs/template':
      currentComponent.hide()
      Template_.show()
      currentComponent = Template_
      break;
    default:

  }
}

const toPage = (path) => {
  history.pushState({}, '', path)
  loadComponent(path)
  window.scrollTo(0, 0)
}

function downloadFile(filePath, fileName = 'queflow_starter_template.zip') {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  Main.element.appendChild(link);
  link.click();
  Main.element.removeChild(link);
}