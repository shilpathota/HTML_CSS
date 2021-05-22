const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.addEventListener("click",()=>{
    toastnotification();
});
function toastnotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = "Coding is crazy";
    container.appendChild(notif);
    setTimeout(()=>{
        notif.remove();
    },3000);
}
