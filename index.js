//create variable for what you are selecting from
//select button by using queryselector
//create function to addingEventListener
//addEventListener using the chosen variable
//name event and use anon callback function (parameter)
//return "string" 
const input = document.querySelector('#button');
function addingEventListener() {
    input.addEventListener('click', function(e) {
        return "clicked"
    });
}
