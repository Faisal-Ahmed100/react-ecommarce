

export const fetchDatas=()=>{
    return async()=>{
        const fetchHandaler= async()=>{
            const res=await fetch('https://dev-react-5b8e7-default-rtdb.firebaseio.com/cartItems.json');
            const data=await res.json();
            return data;
        }
        try {
            await fetchHandaler()
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchData=(cartItems)=>{
    return async()=>{
        const request=async()=>{
            const res = await fetch('https://dev-react-5b8e7-default-rtdb.firebaseio.com/cartItems.json',{
            method:'PUT',
            body:JSON.stringify(cartItems)
          })
        await res.json();
          }
          try{
     await request()
    }catch(err){
        console.log(err)
    }
    }
    
}