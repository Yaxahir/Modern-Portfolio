function ok(params) {
    
    let left =document.querySelector('.left')

    left.classList.toggle('lt')
    
   let f1=document.querySelector('.leftSecond')

   f1.classList.toggle('ls')

   let i=document.querySelector('.leftBtn button i')

   i.classList.toggle('rotate')
    
    
}

function ok1() {
    
    let btn=document.querySelector('.btn')

    let btns = btn.querySelectorAll('button')

    btns.forEach((e)=>{
        e.addEventListener('click',((s)=>{

            // let full=document.querySelector('projectDiv')
            let PR=document.querySelectorAll('.pr1')
 
         

        for( let all of PR  ){

            all.style.display='none'

            const att = all.getAttribute('data-filter')

            if (e.textContent === att || e.textContent==='ALL' ) {
                
                all.style.display='block'

                all.classList.add('show')

            }
            else{
                all.classList.remove('none')

            }

        }


        }))
    })

}
ok1()







