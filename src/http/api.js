const order_endpoint = "https://yummy-burger.firebaseio.com/orders.json";
const ingredients_endpoint = "https://yummy-burger.firebaseio.com/ingredients.json";

class BurgerAPI {

	static handleErrors(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response;
	}

	static post(order) {
		fetch(order_endpoint, {
			method: "POST",
			body: JSON.stringify(order)
		}).then(BurgerAPI.handleErrors)
			.then(response => {
				return response;
			})
	}

	static async getIngredients() {
		const ingredients = await fetch(ingredients_endpoint)
			.then(res => res.json()
				.then(data => {
					return data
				}))
		console.log(ingredients);
		return ingredients;
	}
}

export default BurgerAPI;