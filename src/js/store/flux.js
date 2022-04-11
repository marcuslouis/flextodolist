const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list:[]
		},
		actions: {
			getData : () => {
				fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/marcus-louis",{
						method:"GET",
						redirect:"follow",

					}

				)
				.then((response)=> response.json())
				.then(result => setStore({list : result}))
				.catch((error)=> console.log("error",error))
			}
		}
	}
	};


export default getState;
