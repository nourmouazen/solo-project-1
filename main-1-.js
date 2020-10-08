// index-1-.html page //
  $("#log").click(function(){
 	var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/index-0-.html");
	   window.open(url,"_self");
  });

 $("#start-button").click(function(){
 	var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/home.html");
	   window.open(url,"_self");
   });

 // our community page //

 $("#addFeedback").click(function(){
 	var feedback = [];
 	var add = $("#feedback").val()
 	if(add === ""){
 		alert("You must write your feedback")
 	}else{
 		feedback.push($("#CommunityList").append("<li>"+add+"</li>"))
 		return feedback;
 	}
 }); 
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
       $("#select-Occasions").click(function(){
   	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/flower.html")
   	window.open(url,"_self")
   })
    //flower page
    	var colors = ["Red", "Pink", "White", "Yellow", "Mix"];
    	$("#select-Color").click(function(){
    		$("#FlowerSelect").hide();
    		if (colors[0] === $("#check-color").val()){
    			console.log($("#check-color").val())
    			console.log("hu")
    			$("#Red").append(
    				'<li>nour</li>')
    		}
    	})
  // $("#select-Color").click(function(){
  // 	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/flower.html")
  // 	window.open(url,"_self")
  //  })


// they didn't work
   // $("#log").click(function(){
   //  	var add = ("<button id="start-button"style="margin-left: 275px;margin-top:20px;font-size:50px">Let's start !</button>")
   //  })
   // $("#select-Occasions").click(function(){
   // 	var url =("file:///C:/Users/Toshiba/Desktop/solo-project-1/home2.html")
   // 	window.open(url,"_self")
   // })
   // //home button
   // $("#Flower").mouseout(function(){

   // })
   // function openSelect(){

   // }
   $("#colorRed").click(function(){
   	var url = "file:///C:/Users/Toshiba/Desktop/solo-project-1/redFlower.html"
   	window.open(url,"_self")
   })
   // red flower
   $(".addto").click(function(){
   	var url = "file:///C:/Users/Toshiba/Desktop/solo-project-1/packaging.html"
   	window.open(url,"_self")   	
   })

     $(".addtoo").click(function(){
   	var url = "file:///C:/Users/Toshiba/Desktop/solo-project-1/Gifts&Balloons.html"
   	window.open(url,"_self")   	
   })

   $(".addtooo").click(function(){
   	var url = "file:///C:/Users/Toshiba/Desktop/solo-project-1/the-gift.html"
   	window.open(url,"_self")   	
   })

   $("#addtoooo").click(function(){
   	var url = "file:///C:/Users/Toshiba/Desktop/solo-project-1/lassst.html"
   	window.open(url,"_self")   	
   })

   $("#Save").click(function(){
   	alert("Thank you for visiting us")
 	var url = ("file:///C:/Users/Toshiba/Desktop/solo-project-1/our-community.html");
	window.open(url,"_self");   	
   })