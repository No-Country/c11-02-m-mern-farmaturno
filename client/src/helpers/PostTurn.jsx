

export const postTurn = async (data ) => {
     
  console.log(data )
    try {
      const response = await fetch({
          url: "http://localhost:3002/api/turn/",
          method: "POST",
          data: data ,
      }); 
      
     console.log(response)
     if (response.status === 200){
    console.log('turno sacado')
     }else {
  
     console.log(error)
     }
          
      return response;
      
    } catch (error) {
      console.log(error);
    }
  };