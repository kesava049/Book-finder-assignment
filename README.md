# 📚 Book Finder

A **Next.js application** that allows users (like Alex 👩‍🎓) to search for books using the [Open Library Search API](https://openlibrary.org/search.json).  
The project is fully **mobile responsive** and supports both **normal local setup** and **Dockerized setup**.

---

## 🚀 Features
- Search books by title (powered by Open Library API).
- Responsive UI (mobile-first).
- Book cards with cover, title, author(s), and publish year.
- Fast development setup with Next.js.
- Dockerized for easy deployment.

---

## 🛠️ Getting Started (Normal Setup)

### 1. Clone the Repository
```bash
git https://github.com/kesava049/Book-finder-assignment.git
cd book-finder
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:4000] with your browser to see the result.

## 🐳 Running with Docker
This project is Dockerized for easy setup and deployment.

### 1. Clone the Repository
```bash
git https://github.com/kesava049/Book-finder-assignment.git
cd book-finder
```
### 2. Build the Docker Image
```bash
docker build -t book-finder:local .
```
### 3. Run the Container
```bash
docker run -p 4000:4000 book-finder:local
```
App will be running at 👉 http://localhost:4000.

## 🐳 Docker Hub Deployment
This project is also available on Docker Hub, so you don’t need to build locally.

Pull the Image
```bash
docker pull kesav049/book-finder:latest
```
Run the Container
```bash
docker run -p 4000:4000 kesav049/book-finder:latest
```
App will be running at 👉 http://localhost:4000.


### Deployment
Deployed on Vercel
link-> https://book-finder-assignment-five.vercel.app/

### Author
. Kesavula Reddy Kalepalli
. GitHub: @kesava049

---

✨ This README gives users **two options**:
- Run normally with `npm run dev`.  
- Run inside **Docker** (`docker build` + `docker run`).  

Thank You....