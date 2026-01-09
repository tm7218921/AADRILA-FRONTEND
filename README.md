Aadrila Frontend
Modern marketing website for a document automation platform, built with React (Vite) and deployed on Vercel. It includes fully responsive sections like Hero, Products, About Us, Team, Blogs, and Contact.

✨ Features
Responsive landing page layout with modern cards and gradients.

Products section with 3D-style document visuals and asset-based images.

About Us with Vision & Mission cards.

Meet Our Team carousel-style layout with featured member.

Blogs section with three highlight cards and navigation controls.

Contact Us form with basic client-side handling and address blocks.

🛠️ Tech Stack
React + Vite

JavaScript (ES6+)

CSS modules / section-based CSS files

Deployed on Vercel

📦 Getting Started
Prerequisites
Node.js (LTS recommended)

npm or yarn

Git

Installation
bash
# Clone this repository
git clone https://github.com/YOUR-USERNAME/aadrila-frontend.git

# Go into the project directory
cd aadrila-frontend

# Install dependencies
npm install
# or
yarn install
Run in Development
bash
npm run dev
# or
yarn dev
The app will start on http://localhost:5173 (or the port shown in your terminal).

📁 Project Structure
text
aadrila-frontend/
├─ public/
├─ src/
│  ├─ assets/
│  │  ├─ product1.jpg
│  │  ├─ product2.jpg
│  │  └─ product3.jpg
│  ├─ components/
│  │  ├─ Hero.jsx
│  │  ├─ Products.jsx
│  │  ├─ AboutUs.jsx
│  │  ├─ MeetTeam.jsx
│  │  ├─ Blogs.jsx
│  │  └─ ContactUs.jsx
│  ├─ styles/
│  │  ├─ Products.css
│  │  ├─ AboutUs.css
│  │  ├─ MeetTeam.css
│  │  ├─ Blogs.css
│  │  └─ ContactUs.css
│  ├─ App.jsx
│  └─ main.jsx
├─ .gitignore
├─ index.html
├─ package.json
└─ vite.config.js
Adjust folder names if you used a different structure (for example, CSS files directly in src/).

