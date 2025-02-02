var timerInt;

function downloadFile(filePath, fileName = 'queflow-starter-template.zip') {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  Main.element.appendChild(link);
  link.click();
  Main.element.removeChild(link);
}