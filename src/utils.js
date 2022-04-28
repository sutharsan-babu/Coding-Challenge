//set todos to session storage
const setItem = state =>{
    sessionStorage.setItem('todos',JSON.stringify(state));
}
//get todos from session storage
const getItem = () =>{
    return JSON.parse(sessionStorage.getItem('todos'))
}
//generate random id
const generateRandomId = () =>{
    return Math.floor((Math.random() * 1000)+1)
}
//get date
const getDate = () =>{
    const date = new Date();
    return date.toISOString();
}

export{
    setItem,
    getItem,
    generateRandomId,
    getDate
}