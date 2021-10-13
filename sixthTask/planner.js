function addTask() {
    const nameInput = document.getElementById('nameInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const newDiv = document.createElement('div');
    const controlHighDiv = document.getElementById('controlHighDiv');
    const controlMidDiv = document.getElementById('controlMidDiv');
    const controlNormalDiv = document.getElementById('controlNormalDiv');
    newDiv.innerHTML =
        `<div class="taskheading">${nameInput.value}</div>
    <div>${descriptionInput.value}</div>`
    const importance_value = checkImportance();
    switch (importance_value) {
        case 'normal':
            newDiv.className = "task";
            controlNormalDiv.after(newDiv);
            break;
        case 'mid':
            newDiv.className = "task + mid-importance";
            controlMidDiv.after(newDiv);
            break;
        case 'high':
            newDiv.className = "task + high-importance";
            controlHighDiv.after(newDiv);
            break;
    }
    return 0;
}


function checkImportance() {
    const importance = document.getElementsByName('importance');
    let importance_value;
    for (let i = 0; i < importance.length; i++) {
        if (importance[i].checked) {
            return importance_value = importance[i].value;
        }
    }
}

