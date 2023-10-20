const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspirationBtn = document.getElementById("inspirationButton")
const moodSelect = document.getElementById("mood");
const inputField = document.querySelector("input");
const inspirationDiv = document.getElementById("inspiration");
const userForm = document.getElementById("userInputForm")
const userInput = document.getElementById("userText")
const displayDiv = document.getElementById("displayDiv")
const clearButton = document.getElementById("clearButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getInspiration = () => {
    const selectedMood = moodSelect.value;
    axios.post("http://localhost:4000/api/inspiration/", { mood: selectedMood })
        .then(res => {
            const data = res.data;
            inspirationDiv.innerHTML = data;
        })
        .catch(error => {
            console.error("error:", error);
        });
};

const getUserPost = () => {
    const userPost = userInput.value
    axios.post("http://localhost:4000/api/userpost/", { content: userPost })
        .then(res => {
            const data = res.data;
            displayDiv.innerHTML = data;
        })
    userInput.value = ""
};

const clearUserInput = () => {
    displayDiv.innerHTML = ''
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inspirationBtn.addEventListener('click', getInspiration)
userForm.addEventListener('submit', function (e) {
    e.preventDefault()
    getUserPost()
})
clearButton.addEventListener('click', clearUserInput)