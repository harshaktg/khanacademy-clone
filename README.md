# 📚 Khan Academy Clone — Hackathon Submission

A modern, responsive recreation of the **Khan Academy landing page**, built using **Vue 3**, **TypeScript**, and **Tailwind CSS**. This project faithfully replicates the original design while introducing engaging gamification features to enhance user interaction and learning motivation.

---

## 🚀 Features

### ✅ Cloned from Khan Academy
- Pixel-perfect replica of the **Khan Academy desktop landing page**
- Recreated sections: Hero, Subject Categories, Testimonials, Footer

---

### ✨ Enhancements
- **Dark Mode**  
  Smart system-detected dark mode with manual override and persistent preference using localStorage

- **Learning Streak & XP Tracker**  
  - Track daily visits and course interactions to build a learning streak
  - Earn XP through interactions like page visits, scrolling, and clicking courses
  - Visual XP progress bar to monitor achievement
  - Persistent streak and XP storage using localStorage
  - **Social Sharing:** Share your learning streak and XP progress via major platforms (Twitter, LinkedIn, Facebook, WhatsApp)

- **Polished UX Improvements**  
  - Smooth scroll behavior
  - Subtle hover animations and responsive layouts
  - Focused accessibility improvements

---

## 🧠 Tech Stack

| Tech | Description |
|------|-------------|
| [Vue 3](https://vuejs.org/) | Composition API with `<script setup>` |
| [TypeScript](https://www.typescriptlang.org/) | Strong typing throughout the app |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling for rapid, responsive design |
| [Vite](https://vitejs.dev/) | Lightning-fast bundler and development server |

---

## 🚧 Challenges Faced

- ⚙️ **SVG Dynamic Interaction:**  
  Khan Academy's original site includes dynamic, interactive SVG elements which could not be fully replicated, as monitoring and controlling embedded SVG animations dynamically without asset-level access proved highly complex.  
  As a result, static SVG visuals were maintained while focusing on adding custom interactive features like XP and streaks to enhance the user experience.

---

## 📦 Getting Started

### Clone the repo
```bash
git clone https://github.com/your-username/khan-academy-clone.git
cd khan-academy-clone
```

## Install dependencies

```bash
pnpm install
```

## Run in development

```bash
pnpm dev
```

## Build for production

```bash
pnpm build
```

---

## 📱 UX Highlights

- **Fully responsive mobile-first design**
- **Smooth dark mode toggle with system preference detection**
- **Learning streaks and XP gamification for engagement**
- **XP Sharing functionality to social platforms**
- **Clean, animated interactions and feedback on actions**

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/2b7ddfc5-86be-484f-bb4a-ad1e6244e305)
Dark mode with Streak XP feature

![image](https://github.com/user-attachments/assets/f6e695f9-8e7a-46d0-b595-a9518962b850)
Confetti on XP progress

![image](https://github.com/user-attachments/assets/c29aa223-5b3c-426a-9f2c-90b4f1bd4719)
Mobile responsiveness in light mode

---

## 🎥 Screen Recordings

[Desktop](https://drive.google.com/file/d/105qCJvOu5X01Ihc7fq-AC8tdyZiGztYF/view?usp=drive_link)
[Mobile](https://drive.google.com/file/d/1qLyXnNSkXlSMjcx88eb7RdCVMrKa0r08/view?usp=sharing)

---

## 🏁 Final Notes

This clone is built as a Pixel Plus Hackathon submission to demonstrate frontend precision, creative UX enhancements, and gamified interactivity — while remaining faithful to the core spirit of the Khan Academy platform.

---

## 📝 License

MIT

---

## 🔗 Links

[**Live Demo**](https://khanacademy-clone-theta.vercel.app/)

Built with ❤️ for learning, building, and sharing.
