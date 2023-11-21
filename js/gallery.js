function upDate(previewPic){
      var amir = document.getElementById('image');
      document.getElementById("image").innerHTML=previewPic.alt;
      document.getElementById("image").style.background="url("+previewPic.src+")" ;
   }
 
   function unDo(){
     document.getElementById("image").innerHTML= amir;
     document.getElementById("image").style.background="#8e68ff";  
   }



