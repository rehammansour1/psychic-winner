(function getApi(){
var xhttp=new XMLHttpRequest;
xhttp.onreadystatechange=function(){
if(this.readyState==4 && this.status==200){
var element=this.responseText;
var reham =JSON .perse(element);
var data=reham.products;
var   myText="";
for(var i=0; i<data.lenght,i++){
var cartoona =`


<div class="col-md-4 mb-4 text-center ">
     <img src="${data[i].url}"style="height:350px" class='img-fluid'>
     <h2> ${data[i].title}</h2>
    <h5 ${data[i].publisher}></h5>
</div>
`;
 myText =myText+ cartoona;
 
}

document.querySelector(".test").innerHTML= myText;

}



};






xhttp.open( "GET" ,"https://jsonplaceholder.typicode.com/photos",true);
xhttp.send();
})();


//--------------------------------------------------------
//---------------------------------------------------------


//fetch then--------------------------
//fetch('https://jsonplaceholder.typicode.com/photos')
//.then (function(element){
     // return element.json()


    //}
   //)
//.then(function(data){
   //   console.log(data);

//}

//);



//---------------------------------------
//-----------------------





//(async function getApi() {

  // var element = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza') ;
//var reham = await element.json();
//var data=reham.recipes;
  //  var myText="";
   // for(var i=0; i<data.lenght,i++){
//var cartoona =`


<div class="col-md-4 mb-4 text-center ">
         <img src="${data[i].url}"style="height:350px" class='img-fluid'>
         <h2> ${data[i].title}</h2>
        <h5 ${data[i].publisher}></h5>
</div>
//`;
     //myText =myText+ cartoona;
//}
//document.querySelector(".test").innerHTML.HTML=myText;
//}

//)()