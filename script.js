
function show(id, text) {
    document.getElementById(id).textContent = text;
}

// Задание 46
function task46() {
    const age = Number(document.getElementById("age").value);
    show("result46", age >= 16
        ? "Регистрация разрешена"
        : "Регистрация недоступна");
}

// Задание 47
function task47() {
    const price = Number(document.getElementById("price").value);
    const student = document.getElementById("student").checked;
    const discount = student ? price * 0.1 : 0;
    show("result47", `Цена: ${price} тг. Скидка: ${discount} тг. Итог: ${price - discount} тг.`);
}

// Задание 48
function task48() {
    const a = Number(document.getElementById("sideA").value);
    const b = Number(document.getElementById("sideB").value);
    const c = Number(document.getElementById("sideC").value);
    const valid = a > 0 && b > 0 && c > 0 &&
        a + b > c && a + c > b && b + c > a;
    show("result48", valid
        ? "Треугольник существует"
        : "Треугольник не существует");
}

// Задание 49
function task49() {
    const role = document.getElementById("role").value;
    let message;

    switch (role) {
        case "admin": message = "Полный доступ"; break;
        case "teacher": message = "Доступ преподавателя"; break;
        case "student": message = "Доступ студента"; break;
        default: message = "Доступ запрещён";
    }

    show("result49", message);
}

// Задание 50
function task50() {
    const battery = Number(document.getElementById("battery").value);
    let message;

    if (battery < 0 || battery > 100) message = "Некорректное значение";
    else if (battery <= 15) message = "Срочно подключите зарядку";
    else if (battery <= 30) message = "Низкий заряд";
    else if (battery <= 80) message = "Нормальный заряд";
    else message = "Высокий заряд";

    show("result50", message);
}

// Задание 51
function task51() {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) numbers.push(i);
    }
    show("result51", numbers.join(", ") + "\nКоличество: " + numbers.length);
}

// Задание 52
function task52() {
    const n = Number(document.getElementById("number52").value);

    if (!Number.isInteger(n) || n < 0 || n > 170) {
        show("result52", "Введите целое число от 0 до 170");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) factorial *= i;
    show("result52", `${n}! = ${factorial}`);
}

// Задание 53
function task53() {
    const numbers = [12, -5, 8, -9, 15, -2, 0, 21];
    const negativeNumbers = [];

    for (const number of numbers) {
        if (number < 0) negativeNumbers.push(number);
    }

    show("result53", `${negativeNumbers.join(", ")}. Количество: ${negativeNumbers.length}`);
}

// Задание 54
function task54() {
    const students = ["Алия", "Руслан", "Мадина", "Арман", "Данияр"];
    const name = document.getElementById("searchName").value.trim();

    show("result54", students.includes(name)
        ? "Студент найден"
        : "Студент не найден");
}

// Задание 55
function task55() {
    const scores = [75, 92, 48, 85, 67, 100, 58];
    const sorted = [...scores].sort((a, b) => a - b);

    show("result55", `По возрастанию: ${sorted.join(", ")}\nМинимум: ${sorted[0]}\nМаксимум: ${sorted[sorted.length - 1]}\nПо убыванию: ${[...sorted].reverse().join(", ")}`);
}

// Задание 56
function task56() {
    const width = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);

    show("result56", width >= 0 && height >= 0
        ? `Площадь: ${width * height}`
        : "Размеры не могут быть отрицательными");
}

// Задание 57
function task57() {
    const word = document.getElementById("word").value.toLowerCase();
    const reversed = word.split("").reverse().join("");

    show("result57", word === reversed
        ? "Это палиндром"
        : "Это не палиндром");
}

// Задание 58
function task58() {
    const text = document.getElementById("sentence").value.trim();
    const count = text === "" ? 0 : text.split(/\s+/).length;
    show("result58", `Количество слов: ${count}`);
}

// Задание 59
function task59() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    for (let i = 0; i < 8; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    show("result59", password);
}

// Задание 60
function task60() {
    const amount = Number(document.getElementById("tenge").value);
    const rate = Number(document.getElementById("rate").value);

    if (amount < 0 || rate <= 0) {
        show("result60", "Проверь сумму и курс");
        return;
    }

    show("result60", (amount / rate).toFixed(2) + " USD");
}

// Задание 61
let count = 0;

function changeCount(step) {
    count += step;
    document.getElementById("counter").textContent = count;
}

function resetCount() {
    count = 0;
    document.getElementById("counter").textContent = count;
}

