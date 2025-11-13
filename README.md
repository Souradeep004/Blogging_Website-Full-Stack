# Blogify - A Client-Side React Blog

A blogging website built with React.js. It features a rich text modal, `.docx` file uploads (with image parsing), and saves all posts directly to your browser's `localStorage`.

---

### ✨ Key Features

* **Local Persistence:** All blogs are saved in `localStorage`.
* **Word Doc Upload:** Upload a `.docx` file (including text and images) to automatically create a new post.
* **Dynamic Routing:** Each post gets its own unique page.
* **Modern UI:** A responsive UI with a custom "dark blue, white, and green" theme and the "Lato" font.

---

### 🚀 How to Set Up

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/blogging-web.git](https://github.com/your-username/blogging-web.git)
    cd blogging-web
    ```

2.  **Install all required packages:**
    (This will install React, React Router, and Mammoth.js)
    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm start
    ```
    This will open the app at `http://localhost:3000`.

---

### 📁 File Structure
   ```bash
   blogging-web/ 
   ├── public/ 
   │ └── index.html (Lato font imported here) 
   ├── src/ 
   │ ├── components/ 
   │ │ ├── BlogCard.js 
   │ │ ├── BlogModal.js (Handles .docx upload & parsing) 
   │ │ ├── Categories.js 
   │ │ ├── Navbar.js 
   │ │ └── SearchBar.js 
   │ ├── pages/ 
   │ │ ├── BlogPostPage.js (Renders single post HTML) 
   │ │ ├── HomePage.js (Shows user's blogs) 
   │ │ └── LandingPage.js 
   │ ├── App.css (All component styles) 
   │ ├── App.js (Main app, state logic, routing) 
   │ ├── index.css (Global styles, font) 
   │ └── index.js (React entry point) 
   ├── package.json 
   └── README.md
   ```
