// index-1-.html page //
  $("#log").click(function(){
  	 $("#start-button").show(1000);
  });

 $("#start-button").click(function(){
 	var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/home.html");
	   window.open(url,"_self");
   });

 // our community page //
 //it doesn't work yet
/* $("#addFeedback").click(function(){
 	console.log("i work")
 	var feedback = [];
 	var add = $("#feedback").val()
 	if(add === ""){
 		alert("You must write your feedback")
 	}else{
 		$("#CommunityList").append(add)
 		add.map(function(){
 			return this.id;
 			.get()
            .join();
 		})
 	}
 }); */
//// BACK ///
 //back to home
 $("#home").click(function(){
 	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/home.html");
 	window.open(url,"_self");
 })

 //go to about us 
  $("#about-us").click(function(){
  	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/about-us.html");
  	window.open(url,"_self");
  })

  //go to our-community
   $("#our-community").click(function(){
   	var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/our-community.html");
   	window.open(url,"_self");
   })
   //back to flower page
    $("#Flower").click(function(){
     var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/flower.html")
     window.open(url,"_self")
    })
    //back to Gifts & Balloons
    $("#extra").click(function(){
     var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/Gifts&Balloons.html")
     window.open(url,"_self")
    })
    $("#log").click(function(){
    	var add = ("<button id="start-button"style="margin-left: 275px;margin-top:20px;font-size:50px">Let's start !</button>")
    })

   $("#select-Occasions").click(function(){
   	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/home2.html")
   	window.open(url,"_self")
   })
   //home button
   $("#Flower").mouseout(function(){

   })
   function openSelect(){

   }