function newItem() {

  // Added a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    let list = $('#list');
    list.append(li);
  }

  // Cross out an item from the list of items:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

  // Added a delete button with an "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass('delete');
  }
    $('#list').sortable();
}
