const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

function createMeal(meal){ 
    const ingredients = []; 
    for(i=1; i <= 20; i++){ 
        if(meal[`strIngredient${i}`]){ 
            ingredients.push(
                `${meal[`strIngredient${i}`]} - 
             ${meal[`strMeasure${i}`]}`
                )
        } else { 
            break;
        }
    } 

    console.log(ingredients);

    meal_container.innerHTML = `
        <img src="${meal.strMealThumb}" alt="Meal Image">
        <h2>${meal.strMeal}</h2> 
        <p><strong>Category: ${meal.strCategory} </p>
        <p><strong>Area: ${meal.strArea} </p>
        <h2>Ingredients</h2>
        <ul>
            ${ingredients.map(ingredient => 
                `<li>${ingredient}</li>`).join('')}
        </ul>
        <h2>Instructions</h2>

    <div> 
    <p>${meal.strInstructions}</p>


    <div class="videoWrapper">
            <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" />
</div> 
`;
} 
