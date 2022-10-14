// These will each be turned into a filter button
const validtags = ['breakfast','lunch','dinner','brunch','side dish','snack','desert','vegetarian','vegan','gluten free','stove','oven','grill','easy','cheap','quick','pasta','noodles','soup'];

/**
 * All the data associated with each list entry.
 * Format for a list entry:
 * {
 *		name: <display name>,
 * 		tags: [
 * 			<A tag this entry should be filterable by>,
 * 			<Another tag>
 * 		]
 * }
 */
const listcontents = [
{name: 'Ragu', tags: ['dinner','pasta','stove','easy','cheap']},
{name: 'Lentil soup', tags: ['dinner','soup','vegetarian','vegan','gluten free','stove','easy','cheap']},
{name: 'Omelette', tags: ['breakfast','brunch','vegetarian','gluten free','stove','easy','cheap','quick']},
{name: 'Mac \'n cheese', tags: ['dinner','pasta','vegetarian','easy','oven','stove']},
{name: 'Apple sauce', tags: ['snack','vegetarian','vegan','gluten free','easy','quick','cheap']},
{name: 'Hamburgers', tags: ['lunch','dinner','grill']},
{name: 'Breakfast burrito', tags: ['breakfast','brunch','stove','easy','cheap']},
{name: 'Chicken soup', tags: ['dinner','stove','gluten free','easy','soup']},
{name: 'Roast potatoes', tags: ['side dish','oven','vegetarian','vegan','gluten free','easy','cheap']},
{name: 'Avocado toast', tags: ['breakfast','side dish','snack','vegetarian','vegan','easy','quick']},
{name: 'Grilled asparagus', tags: ['side dish','vegetarian','vegan','gluten free','grill','easy','cheap']},
{name: 'Pad Thai', tags: ['lunch','dinner','stove','cheap','noodles']},
{name: 'Ramen (instant)', tags: ['lunch','dinner','stove','cheap','quick','easy','noodles','soup']},
{name: 'Ramen (traditional)', tags: ['lunch','dinner','stove','noodles','soup']},
{name: 'Fried Rice', tags: ['lunch','dinner','stove','gluten free','cheap']},
{name: 'Cookies', tags: ['desert','vegetarian','oven','cheap','easy']},
{name: 'Tira mi su', tags: ['desert','vegetarian','gluten free','oven']},
{name: 'Eggs benedict', tags: ['breakfast','brunch','vegetarian','gluten free','stove','quick']},
{name: 'Nachos', tags: ['lunch','snack','vegetarian','gluten free','stove','quick','easy','cheap']},
{name: 'Shepherd\'s pie', tags: ['dinner','gluten free','stove','oven','easy']},
{name: 'Greek salad', tags: ['lunch','vegetarian', 'vegan', 'gluten free', 'quick', 'easy']}
];