   // let div = document.getElementById("div");
   //console.log(div.innnerText);
    //div.innerText = "12345";
   // console.log(div.innerText);

    //let input = document.getElementById("input");
    //console.log(div.innnerText);
    //div.innerText = "12345";//
   // console.log(input.innerText);//
    //input.value = "12345"//

   function result() {
    let s1 = document.getElementById("s1");
    let s2 = document.getElementById("s2");
    let result = +s1.value + +s2.value;
    let res = document.getElementById("res");
    res.innerText = result;
   }

