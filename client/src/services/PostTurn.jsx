

export const postTurn = async (data ) => {
     
  const url= "http://localhost:3002/api/turn/"
    try {
      const response = await fetch(url, {
          
          method: "POST",
          // headers: {
          //   'Content-Type': 'application/json'
          // },
          data: data
      }); 
      console.log(data ) 
     console.log(response)
     if (!response.ok) {
      throw new Error('Error al enviar los datos');
    }
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      throw err;
    }
  };