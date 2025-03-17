import { Component } from 'queflow'

const Highlight = new Component('Highlight', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Syntax Highlighting", size: 36 } />
        <P { txt: "Since QueFlow uses stringed HTML which does not come with highlighting, you can enable syntax highlighting in your code editor using this guide, it contains instructions for popular editors like VSCode, and JetBrains IDEs." } />
        <Heading { txt: "For VSCode users:", size: 28, top: 60 } />
        <Heading { txt: "1. Using the [es6-string-html] Extension", size: 20 } />
        <P { txt: "Installation:" } />
        <ListItem { items: ["Open VSCode.", "Go to the Extensions Marketplace ([Ctrl+Shift+X] on windows or [Cmd+Shift+X] on macOS)", "Search for [es6-string-html] and install it."] } />
         <P { txt: "Usage:" } />
        <ListItem { items: ["Wrap your stringed HTML in a special comment to activate syntax highlighting."] } />
         <P { txt: "Example:" } />
        <CodeView { code: \`
template(){
  return /*html*/ &grave;
    &lt;div class="container"&gt;
      &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;/div&gt;
  &grave;
}
\` } />
        <ALink { text: "You can download or learn more about the extension [here]", url: "https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html" } />
        <Heading { txt: "2. Using the [leet-html] Extension", size: 20 } />
        <P { txt: "[leet-html] is another VSCode Extension for syntax highlighting, works without the [/*html*/] comment, supports IntelliSense and TypeScript." } />
        <ALink { text: "You can download or learn more about leet-html [here]", url: "https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html" } />
        <Heading { txt: "For JetBrains users (WebStorm, IntelliJ, etc.):", size: 28, top: 60 } />
        <P { txt: "JetBrains IDEs have built-in support for syntax highlighting in template literals." } />
        <P { txt: "Usage:" } />
        <ListItem { items: ["Highlight the stringed HTML.", "Press [Alt+Enter] (or [Option+Enter] on macOS).", "Select [Inject language or reference].", "Choose [HTML]."] } />
        <P { txt: "In conclusion, enabling syntax highlighting for stringed HTML in your code editor can significantly improve your development workflow. By following the steps outlined above for your specific editor, you can make your code more readable and easier to debug. Whether you're using VSCode, JetBrains IDEs, or another editor, these tools and extensions will help you work more efficiently with QueFlow." } />
        <ALink { text: "If you have any questions or run into issues, feel free to reach out to [our maintainer]. Happy coding!", url: "https://x.com/jstunde6245" } />
        <Navigator { left: ["Get Started", "/get-started"], right: ['Template Syntax', '/template-syntax'] } />
      </section>
      `
  },

  stylesheet: {}
})

export default Highlight