# PandaPost - Sustainable Food Delivery via Public Transport 🚄🍱

<center>
    <img src="./public/logo-icon.png" width="720">
</center>

### 42Asia Hackathon 2024 - Sponsored by FoodPanda

## Project Overview
**PandaPost** is a sustainable food delivery solution designed to reduce carbon emissions by utilizing MRT public transport for food delivery. Instead of delivering individual orders, we introduce a batch delivery model where multiple food orders are collected and delivered together using public transport routes, minimizing the carbon footprint of traditional delivery methods.

This project was built using **Next.js** for the frontend and **Google Firebase RealTime Database** for the backend, providing a seamless and real-time solution to track and coordinate food orders and deliveries efficiently.

## Demo
[Web Demo](https://panda-post.up.railway.app/)

## Key Features
- **Batch Delivery Optimization:** Orders are grouped by delivery zones and sent together, reducing unnecessary trips.
- **MRT-Based Delivery Routing:** Utilizes public MRT routes for delivering food in batches, leveraging existing infrastructure.
- **Real-Time Tracking:** Google Firebase ensures live updates on food orders, batch status, and delivery progress.
- **Carbon Emission Reduction:** Less reliance on motorbikes or cars for individual deliveries, reducing greenhouse gas emissions.

## Tech Stack
- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** [Google Firebase Realtime Database](https://firebase.google.com/products/realtime-database)
- **Hosting:** [Railway](https://railway.app/)
- **DevOps** Github Actions

## Installation

### Prerequisites
- Node.js (version 20+)
- Firebase account

## Steps

1. **Set up Firebase**
- Create a Firebase project on the [Firebase Console](https://firebase.google.com).
- Enable Realtime Database and set the rules to public (for testing) or configure security rules as per the production environment.

2. **Clone the repository**

```bash
git clone https://github.com/2024-Hackathon-by-42-in-Asia/42-Bangkok-Repository pandapost
cd pandapost
```

3. **Install dependencies**

```bash
npm install
```

4. **Configure environment variables**
Create a .env.sample file in the root directory and populate it using the following sample:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. **Run the app**

```bash
npm run dev
```

*Usage*
Users can place food orders through the web application.
The system groups orders by proximity and delivery time, sending them via MRT in batches.
Track deliveries in real-time via Firebase and view estimated delivery times.

## Team Members
- [tsomsa](https://profile.intra.42.fr/users/tsomsa) - Cadet
- [tliangso](https://profile.intra.42.fr/users/tliangso) - Cadet
- [tratanat](https://profile.intra.42.fr/users/tratanat) - Cadet
- [abossel](https://profile.intra.42.fr/users/abossel) - Cadet
- [nwattana](https://profile.intra.42.fr/users/nwattana) - Cadet
- Other Members - 42Bangok Home Team

## Acknowledgment
- FoodPanda for sponsoring the 42Asia Hackathon 2024
- 42Asia for organizing the hackathon
- Parthiban Rajindran for advising us during the event
- 42Bangkok Home Team for their continuous support.
- Chaiyan Jettanasen for fully support 42bangkok team
