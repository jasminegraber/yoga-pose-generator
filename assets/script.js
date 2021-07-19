const yogaURL = "https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json";

document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.getElementById('img-container');
    const english = document.getElementById('english-name');
    const sanskrit = document.getElementById('sanskrit-name');
    const poseBtn = document.getElementById('get-pose');

    poseBtn.addEventListener('click', (event) => {

        fetch(yogaURL) // returns Promise object
        .then((response) => {
            return response.json(); //returns Promise object, too
        })
        .then((data) => {
            // DOM Manipulation
            data.forEach((pose) => {
                // const img = document.createElement('img');
                // imgContainer.appendChild('img');
                english.innerText = pose.english_name;
                sanskrit.innerText = pose.sanskrit_name;
            })
        })


    });

});