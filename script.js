// Function to generate a name tag
function generateName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== '') {
        const tagsContainer = document.getElementById('tagsContainer');
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.innerHTML = nameInput;
        
        // Add delete icon to the tag
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa', 'fa-trash');
        deleteIcon.onclick = function() {
            tagsContainer.removeChild(tag);
        };
        tag.appendChild(deleteIcon);
        
        tagsContainer.appendChild(tag);
        
        // Clear the input field
        document.getElementById('nameInput').value = '';
        
        // Generate a random background color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        tag.style.backgroundColor = randomColor;
    }
}

// Function to clear all tags
function clearAllTags() {
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';
}

// Add click event listeners to the buttons
document.getElementById('generateButton').addEventListener('click', generateName);
document.getElementById('clearAllButton').addEventListener('click', clearAllTags);
