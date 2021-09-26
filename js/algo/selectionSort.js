async function selectionSort() {
  c_delay = 0;
  let i;
  for (i = 0; i < arr_size - 1; i++) {
    if(stopProcess) break;
    await div_update_test1(divs[i], div_sizes[i], "red");
    
    index_min = i;
    
    for (let j = i + 1; j < arr_size; j++) {
      if(stopProcess) break;
      await div_update_test1(divs[j], div_sizes[j], "yellow");
      
      if (div_sizes[j] < div_sizes[index_min]) {
        if (index_min != i) {
          div_update_test(divs[index_min], div_sizes[index_min], "blue");
        }
        index_min = j;
        div_update_test(divs[index_min], div_sizes[index_min], "red");
      }
      else {
        div_update_test(divs[j], div_sizes[j], "blue");
      }
    }

    if (index_min != i) {
      let temp = div_sizes[index_min];
      div_sizes[index_min] = div_sizes[i];
      div_sizes[i] = temp;

      div_update_test(divs[index_min], div_sizes[index_min], "red");
      div_update_test(divs[i], div_sizes[i], "red");
      div_update_test(divs[index_min], div_sizes[index_min], "blue");
    }
    div_update_test(divs[i], div_sizes[i], "green");
  }

  div_update_test(divs[i], div_sizes[i], "green");

  
  stopProcess=false;
  enable_buttons();
}