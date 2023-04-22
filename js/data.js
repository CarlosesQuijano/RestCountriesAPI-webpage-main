 
 
 
 const getData = async (URL) => {
    // Obytener los datos del archivo 'stays.json'
    return fetch(URL)
      .then(response => response.json())
      .then(response=> response) 
      .catch(error => error)
        
    
 
  }
  

export default{
getData,

}


