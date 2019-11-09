const order_endpoint = "https://yummy-burger.firebaseio.cm/ordrs.json";
const ingredients_endpoint = "https://yummy-burger.firebaseio.com/ingredients.json";

class BurgerAPI {

	static handleErrors(response) {
		if (!response.ok) {
			return response;
		}
		return response;
	}

	static async post(order) {
		const res = await fetch(order_endpoint, {
			method: "POST",
			body: JSON.stringify(order)
		}).then(response => this.handleErrors(response).json()
			.then(data => { return data }));
		return res;
	}

	static async getIngredients() {
		let ing = await fetch(ingredients_endpoint)
			.then(res => res.json()
				.then(data => {
					return data
				}))
		return ing
	}
}

export default BurgerAPI;