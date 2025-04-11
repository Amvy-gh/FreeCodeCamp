# 🐉 Dragon Repeller - JavaScript RPG Game

A browser-based mini RPG where you defeat monsters and earn XP, gold, and better weapons. Built entirely with **HTML, CSS, and JavaScript**—perfect for beginners learning DOM manipulation, game logic, and UI updates.

---

## 🧠 Game Summary

- You start with a stick and basic stats.
- Explore locations: **Town Square**, **Store**, and **Cave**.
- Fight monsters like **Slimes**, **Fanged Beasts**, and ultimately the **Dragon**.
- Buy weapons and health at the store using gold.
- Secret **Easter Egg mini-game** included!

---

## ✅ Core JavaScript Function Descriptions

### 1. `update(location)`
Updates the UI and button functions based on the current location.
```javascript
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}
```

---

### 2. `buyHealth()` and `buyWeapon()`
Logic to spend gold for more health or upgrade weapons.
```javascript
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
  }
}
```

```javascript
function buyWeapon() {
  if (gold >= 30 && currentWeapon < weapons.length - 1) {
    gold -= 30;
    currentWeapon++;
    inventory.push(weapons[currentWeapon].name);
  }
}
```

---

### 3. `attack()`
Handles combat logic including monster attack, player hit chance, and weapon damage.
```javascript
function attack() {
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  }
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) winGame();
    else defeatMonster();
  }
}
```

---

### 4. `goFight()`, `defeatMonster()`, `winGame()`, `lose()`
Transitions between game states.
```javascript
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
}
```

---

### 5. `easterEgg()`, `pick(guess)`
Secret number game where guessing right gives gold, wrong reduces health.
```javascript
function pick(guess) {
  const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
  if (numbers.includes(guess)) {
    gold += 20;
  } else {
    health -= 10;
  }
}
```

---

## 🎨 UI Overview

- **HTML** provides structure with `div`s for stats, controls, and story text.
- **CSS** gives the game its dark RPG vibe.
- **Buttons** dynamically change text and behavior using JavaScript.

---

## 📦 Inventory & Weapons

```javascript
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
```

- You start with a stick.
- Can sell weapons and upgrade them in the store.

---

## 🧪 Example Flow

1. Click “Go to store” → Buy health or weapon.
2. Click “Go to cave” → Fight a slime or beast.
3. Click “Fight dragon” → Final boss battle.
4. Win or lose depending on your choices.

---

## 💡 Ideas for Expansion

- Add potions, armor, or spells.
- Add multiple save slots (localStorage).
- Add sounds or animations.
- Add enemy types with AI behaviors.

---

## 🚀 Getting Started

Just open the `index.html` file in your browser. No setup needed!

```bash
📁 project-folder/
├── index.html
├── styles.css
└── script.js
```

---

## 🛠️ Built With

- HTML, CSS, Vanilla JavaScript
- DOM Manipulation, Game Logic
- Beginner-friendly RPG structure

---