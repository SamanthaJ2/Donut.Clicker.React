import React from 'react'
import './App'
export default function NavBar() {
  return (
    <div>NavBar</div>
  )
}
   
  
const imgicon = document.getElementById('imgiconlink');
function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.getElementById('imgiconlink').style.display = 'none';
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.getElementById('imgiconlink').style.display = 'block';
}