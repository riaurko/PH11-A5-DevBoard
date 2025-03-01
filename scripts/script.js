//! Setting Dynamic Date
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const todayDay = weekdays[new Date().getDay()];
const todayDate = new Date().getDate();
const thisMonth = months[new Date().getMonth()];
const thisYear = new Date().getFullYear();

const todayDateEl = document.querySelectorAll("#today-date > div > h4 span")[1];
const todayDayEl = document.querySelector("#today-date > div > h4 span");
todayDayEl.innerText = todayDay;
todayDateEl.innerText = `${thisMonth} ${todayDate} ${thisYear}`;


//! changeTaskCounts() to decrease 'Assigned Task's Count' and increase 'Completed Task's Count'
function changeTaskCounts() {
    const assignedTasks = document.querySelector("#assigned-tasks > div > h3");
    const completedTasks = document.querySelector("#completed-tasks > h4");
    assignedTasks.innerText = `0${parseInt(assignedTasks.innerText) - 1}`;
    completedTasks.innerText = parseInt(completedTasks.innerText) + 1;
}

//! disableCompleteBtn() to disable the 'Complete' Button in a Task Card
function disableCompleteBtn(completeBtn) {
    completeBtn.classList.remove('shadow', 'shadow-primary', 'hover:shadow-md', 'hover:shadow-blue-600', 'active:shadow-none', 'transition-shadow');
    completeBtn.classList.add('bg-opacity-50');
    completeBtn.classList.add('text-opacity-70');
    completeBtn.setAttribute('disabled', null);
}

//! addActivity() to add a Dynamic Activity Box in Activity Log
function addActivity(taskCard, clickTime) {
    const taskTitle = taskCard.getElementsByClassName('title')[0].innerText;
    const activityContainer = document.getElementById('activities');
    const activity = document.createElement('div');
    activity.classList.add('p-3', 'rounded-md', 'bg-[#E0F0FF]');
    activity.innerText = `You've completed the task '${taskTitle}' at ${clickTime}`;
    activityContainer.appendChild(activity)
}


//! Adding EventListeners to Complete Task Buttons
const taskCards = document.getElementsByClassName('task-card');
for (let i = 0; i < 3; i++) {
    let currentMeridiem;
    if (new Date().getHours() < 12)
        currentMeridiem = 'AM';
    else
        currentMeridiem = 'PM';
    const instantTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${currentMeridiem}`;
    taskCards[i].addEventListener('click', changeTaskCounts);
    taskCards[i].addEventListener('click', () => disableCompleteBtn(taskCards[i].getElementsByClassName('complete-btn')[0]));
    taskCards[i].addEventListener('click', () => addActivity(taskCards[i], instantTime));
}
