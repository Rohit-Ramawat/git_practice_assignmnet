function prime(num){
  if(num==1){
    console.log("Neighter Prime nor Composite ");
  }else{
    let count=0;
    for(let i=1;i<=num/2;i++){
      if(num%i!==0){
        count++
      }
    }
    if(count==1){
      console.log("Prime");
    }else{
      console.log("Not Prime");
    }
  }
}

prime(9);
 
prime(11);