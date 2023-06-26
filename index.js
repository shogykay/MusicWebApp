$("#tracks").css("margin-bottom","8rem");

// function on(){
//     $("#listen ul").css("display","block");
// };

// function off(){
//     $("#listen ul").css("display","none");
// };
// if(css == "block"){
//     $("#listen a").click(function(){
//         alert("this is block so ill change it to none");
//         $("#listen ul").css('display','none');
//     });
// }
// else if(css == "none"){
//     alert("this is none so i will change it to block");
//     $("#listen a").click(function (){
//         $("#listen ul").css('display','block');
//     });
// };
var listen = $("#listen ul");

$("#listen a").click(
    function(){
        listen.addClass(".on");
        if(listen.hasClass(".on")){
            listen.removeClass(".on");
        };
            });



