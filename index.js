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
