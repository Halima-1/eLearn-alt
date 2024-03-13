function display(){
    
    // home
    let display= document.getElementById('sideNav')
    if(display.classList.contains('showing')){
        display.classList.remove('showing');
        display.classList.add('hidden');
    }else{
        display.classList.remove('hidden');
        display.classList.add('showing');
    }

    // let drawer= document.getElementById('drawerr')
    // if(drawer.classList.contains('showing')){
    //     drawer.classList.remove('showing');
    //     drawer.classList.add('hidden');
    // }else{
    //     drawer.classList.remove('hidden');
    //     drawer.classList.add('showing');
    }
    function moreClasses(){
        let displayClass= document.getElementById('moreClass')
        if(displayClass.classList.contains('showing')){
            displayClass.classList.remove('showing');
            displayClass.classList.add('hidden');
        }else{
            displayClass.classList.remove('hidden');
            displayClass.classList.add('showing');
        }
    }
function displayBtn(){
            let displayBtn = document.getElementById('displayBtnn')
            if(displayBtn.classList.contains('displayBtn')){
                displayBtn.classList.remove('displayBtn');
                displayBtn.classList.add('removeBtn');
                
            }
            else{
                displayBtn.classList.remove('removeBtn');
                displayBtn.classList.add('displayBtn');
            
             }
            
}
    function moreClasses(){
        let displayBtn = document.getElementById('displayBtnn')
        let displayClass= document.getElementById('moreClass')
        if(displayClass.classList.contains('showing') & displayBtn.classList.contains('displayBtncd..')){
            displayClass.classList.remove('showing');
            displayClass.classList.add('hidden');
            displayBtn.classList.remove('displayBtn');
            displayBtn.classList.add('removeBtn');
        }else{
            displayClass.classList.remove('hidden');
            displayClass.classList.add('showing');
            displayBtn.classList.remove('removeBtn');
            displayBtn.classList.add('displayBtn');

        }
    }
