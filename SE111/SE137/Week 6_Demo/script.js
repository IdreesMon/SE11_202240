var trayButton = document.querySelector('aside button: first-child')

trayButton.addEventListener('click', toggle)

function toggle(e)
{
    document.querySelector('.tray').classList.toggle('hide').classList.toggle('hide')
}
var button = Array.from(document.querySelectorAll('nav button'))

for(let i=0; i<button.length; i++)
{
    button[i].addEventListener('click', butts)
}
function butts(e)
{
    for(let i=0; i<button.length; i++)
    {
    e.target.style.backgroundColor = '#161616';
    }
    e.target.style.backgroundColor = '#c2c2c2';
    document.querySelector('#breadcrumba').innerHTML = '<a href="#">' + e.target.innerHTML + '</a>';
}