// Задание 62
function task62() {
    const fields = ["score1", "score2", "score3"].map(id =>
        document.getElementById(id).value
    );

    if (fields.some(value => value.trim() === "")) {
        show("result62", "Заполните все поля");
        return;
    }

    const scores = fields.map(Number);

    if (scores.some(n => !Number.isFinite(n) || n < 0 || n > 100)) {
        show("result62", "Баллы должны быть от 0 до 100");
        return;
    }

    const average = scores.reduce((sum, n) => sum + n, 0) / 3;
    const level = average >= 85 ? "Отлично"
        : average >= 70 ? "Хорошо"
        : average >= 50 ? "Удовлетворительно"
        : "Нужно улучшить результаты";

    show("result62", `Средний балл: ${average.toFixed(2)}. ${level}`);
}

// Задание 63
function task63() {
    const input = document.getElementById("newTask");
    const text = input.value.trim();

    if (!text) {
        alert("Введите задачу");
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const remove = document.createElement("button");

    checkbox.type = "checkbox";
    span.textContent = " " + text + " ";
    remove.textContent = "Удалить";

    checkbox.addEventListener("change", () => {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    remove.addEventListener("click", () => li.remove());

    li.append(checkbox, span, remove);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

// Задание 64
const questions = [
    {q: "1. Как объявить переменную?", a: ["let", "print", "echo"], c: 0},
    {q: "2. Как вывести текст в консоль?", a: ["console.log()", "show()", "echo()"], c: 0},
    {q: "3. Как проверить строгое равенство?", a: ["=", "==", "==="], c: 2},
    {q: "4. Как добавить элемент в конец массива?", a: ["push()", "pop()", "shift()"], c: 0},
    {q: "5. Как вернуть результат функции?", a: ["break", "return", "continue"], c: 1}
];

let questionIndex = -1;
let correctAnswers = 0;
let quizEnded = false;

function task64() {
    if (quizEnded) return;

    if (questionIndex >= 0) {
        const selected = document.querySelector('input[name="answer"]:checked');

        if (!selected) {
            alert("Выберите ответ");
            return;
        }

        if (Number(selected.value) === questions[questionIndex].c) {
            correctAnswers++;
        }
    }

    questionIndex++;

    if (questionIndex >= questions.length) {
        quizEnded = true;
        document.getElementById("question").textContent = "Тест завершён";
        document.getElementById("answers").replaceChildren();
        document.getElementById("nextQuestion").disabled = true;

        show("result64", `Правильных ответов: ${correctAnswers} из 5. Результат: ${correctAnswers * 20}%`);
        return;
    }

    const current = questions[questionIndex];
    document.getElementById("question").textContent = current.q;

    const container = document.getElementById("answers");
    container.replaceChildren();

    current.a.forEach((answer, index) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;

        label.append(radio, document.createTextNode(answer));
        container.append(label, document.createElement("br"));
    });

    document.getElementById("nextQuestion").textContent =
        questionIndex === 0 ? "Ответить" :
        questionIndex === 4 ? "Завершить тест" : "Ответить и продолжить";
}

// Задание 65
const names = ["Алия", "Руслан", "Мадина", "Арман", "Данияр"];

function renderAttendance() {
    const container = document.getElementById("attendance");
    container.replaceChildren();

    names.forEach((name, index) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = "present" + index;

        label.append(checkbox, document.createTextNode(name + " присутствует"));
        container.append(label, document.createElement("br"));
    });

    document.getElementById("lessonDate").value =
        new Date().toLocaleDateString("en-CA");
}

function task65() {
    const boxes = names.map((_, i) =>
        document.getElementById("present" + i)
    );

    const present = boxes.filter(box => box.checked).length;
    const absent = names.length - present;
    const percent = present / names.length * 100;

    show("result65", `Присутствуют: ${present}\nОтсутствуют: ${absent}\nПосещаемость: ${percent.toFixed(2)}%`);
}

function saveAttendance() {
    const date = document.getElementById("lessonDate").value;

    if (!date) {
        show("result65", "Укажите дату занятия");
        return;
    }

    const data = {
        date,
        students: names.map((name, i) => ({
            name,
            present: document.getElementById("present" + i).checked
        }))
    };

    try {
        localStorage.setItem("attendance_" + date, JSON.stringify(data));
        show("result65", "Результаты сохранены");
    } catch (error) {
        show("result65", "Не удалось сохранить результаты");
    }
}

renderAttendance();