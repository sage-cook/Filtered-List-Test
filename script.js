var activefilters = [];

/**
 * Triggered once on page load. Creates all the dynamic elements associated with the filtered list.
 */
function loadContent()
{
	// load filters
	let filterdiv = document.getElementById('filters');
	validtags.forEach(tagname => {
		// creating a button html element for this tag
		let node = document.createElement('button');
		node.setAttribute('id','tag-'+tagname);
		node.addEventListener('click',() => {toggleFilter(tagname);});
		// adding text to the button
		node.appendChild(document.createTextNode(capitalize(tagname)));
		// inserting the button into the document
		filterdiv.appendChild(node);
		console.log('created filter for tag: '+tagname);
	});
	// load list items
	let listdiv = document.getElementById('results');
	listcontents.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
	listcontents.forEach(item => {
		// creating a list entry html element for this food item
		let node = document.createElement('li');
		node.appendChild(document.createTextNode(item.name));
		
		// attach a reference to this element in listcontents
		item.attached_element = node;
		// inserting the item into the document (all food items are generated once now, and can be shown/hidden later by filters)
		listdiv.appendChild(node);
		console.log('created item: '+item.name);
	});
}

/**
 * Action triggered when a filter button is pressed. Toggles the filter as well as
 * the button's visual state.
 */
function toggleFilter(name)
{
	let index = activefilters.indexOf(name);
	let tagbutton = document.getElementById('tag-'+name);
	if(index<0)
	{
		activefilters.push(name);
		if (tagbutton != null) tagbutton.classList.add('filter-on');
		console.log(name+' toggled on');
	}
	else
	{
		activefilters.splice(index,1);
		if (tagbutton != null) tagbutton.classList.remove('filter-on');
		console.log(name+' toggled off');
	}
	updateList();
}

/**
 * Updates which list items are shown/hidden depending on the current filter settings
 */
function updateList()
{
	listcontents.forEach(item => {
		let hide = false;
		for(let i = 0; i < activefilters.length; i++)
		{
			if(!item.tags.includes(activefilters[i]))
			{
				hide = true;
				break;
			}
		}
		
		item.attached_element.hidden = hide;
	});
}

/**
 * Capitalizes the first letter of a string and de-capitalizes the rest
 */
function capitalize(str)
{
	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}