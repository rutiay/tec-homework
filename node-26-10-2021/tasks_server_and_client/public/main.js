document.getElementById("addTaskForm").addEventListener("submit", addTask);
document.getElementById("searchTaskForm").addEventListener("submit", searchTask);
document.getElementById("deleteTaskForm").addEventListener("submit", deleteTask);

function searchTask(event) {
  event.preventDefault();
  const taskId = document.getElementById("taskId").value;
  axios
    .get(`/tasks/${taskId}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteTask(event) {
  event.preventDefault();
  const deleteId = document.getElementById("deleteId").value;
  axios
    .delete(`/tasks/${deleteId}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addTask(event) {
  event.preventDefault();
  const taskName = document.getElementById("taskName").value;
  axios
    .post("/tasks", {
      name: taskName,
    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getTasks() {
  axios
    .get("/tasks")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
