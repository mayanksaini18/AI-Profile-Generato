# AI Profile Generator

```
A client-side web application that transforms raw resume text or PDF files into an interactive, visual professional dashboard using Google's Gemini AI.

## 📊 How It Works

The application takes unstructured text (like a resume), sends it to the Gemini API with a strict schema instruction, and renders the returned structured data into charts and timelines.
## 🧠 How It Works

```mermaid
graph TD
  User[User] --> UI[Web Interface]

  subgraph "Client Side Processing"
    UI --> Check{Input Type}
    Check -->|PDF| PDF[PDF.js Extraction]
    Check -->|Text| Raw[Raw Text]
    PDF --> Payload[Prepare API Payload]
    Raw --> Payload
  end

  Payload --> API[Google Gemini API]

  subgraph "AI Processing"
    API --> LLM[Gemini 2.5 Flash]
    LLM --> JSON[Structured JSON]
  end

  JSON --> UI

  subgraph "Dashboard Rendering"
    UI --> Summary[Executive Summary]
    UI --> Timeline[Interactive Timeline]
    UI --> Radar[Competency Radar]
    UI --> Donut[Skill Focus Chart]
  end


## ✨ Features

*   **Resume Parsing:** Supports raw text input and PDF file parsing (via PDF.js).
*   **AI Analysis:** Uses Google Gemini (`gemini-2.5-flash`) to infer skills, experience duration, and professional summaries.
*   **Visual Analytics:**
    *   **Competency Matrix:** A radar chart showing the balance of skills.
    *   **Domain Focus:** A doughnut chart visualizing technical distribution.
*   **Interactive Timeline:** Clickable work and education history with detailed highlights.
*   **Zero Backend:** Runs entirely in the browser (HTML/JS).

## 🚀 Getting Started

### Prerequisites
*   A modern web browser (Chrome, Edge, Firefox).
*   An active internet connection (to reach the Gemini API and CDNs).

### Installation
1.  Clone the repository:
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