function toggleExpand(event, box, size) {
  // Prevent the event from propagating to parent elements
  event.stopPropagation();

  // Ensure that the event is triggered by clicking on the .box, not the dropdown inside it
  if (event.target.closest("select")) {
    return; // If the click is inside a select dropdown, do nothing
  }

  // Remove any existing expansion class
  box.classList.remove("expand-small", "expand-medium", "expand-large");

  // Add the selected size class
  if (size === "small") {
    box.classList.add("expand-small");
  } else if (size === "medium") {
    box.classList.add("expand-medium");
  } else if (size === "large") {
    box.classList.add("expand-large");
  }

  // Toggle the expanded state
  box.classList.toggle("expanded");
}
