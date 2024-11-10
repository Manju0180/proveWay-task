// function toggleExpand(box){
//     box.classList.toggle('expanded');
// }

function toggleExpand(box, size) {
    // Remove any existing expansion class
    box.classList.remove('expand-small', 'expand-medium', 'expand-large');
    
    // Add the selected size class
    if (size === 'small') {
        box.classList.add('expand-small');
    } else if (size === 'medium') {
        box.classList.add('expand-medium');
    } else if (size === 'large') {
        box.classList.add('expand-large');
    }
    
    // Toggle the expanded state
    box.classList.toggle('expanded');
}
