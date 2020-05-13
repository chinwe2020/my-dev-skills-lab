//const and var

let skill, skills;
 
//Cache el references

const $buttonEl = $('button');
const $inputEl = $('input');
const $skillsListEl = $('#skills')

//event listeners

$buttonEl.on('click', handleClick);
$skillsListEl.on('click', "span", handleDelete)

//functions

init();

function init() {
    // skills = [];
    skills = getFromStorage();
    render();
}

function handleClick() {
   skill = $inputEl.val();

// if(!skill.length) return;

   $inputEl.val("");

   skills.push(skill);

   myStorage();

   render();
}



function generateUI() {
    return skills.map((skill, index) => {
        return `<p data-id="${index}"><span>X</span>&nbsp;${skill}</p>`;
    });
}

function handleDelete() {
    const $skillToDelete = $(this).parent()

    const skillId = $skillToDelete[0].dataset.id;

    $skillToDelete.fadeOut(1000, function() {
        skills.splice(skillId, 1);
        
        myStorage();

        render();
    });
}

function myStorage() {
    localStorage.setItem("skills", JSON.stringify(skills));
}

function getFromStorage() {
    const showSkills = localStorage.getItem("skills")
    if(!showSkills) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("skills"))
    }
}

function render() {
    $skillsListEl.html(generateUI().join(""));
}



