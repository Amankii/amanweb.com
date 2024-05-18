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
/*body#5a0834*/
/*btn#9d0b59*/
document.addEventListener('DOMContentLoaded', () => {

    const webApp = document.querySelector('#webapp');
    const pcApp = document.querySelector('#pcapp');
    const webtn = document.querySelector('#web');
    const pcbtn = document.querySelector('#pc');

    webtn.onclick = () => {

        webApp.style.display = 'flex';
        pcApp.style.display = 'none';


    };

    pcbtn.onclick = () => {

        pcApp.style.display = 'flex';
        webApp.style.display = 'none';

    };

    /*    send    ----------------------------*/
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyIkcr6ygoSOxMz-YesYGU84sppGMraOD12lgZuWenyCkTeEgLYwi2jpuyO5V6i5rWanA/exec'
    const form = document.forms['submit-to-google-sheet'];
    const input = document.querySelector('#z');
    const btn = document.querySelector('.btn');
    const msg = document.querySelector('#msg');
  
    /*---- Disabled ------*/
    btn.disabled = true;
    input.onkeyup = () => {

        if(input.value.length > 0){
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    };

    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {

            msg.innerHTML = 'Message sent successfully';

            setTimeout(() => {
                msg.innerHTML = '';
            }, 5000);
            form.reset();
            btn.disabled = true;
        })
        .catch(error => console.error('Error!', error.message))
    })
  

});
