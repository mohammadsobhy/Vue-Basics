# Vue vs Native JavaScript Example

This small project demonstrates the difference between using **Vue.js** and **Native JavaScript (Vanilla JS)** to build a simple interactive UI.

The application includes:
- Counter functionality
- Input binding
- DOM updates

The page is divided into two sections:

1. **Vue Framework Implementation**
2. **Native JavaScript Implementation**

Both examples achieve the same functionality but use different approaches.

---

## Project Preview

The interface is split into two columns:

| Vue Framework | Native JavaScript |
|---------------|------------------|
| Uses reactive data | Manual DOM updates |
| Uses `v-model` and `v-on` | Uses `addEventListener` |
| Automatic UI updates | Manual UI updates |

---

## Technologies Used

- **Vue 3 (CDN version)**
- **JavaScript (ES6)**
- **Bootstrap 5**
- **HTML5**

---

## Project Structure

```text
project-folder
│
├── index.html
├── vue-script.js
├── script.js
└── README.md
```

### index.html
Contains the layout and UI for both implementations.

### vue-script.js
Handles the logic using the **Vue framework**.

### script.js
Handles the logic using **Native JavaScript**.

---

## Vue Implementation

Vue simplifies UI development by providing **reactivity and data binding**.

Example:

```javascript
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello",
      count: 0,
      ourInput: ""
    };
  },
  methods: {
    addCount(value) {
      this.count += value;
    },
    reduceCount(value) {
      this.count -= value;
    },
    resetCount() {
      this.count = 0;
    }
  }
}).mount("#app");
```

Key Vue features used:

- `createApp`
- `data()`
- `methods`
- `v-on`
- `v-model`
- template interpolation `{{ }}`

---

## Native JavaScript Implementation

In Vanilla JavaScript we need to manually:

- Select DOM elements
- Add event listeners
- Update the DOM when data changes

Example:

```javascript
let count = 0;

const counterEl = document.getElementById("counter");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});
```

---

## Key Difference

| Feature | Vue | Native JS |
|------|------|------|
| Data Binding | Automatic | Manual |
| UI Updates | Reactive | Manual DOM update |
| Code Complexity | Lower | Higher |
| Framework Needed | Yes | No |

---

## How to Run the Project

1. Download or clone the repository

```bash
git clone https://github.com/yourusername/vue-vs-native-js-demo
```

2. Open the project folder.

3. Run the project by opening:

```text
index.html
```

in your browser.

No build tools or installation required.

---

## Learning Purpose

This project is useful for understanding:

- How frameworks like **Vue simplify frontend development**
- The difference between **reactive frameworks** and **manual DOM manipulation**
- Basic Vue concepts for beginners

---

## Author

Mohamed Sobhy  
