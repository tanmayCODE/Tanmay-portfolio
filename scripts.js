const themeDots=document.querySelectorAll('.theme-dot')
const theme=localStorage.getItem('theme')
if(theme===null){
    setTheme('light')
}else{
    setTheme(theme)
}
for(let i=0;i<themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        const mode=this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode==='light')
    {
        document.getElementById('theme-style').href='styles.css'
    }
    if(mode==='blue'){
        document.getElementById('theme-style').href='blue.css'
    }
    if(mode==='green'){
        document.getElementById('theme-style').href='green.css'
    }
    if(mode==='purple'){
        document.getElementById('theme-style').href='purple.css'
    }

    localStorage.setItem('theme',mode)
}