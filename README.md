# 📝 Todo App — React + TypeScript + Vite

![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Static%20Typing-3178C6?logo=typescript\&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-0055FF?logo=framer)
![Lucide](https://img.shields.io/badge/Lucide-Icons-000000?logo=lucide)
![DaisyUI](https://img.shields.io/badge/DaisyUI-Components-6D3CE0?logo=daisyui)
![License](https://img.shields.io/badge/License-MIT-green)

Une **application Todo moderne** construite avec **React, TypeScript et Vite**, conçue pour démontrer une **architecture claire**, une **séparation des responsabilités** et une **expérience utilisateur fluide**.

> [!TIP]
> Le projet met l'accent sur la séparation entre **logique métier (custom hook)** et **interface utilisateur (composants réutilisables)**, avec des **animations et interactions soignées**.

---

# 📚 Table des matières

* 🚀 Fonctionnalités
* 🛠️ Stack technique
* 📦 Installation
* 📁 Structure du projet
* 🧩 Architecture
* 🧪 Qualité du code
* 🤝 Contribuer
* 👨‍💻 Auteur
* 📄 Licence

---

# 🚀 Fonctionnalités

| Fonctionnalité                  | Description                                               | Composant                 |
| ------------------------------- | --------------------------------------------------------- | ------------------------- |
| ➕ Ajouter une tâche             | Création d'une tâche avec priorité                        | `TodoInput.tsx`           |
| 🧩 Filtrer par priorité         | Filtre les tâches : **Toutes / Faible / Moyenne / Haute** | `TodoControls.tsx`        |
| ✅ Tout terminer / tout rétablir | Bascule l'état des tâches visibles                        | `TodoControls.tsx`        |
| ❌ Supprimer les tâches filtrées | Vide la liste affichée avec confirmation                  | `TodoControls.tsx`        |
| 🔁 Marquer comme complétée      | Change l'état d'une tâche                                 | `TodoItem.tsx`            |
| 🗑️ Supprimer une tâche         | Supprime une tâche individuellement                       | `TodoItem.tsx`            |
| ✨ Animations UI                 | Animations d'entrée/sortie et transitions                 | `App.tsx`, `TodoItem.tsx` |

---

# 🛠️ Stack technique

| Technologie                | Rôle                                    |
| -------------------------- | --------------------------------------- |
| **React 19**               | Construction de l'interface utilisateur |
| **TypeScript**             | Typage statique et sécurité             |
| **Vite**                   | Environnement de développement rapide   |
| **Tailwind CSS + DaisyUI** | Styling utilitaire et composants UI     |
| **Framer Motion**          | Animations fluides                      |
| **Lucide React**           | Icônes vectorielles modernes            |
| **ESLint**                 | Qualité et cohérence du code            |

---

# 📦 Installation

## 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/votre-username/todo-app.git
cd todo-app
```

## 2️⃣ Installer les dépendances

```bash
npm install
```

## 3️⃣ Lancer le serveur de développement

```bash
npm run dev
```

## 4️⃣ Ouvrir l'application

```
http://localhost:5173
```

---

# 📁 Structure du projet

```
.
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── TodoControls.tsx
│   │   ├── TodoInput.tsx
│   │   └── TodoItem.tsx
│   ├── constants.ts
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   └── useTodos.ts
├── tsconfig.json
└── vite.config.ts
```

---

# 🧩 Architecture

L'application suit une architecture simple et claire basée sur un **custom hook centralisant la logique métier**.

### 🔹 `useTodos.ts`

Contient toute la logique de gestion des tâches :

* ajout de tâches
* suppression
* toggle completed
* filtrage par priorité
* actions globales
* persistence via **localStorage**

### 🔹 `components/`

Composants UI indépendants :

* **`TodoInput.tsx`** : formulaire d'ajout
* **`TodoControls.tsx`** : filtres et actions globales
* **`TodoItem.tsx`** : affichage d'une tâche

### 🔹 `App.tsx`

* compose les composants
* connecte l'UI avec `useTodos`
* gère les animations de liste avec **Framer Motion**

---

# 🧪 Qualité du code

Le projet intègre plusieurs outils pour garantir un code fiable et maintenable.

| Outil                        | Rôle                              |
| ---------------------------- | --------------------------------- |
| **TypeScript (Strict Mode)** | Prévention des erreurs runtime    |
| **ESLint**                   | Détection des mauvaises pratiques |
| **Architecture modulaire**   | Facilite la maintenance           |

---

# 🤝 Contribuer

Les contributions sont les bienvenues.

### Étapes

```bash
# créer une branche
git checkout -b feature/my-feature

# commit
git commit -m "feat: add new feature"

# push
git push origin feature/my-feature
```

Puis ouvrir une **Pull Request**.

---

# 👨‍💻 Auteur

Projet réalisé pour démontrer :

* une **architecture React moderne**
* l'utilisation de **custom hooks**
* un **code TypeScript maintenable**
* une bonne **expérience développeur (DX)**

---

# 📄 Licence

MIT © 2026
