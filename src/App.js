import { useState } from "react";
import { marked } from "marked";
import './App.css';

// Configure marked globally
marked.setOptions({
  breaks: true, // Enable single line breaks
  gfm: true, // Enable GitHub-flavored Markdown
});

function App() {
  const [text, setText] = useState(`
# H1 Header
## H2 Sub-header
[Visit Example](https://www.example.com)

\`Inline Code\`

\`\`\`
Code Block:
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> This is a blockquote.

![Alt Text for Image](https://via.placeholder.com/150)

**This is bold text**
`);

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(marked.parse(event.target.value)); // Debugging output
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={handleChange}
        value={text}
        placeholder="Enter Markdown here..."
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </div>
  );
}

export default App;
