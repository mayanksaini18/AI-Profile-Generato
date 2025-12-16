# AI Profile Generator

```
A client-side web application that transforms raw resume text or PDF files into an interactive, visual professional dashboard using Google's Gemini AI.

## 📊 How It Works

The application takes unstructured text (like a resume), sends it to the Gemini API with a strict schema instruction, and renders the returned structured data into charts and timelines.
## 🧠 How It Works
```

![Architecture Diagram](./Untitled-1.svg)


```bash
    git clone https://github.com/yourusername/AI-Profile-Generator.git
    ```
2.  Open `index.html` directly in your browser.

### Configuration
The application currently uses a hardcoded API key in `index.html` for demonstration purposes.

To use your own key:
1.  Get an API Key from Google AI Studio.
2.  Open `index.html`.
3.  Find the `apiKey` variable inside the `generateProfile()` function and replace it.

## 🛠️ Tech Stack

*   **Core:** HTML5, JavaScript (ES6+)
*   **Styling:** Tailwind CSS (via CDN)
*   **AI Model:** Google Gemini API
*   **Visualization:** Chart.js
*   **Utilities:** PDF.js, FontAwesome

---