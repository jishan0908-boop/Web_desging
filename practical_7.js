function showdatetime(){
    const now = new Date();

  const date = now.toLocaleDateString();      
  const time = now.toLocaleTimeString();     
    console.log(date);
    console.log(time);
}

showdatetime();