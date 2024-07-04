const checkStringLength = function(string,length){
  if(string.length <= length){
    return true;
  }else{
    return false;
  }
};


const isPalindrome = function(string){
  string = string.toLowerCase().replaceAll(' ','');
  let newString = '';
  for(let i = string.length - 1;i >= 0;i--){
    newString += string[i];
  }

  if(newString === string){
    return true;

  }else{
    return false;
  }

};

