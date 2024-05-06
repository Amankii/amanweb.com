/*

    let availableKeywords  = ["Tasbeeh","Al-Qur\"an","Fashion","The bulb","QETC"];
    const inputBox = document.querySelector('#input-box');
    const resultsBox = document.querySelector('#result-box');


    inputBox.onkeyup = () => {
        let result = [];
        let input = inputBox.value;

        if(input.length) {
            result = availableKeywords.filter((keyword)=>{
            return  keyword.toLowerCase().includes(input.toLowerCase());
            });

            console.log(result);
            };
            display(result);
        };


function display(result){
    const content = result.map((list)=>{
        return "<li>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content + "</ul>"; 
}
*/

