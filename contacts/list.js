// script for my contacts list

//  Get input element
let fileterInput = document.getElementById('filterInput');
// Add event listner
fileterInput.addEventListener('keyup', filterNames);
// creating function to filter names by letters
function filterNames(){
  //Get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  
  // Get naes ul
  let ul = document.getElementById('names');
  // Get list from ul
  let li = ul.querySelectorAll('li.collection-item');

  // Loop through collection-items list( initialize a variable i, assign value 0 to it, check to see if i is less than var li, as long as it holds condition add one to i)
  for(let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    }  else {
        li[i].style.display = 'none';
      }
  }
}

