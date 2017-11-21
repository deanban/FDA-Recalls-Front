function fetchingRecalls() {
  return {
    type: "FETCHING"
  }
}


function fetchedRecalls(data) {
	// console.log("fetched", questions)
  return {
    type: "FETCHED_DATA",
    payload: data
  }
}

export function fetchData(){
	return function(dispatch){
		dispatch(fetchingRecalls())
		fetch('http://localhost:3000/api/v1/recalls', {
			method: "GET"
      // mode: "no-cors"
		})
		.then(resp => resp.json())
		.then((json) => {
			// debugger
			dispatch(fetchedRecalls(json))
			// console.log("questionAction", questions)
		})
	}
}
