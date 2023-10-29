
setInterval(() => {
        document.getElementById('content').classList.toggle('bg');
}, 1000);

function showhidemenu(){
        if(document.getElementById('menu'))
        {
                // if(document.getElementById('menu').style.display == 'block')
                // {
                //         document.getElementById('menu').style.display = 'none';
                // }
                // else
                // {
                //         document.getElementById('menu').style.display = 'block';
                // }

                document.getElementById('menu').classList.toggle('menu');
        }
}