# Task Flow

Task Flow is a simple task-management app that helps you organize your day in one place. Add your tasks, choose a priority, set a due date, and mark them as complete when you finish.

## What You Can Do

- Create a personal Task Flow account
- Sign in with email or Google
- Reset a forgotten password
- Add tasks with descriptions and due dates
- Choose Low, Medium, or High priority
- Mark tasks as completed or pending
- Edit or delete tasks
- View the total, pending, and completed task counts
- Use Task Flow on a phone, tablet, or computer

## How to Use Task Flow

### 1. Create an Account

Open the app and select **Sign Up**. Enter your full name, email address, and a password with at least six characters. You can also sign in with Google.

### 2. Open Your Dashboard

After signing in, Task Flow displays your personal dashboard. It shows your overall progress and separates tasks into total, pending, and completed groups.

### 3. Add a Task

Select **Add Todo**, then enter:

- A task title
- A description
- A due date
- A priority level

Select **Create Todo** to save it.

### 4. Manage Your Tasks

In the task table, you can:

- Select a task status icon to mark it completed or pending
- Select the edit icon to update task details
- Select the delete icon to remove it
- Review due dates and priority labels at a glance

### 5. Sign Out

Open the navigation sidebar and select **Logout** when you are finished.

## Privacy

Each account has its own task list. Tasks are connected to the signed-in user's Firebase account and should only be accessible through authenticated access and Firestore security rules.

## Tech Stack

- React 19
- Vite 8
- React Router
- Firebase Authentication
- Cloud Firestore
- Ant Design
- Bootstrap 5
- Sass

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A Firebase project
- Firebase CLI for hosting deployment

### Installation

```bash
git clone <your-repository-url>
cd Task-Flow
npm install
```

### Firebase Setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Add a Web app to the project.
3. Enable **Email/Password** and **Google** sign-in methods under **Authentication > Sign-in method**.
4. Create a Cloud Firestore database.
5. Open `src/config/firebase.jsx` and replace the Firebase configuration with your project's web app configuration:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
```

> Firebase web API keys identify a Firebase project; access must still be controlled through Authentication, authorized domains, and Firestore security rules.

### Firestore Rules

Use security rules that restrict each user to their own todos:

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{todoId} {
      allow create: if request.auth != null
        && request.resource.data.userId == request.auth.uid;

      allow read, update, delete: if request.auth != null
        && resource.data.userId == request.auth.uid;
    }
  }
}
```

Publish these rules in **Firestore > Rules** before sharing or deploying the app.

### Run Locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Firestore Data Model

Todos are stored in the `todos` collection.

 ```js
{
  title: "Finish project report",
  description: "Review the draft and send it to the team",
  dueDate: "2026-11-21",
  priority: "High",
  completed: false,
  userId: "Firebase user UID",
  createdAt: "Firestore server timestamp",
  updatedAt: "Firestore server timestamp"
}
```

The `userId` field associates each todo with the authenticated user and is used for live, user-specific queries.

## Project Structure

```text
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   └── Misc/
├── config/
│   ├── firebase.jsx
│   └── global.jsx
├── context/
│   ├── Auth.jsx
│   └── appProvider.jsx
├── pages/
│   ├── Auth/
│   ├── Dashboard/
│   └── Frontend/
├── scss/
├── App.jsx
└── main.jsx
```

## Firebase Hosting

The repository includes Firebase Hosting configuration in `firebase.json` and `.firebaserc`.

```bash
npm run build
npm install -g firebase-tools
firebase login
firebase deploy
```

The Firebase Hosting configuration serves the Vite output from `dist` and rewrites application routes to `index.html`.

## Production Notes

- Configure the Firebase project settings for the intended environment.
- Enable Google sign-in and add production domains to Firebase Authorized Domains.
- Protect Firestore with the rules shown above.
- Rebuild and redeploy after changing Firebase configuration or application code.

## Contributing

Contributions are welcome. Please keep changes focused and run the checks below before submitting a pull request:

```bash
npm run lint
npm run build
```
**Build by Hasnain Ijaz**
