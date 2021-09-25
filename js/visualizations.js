// changing the color and height of the sorting element

let speed;

arr_speed_input.addEventListener('input', set_speed);

function set_speed(){
  switch(parseInt(arr_speed_input.value)){
    case 1: speed = 1;  break;

    case 2: speed = 10;  break;

    case 3: speed = 100;  break;

    case 4: speed = 1000;  break;

    case 5: speed = 10000;  break;
  }
  delay_time=10000/(Math.floor(arr_size/10)*speed);
}

let delay_time=10000/(Math.floor(arr_size/10)*speed);
let c_delay=0;

function div_update(arr_cont, height, color){
  window.setTimeout(function(){
    arr_cont.style.cssText+=" margin:0% " + margin_size + "%; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
  }, c_delay+=delay_time);
}

