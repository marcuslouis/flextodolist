import React, {useContext,useState}from "react";
import { Context } from "../store/appContext";



export const Home = () => {
	const {store, actions} = useContext(Context)
	const [todoList, setTodoList] = useState([]);
	const [item, setItem] = useState("");
	const cut = (index) => {
		const par = todoList.filter((list, i) => index !== i);
		setTodoList(par);}
		const strik = (index) => {
			const todosArray = [...todoList];
			todosArray[index].done = !todosArray[index].done;
			setTodoList(todosArray);
		};
		const line = (newitem) => {
			// 		fetch("https://assets.breatheco.de/apis/fake/todos/user/marcus-louis", {
			// 	method: "PUT",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify([...todoList, { label: "Homework", done: false }]),
			// 	redirect: "follow",
			// })
			// 	.then((response) => response.json())
			// 	.then((result) => console.log(result))
			// 	.catch((error) => console.log("error", error));
	
			let newlist = [...todoList, { label: newitem, done: false }];
			setTodoList(newlist);
	
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
	
			var requestOptions = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newlist),
				redirect: "follow",
			};
	
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/marcus-louis",
				requestOptions
			)
				.then((response) => {
					response.status === 200 ? setTodoList(newlist) : "";
				})
	
				.catch((error) => console.log("error", error));
		};
	return(
		<>
		<div>
		<input
			type="text"
			className="fore-control"
			placeholder="username"
			onChange={(e) => setItem(e.target.value)}
			value={item} />
			<a
					onClick={() => {
						if (item !== "") {
							setTodoList([
								...todoList,
								{ label: item, done: false },
							]);
							setItem("");
							line(item);
						}
					}}
					type="button"
					className="btn btn-primary"
					id="basic-addon1">
					Button
				</a>
			</div>
			<ul>

				{store.list.map((element, index) => {
					return (
						<>
							<li key={index} className="mr-2">
								<span className={element.done ? "strik" : ""}>
									{element.label}
								</span>
								<button
									className="m1-2 btn btn-danger"
									onClick={() => {
										strik(index);
									}}>
									strike
								</button>
								<a
									className="m1-2 btn btn-danger"
									onClick={() => {
										cut(index);
									}}>
									X
								</a>
							</li>
						</>
					);
				})}
			</ul></>
	)
		
};
