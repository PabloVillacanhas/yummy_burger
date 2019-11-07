const order_endpoint = "https://yummy-burger.firebaseio.com/orders.json";

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
}

export default BurgerAPI;