
# 📘 Student Grading Program Summary with Logic

This program helps a teacher evaluate student performance based on test scores. It includes functions for calculating class average, determining letter grades, checking if a student passes, and generating a result message.

---

## ✅ Function Descriptions

### 1. `getAverage(scores)`
Calculates the average of an array of numeric scores.

```javascript
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}
```

---

### 2. `getGrade(score)`
Converts a numeric score to a letter grade.

```javascript
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
```

---

### 3. `hasPassingGrade(score)`
Checks if the student's grade is passing (not "F").

```javascript
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
```

---

### 4. `studentMsg(totalScores, studentScore)`
Generates a message to the student showing their grade and whether they passed or failed.

```javascript
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  
  if (passed) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
```

---

## 🧪 Example Call

```javascript
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Output:
// Class average: 71.7. Your grade: F. You failed the course.
```

---

## 🧠 Highlights

- Clear separation of concerns using modular functions.
- Reusable logic for grading and pass/fail evaluation.
- Easy to scale and internationalize (e.g., multi-language messages).

---

## 🛠️ Next Ideas

- Add decimal rounding: `average.toFixed(1)`
- Support input validation or handle invalid scores
- Generate report cards for multiple students
- Export to PDF or integrate with frontend UI

---
