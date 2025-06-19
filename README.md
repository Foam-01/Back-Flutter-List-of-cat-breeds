# Flutter-List-of-cat-breeds & Backend API

Cross-platform Flutter app displaying a list of cat breeds connected with a Node.js backend API.

---

**Author:** Foam-01

---

## 1. Project Structure

### Flutter App
- `android/`, `ios/`, `linux/`, `macos/`, `windows/`, `web/` — platform folders  
- `lib/` — Flutter source code  
- `test/` — tests  
- `pubspec.yaml` — dependencies and config

### Backend API
- `index.js` — main server file  
- `.env` — environment variables  
- `node_modules/` — dependencies  
- `package.json` / `package-lock.json` — Node.js configs

---

## 2. Technologies Used

- Flutter & Dart (frontend)  
- Node.js + Express.js (backend)  
- (Optional) MongoDB or other database  

---

## 3. Features

- Flutter app: Cross-platform support, responsive UI, fetch and display cat breeds with images  
- Backend API: REST endpoints to serve cat breed data, support CRUD (if implemented)  

---

## 4. How to Run Locally

### Flutter App
```bash
git clone https://github.com/Foam-01/Flutter-List-of-cat-breeds.git
cd Flutter-List-of-cat-breeds
flutter pub get
flutter run -d <platform>  # android, ios, chrome, windows, etc.
```

Backend API
```bash
git clone https://github.com/Foam-01/Back-Flutter-List-of-cat-breeds.git
cd Back-Flutter-List-of-cat-breeds
npm install
# Create .env file with necessary configs (e.g. PORT)
npm start
```
