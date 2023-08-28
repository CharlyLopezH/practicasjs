const removeDuplicates = (nums=[1,1,2])=> {
    let ix=0;     
    for(p=0; p<nums.length-1; p++ ) {
        if(nums[ix]!=nums[p+1]) {           
          nums[ix]=nums[p+1];   
          ix++;   
        }          
    }  
    return(nums);  
     
    };
    
//Entradas..

    //nums=[1,1,2]    
    const res=removeDuplicates();
    console.log(`Res-> : ${res}`);