$(document).ready(function(){

  var cont = 1;
  var a = ".frames > li:first-child";
  var b = ".frames > li:last-child";
  $( b ).css("z-index","-1");
  estado_cero(a,b);

  $("a#previous_frame").on('click',function(){ 
    cont -=1;
    console.log(cont);

    console.log("::::::" + cont);

    if (cont == 0){
      $( b ).css("z-index","-1");
      mueve_Rev_1(a,b);
      $( a ).css("opacity","1");
    }else if (cont == 2 || cont == -1){
      mueve_Rev_2(a,b);
    }else if (cont == -2){
      mueve_Rev_3(a,b);
      cont = 1;
    }
  });

  $("a#next_frame").on('click',function(){ 
//next
cont += 1;
console.log(cont);
console.log("::::::" + cont);
if (cont == 2){
  mueve_1(a,b);
}else if (cont == 3 || cont == 0){
  mueve_2(a,b);
  cont = 0;
}else if (cont == 1){
  mueve_3(a,b);
}
});

});

function mueve_1(a,b){
  $( a ).css("opacity","1");
  $( b ).css("opacity","0");
  $( a ).animate({ left:-620 });
  $( a ).next().animate({ left:-620 });
  $( b ).animate({ left:-620 });
}

function mueve_2(a,b){
  $( b ).css("opacity","1");
  $( a ).next().css("opacity","0");

  $( a ).animate({ left:620 });
  $( a ).next().animate({ left:-1240 });
  $( a ).next().animate({ left:620 });
  $( a ).next().css("opacity","1");
  $( b ).animate({ left:-1240 });
  $( a ).next().css("z-index","-1");
  $( a ).css("z-index","-1");
}

function mueve_3(a,b){
  $( b ).animate({ left:-1860 });
  $( a ).animate({ left:0 });
  $( a ).next().animate({ left:0 });
  $( a ).next().css("z-index","1");
}
function estado_cero(a,b){
  $( b ).animate({left:"-100%"});
  $( a ).animate({left:0});
  $( a ).next().animate({left:0});
}
/*****************************************/
function mueve_Rev_1(a,b){
  $( a ).next().css("opacity","0");
  $( b ).animate({ left:"-66.66666%"});
  $( a ).animate({ left:620 });
  $( a ).next().animate({ left:"-66.66666%" });
  $( a ).css("opacity","0");
}

function mueve_Rev_2(a,b){
  $( a ).next().css("opacity","1");
  $( a ).next().css("left","-1240px");
  $( a ).next().animate({ left:-620 });
  $( b ).animate({ left:-620 });
  $( a ).animate({ left:"-32.33333%" });
  $( a ).css("opacity","1");
}

function mueve_Rev_3(a,b){
  $( b ).css("opacity","0");
  $( a ).animate({ left:0 });
  $( a ).next().animate({ left:0 }); 
  $( b ).animate({ left:"-100%" });
  $( a ).next().css("opacity","1");
  $( b ).css("opacity","1");
}