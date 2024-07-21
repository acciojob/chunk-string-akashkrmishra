function stringChop(str, size) {
  // your code here
	if(str==null)return [];
	size=Number(size);
      let startingIdx=0;
      let endingIdx=size;
      let arr=[];
      let arrIdx=0;
      while(endingIdx<str.length){
          arr[arrIdx]=str.substring(startingIdx,endingIdx);
          startingIdx=endingIdx;
          endingIdx=endingIdx+size;
          arrIdx++;
      };
      arr[arrIdx]=str.substring(startingIdx,str.length+1);
     
      return arr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
