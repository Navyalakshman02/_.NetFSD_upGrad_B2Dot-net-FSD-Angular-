// taskManager.js

let tasks = [];

/* ===============================
   1️⃣ CALLBACK VERSION
================================ */
const addTaskCallback = (task, callback) => {
  setTimeout(() => {
    tasks.push(task);
    callback(`Task added (callback): ${task}`);
  }, 1000);
};

/* ===============================
   2️⃣ PROMISE VERSION
================================ */
const addTaskPromise = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(task);
      resolve(`Task added (promise): ${task}`);
    }, 1000);
  });
};

/* ===============================
   3️⃣ ASYNC / AWAIT VERSION
================================ */
const listTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 500);
  });
};

const taskFlow = async () => {
  await addTaskPromise("Learn JavaScript");
  await addTaskPromise("Practice ES6");
  await addTaskPromise("Master Async/Await");

  const taskList = await listTasks();

  console.log(`
Task List
---------
${taskList.map((task, index) => `${index + 1}. ${task}`).join("\n")}
`);
};

/* ===============================
   RUN PROGRAM
================================ */
addTaskCallback("Initial Task", console.log);
taskFlow();