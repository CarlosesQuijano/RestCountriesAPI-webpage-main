 
 
 
 const getData = async (URL) => {
    // Obytener los datos del archivo 'stays.json'
    return fetch(URL)
      .then(response => response.json())
      .then(response=> response) 
      .catch(error => error)
        
    
 
  }


  
  const filtrar = (arr, filtro) => {
  
    let filtered = arr.filter( elem => elem.region === filtro)
    
      return filtered;
    };
    
    const filterByCountry = (arr, filtro) => {
      
      let filtered = arr.filter( elem => {
        return elem.name.common.toLowerCase().includes(filtro.toLowerCase()) || elem.name.common.toLowerCase().includes(filtro.toLowerCase())
        
      })
    
      return filtered;
    }


    const filterByRegion= (data) => {
      let regiones = data.map (elem => elem.region);
      regiones = new Set (regiones);

      regiones =  ['All', ...regiones];
      return regiones


      
    };
  

    export default{
    getData,
    filtrar, 
    filterByCountry,
    filterByRegion,

    }


