function scuberGreetingForFeet(feet){
  // Write your code here!
  let charges
  if (feet > 2500){
    return charges = 'No can do.';
  }
  if (feet <= 400){
    return charges = 'This one is on me!';
  }
  if (feet <= 2000){
   return charges = 'That will be twenty bucks.';
  }
  return 'I will gladly take your thirty bucks.';
}

function ternaryCheckCity(city){
  // Write your code here!
 return city=='NYC'? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let feedback;
  switch (tip) {
    case 'generous':
    return 'Thank you so much.';
    break;
    case 'not as generous':
    return 'Thank you.';
    break;
    default:
      return 'Bye.';
      break;
  }
}