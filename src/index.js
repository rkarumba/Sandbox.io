function sumArray(array) {
    let mini = Math.min(...array);
    let max = Math.max(...array);
    
    if(array != null){
      console.log (mini + max );
    } else {
      return 0;
    }
  }

sumArray(null);