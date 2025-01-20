var currentComponent, timerInt;

const BASE_PATH = location.pathname.startsWith("/docs") ? "/docs" : "/";

const loadComponent = (path) => {
  // if (path === "/docs/nuggets") {
  //   timerInt = setInterval(
  //     () => (Nuggets.data.time = new Date().toLocaleTimeString()),
  //     1000
  //   );
  // } else {
  //   clearInterval(timerInt);
  // }

  if (path.startsWith(BASE_PATH)) {
    path = path.replace(BASE_PATH, "") || "/";
  }

  if (path === "/docs/nuggets") {
    timerInt = setInterval(
      () => (Nuggets.data.time = new Date().toLocaleTimeString()),
      1000
    );
  } else {
    clearInterval(timerInt);
  }

  switch (path) {
    case "/":
      currentComponent.hide();
      Home.show();
      currentComponent = Home;
      break;
    case "/get-started":
      currentComponent.hide();
      GetStarted.show();
      currentComponent = GetStarted;
      break;
    case "/docs/app":
      currentComponent.hide();
      App_.show();
      currentComponent = App_;
      break;
    case "/docs/component":
      currentComponent.hide();
      Compo.show();
      currentComponent = Compo;
      break;
    case "/docs/project-structure":
      currentComponent.hide();
      ProjectStructure.show();
      currentComponent = ProjectStructure;
      break;
    case "/docs/nuggets":
      currentComponent.hide();
      Nuggets.show();
      currentComponent = Nuggets;
      break;

    case "/docs/template":
      currentComponent.hide();
      Template_.show();
      currentComponent = Template_;
      break;
    default:
      console.error(`We no see route: ${path}`);
  }
};

// const toPage = (path) => {
//   history.pushState({}, "", path);
//   loadComponent(path);
//   window.scrollTo(0, 0);
// };

// Handle Initial page load
document.addEventListener("DOMContentLoaded", () => {
  loadComponent(window.location.pathname);
});

// Handle navigation when user uses back/forward buttons
window.addEventListener("popstate", () => {
  const currentPath = window.location.pathname;
  loadComponent(currentPath);
});

// Navigate to page
const toPage = (path) => {
  history.pushState({}, "", `${BASE_PATH}${path}`);
  loadComponent(`${BASE_PATH}${path}`);
  window.scrollTo(0, 0); // Scroll back up
};

function downloadFile(filePath, fileName = "queflow_starter_template.zip") {
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  Main.element.appendChild(link);
  link.click();
  Main.element.removeChild(link);
}
