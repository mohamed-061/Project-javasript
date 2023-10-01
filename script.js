
function generateName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== '') {
        const tagsContainer = document.getElementById('tagsContainer');
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.innerHTML = nameInput;
        
    
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa', 'fa-trash');
        deleteIcon.onclick = function() {
            tagsContainer.removeChild(tag);
        };
        tag.appendChild(deleteIcon);
        
        tagsContainer.appendChild(tag);
        
     
        document.getElementById('nameInput').value = '';
        
  
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        tag.style.backgroundColor = randomColor;
    }
}


function clearAllTags() {
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';
}


document.getElementById('generateButton').addEventListener('click', generateName);
document.getElementById('clearAllButton').addEventListener('click', clearAllTags);
