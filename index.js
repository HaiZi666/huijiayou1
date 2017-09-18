require(["js/config"], function(){
	require(["jquery","swiper","jquery ui"], function($,swiper,jqueryui){
		$(function(){
			
			/*轮播图*/
			var mySwiper = new Swiper('.swiper-container', {

			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next',
			autoplay: 2000,
			speed: 1000,
			autoplayStopOnLast: false,
			pagination: '.swiper-pagination',
			paginationClickable: true
			

		     });
		
		
		/* 前两行鼠标点击等特效*/
		 
		$("#dluin ul li a").hover(
			function(){
		 
		     $(this).css({"color":"red","text-decoration":"underline"});
				
		    },
		    function(){
		 
		     $(this).css({"color":"#666","text-decoration":"none"});
				
		    },
		
		);
		
		/*搜索框下面的导航特效*/
		
		$("#search ul li a").hover(
			function(){
		 
		     $(this).css({"color":"red"});
				
		    },
		    function(){
		 
		     $(this).css({"color":"#666"});
				
		    },
		
		);
		
		
		$("#logonav ul li").hover(
			function(){
		 
		     $(this).css({"background-color":"pink"});
				
		    },
		    function(){
		 
		     $(this).css({"background-color":"white"});
				
		    },
		
		);
		
		
		$(".sortnav ul li").hover(
			function(){
		 
		     $(this).css({"background-color":"red"});
				
		    },
		    function(){
		 
		     $(this).css({"background-color":"white"});
				
		    },
		
		);
		
		$("#gwc").hover(
			function(){
		 
		     $(this).css({"border-color":"red"});
				
		    },
		    function(){
		 
		     $(this).css({"border-color":"#e5e5e5"});
				
		    },
		
		);
		
		/*搜索框ajax请求数据*/
		  $("#autocomplete").autocomplete({
		    	source : function( request, response ) {
			        $.ajax({
			          	url: "http://suggestion.baidu.com?wd="+request.term,
			          	dataType: "jsonp",
			          	jsonp: "cb",
			          	success: function( data ) {
			            	response(data.s);
			          	}
			        });
		      	},
		      /*	select : function( event, ui ){
		      		console.log(ui.item.value)
		      	}*/
		    });
		    
		
		/*出现二维码*/
		
		$("#weixin a").hover(
			function  () {
				$(".weixin22").css("display","block");
			},
			function  () {
				$(".weixin22").css("display","none");
			}
		)
		
		$("#sj a").hover(
			function  () {
				$(".sj22").css("display","block");
			},
			function  () {
				$(".sj22").css("display","none");
			}
		);
		
		
		
		
		/*+++++登录页面+++++++*/
		 /*选择登录方式*/
		$(".loginhead a i").click(function  () {
			$(this).css("border-bottom","2px solid #dc0f50");
			$(this).parent().siblings().children().css("border-bottom","0");
		   
		    if($(this).attr("class")=="moren"){
		    	console.log('ok');
		       $(".normaL").css("display","block");
		       $(".qiuck").css("display","none");
		    }else{
		    	$(".normaL").css("display","none");
		       $(".qiuck").css("display","block");
		    }
		
		
		});
		
		
		/*+++++注册页面+++++++*/
		$("#sjhao").blur(function  () {
			if(!(/^1\d{12}/.test($("#sjhao").val()))){
				
			  $(".errosj").css("display","block");
		    } else{
		      $(".errosj").css("display","none");

		    }
		    
		})
		
		$("#password").blur(function  () {
			
			if(!(/[^\d].{5,16}/.test($("#password").val()))){
				
			  $(".erropw").css("display","block");
		    } else{
		      $(".erropw").css("display","none");
		    }
		})
		
		
		$("#passwordre").blur(function  () {
			
			if(!($("#passwordre").val()==$("#password").val())){
				
			  $(".erropwt").css("display","block");
		    } else{
		      $(".erropwt").css("display","none");
		    }
		})
		
		
		
		
		
		$("#sjhao").focus(function  (){
			
			  $(".errosj").css("display","none");
		    
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			
		});
	});
	
	
})
