// sub-menu
$(".menu nav > .gnb > li:nth-child(1)").mouseenter(function(){
  $(".sub1").stop().slideDown();
});
$(".menu nav > .gnb > li:nth-child(1)").mouseleave(function(){
  $(".sub1").stop().slideUp();
});

$(".menu nav > .gnb > li:nth-child(2)").mouseenter(function(){
  $(".sub2").stop().slideDown();
});
$(".menu nav > .gnb > li:nth-child(2)").mouseleave(function(){
  $(".sub2").stop().slideUp();
});

$(".menu nav > .gnb > li:nth-child(3)").mouseenter(function(){
  $(".sub3").stop().slideDown();
});
$(".menu nav > .gnb > li:nth-child(3)").mouseleave(function(){
  $(".sub3").stop().slideUp();
});

$(".menu nav > .gnb > li:nth-child(4)").mouseenter(function(){
  $(".sub4").stop().slideDown();
});
$(".menu nav > .gnb > li:nth-child(4)").mouseleave(function(){
  $(".sub4").stop().slideUp();
});

$(".menu nav > .gnb > li:nth-child(5)").mouseenter(function(){
  $(".sub5").stop().slideDown();
});
$(".menu nav > .gnb > li:nth-child(5)").mouseleave(function(){
  $(".sub5").stop().slideUp();
});

$(".menu nav > .gnb > li:nth-child(6)").mouseenter(function(){
  $(".sub6").stop().slideDown();
});
$(".menu nav > .gnb > li:nth-child(6)").mouseleave(function(){
  $(".sub6").stop().slideUp();
});


// bxslider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'horizontal', //슬라이드방향 
    auto : true, //자동슬라이드
    autoHover: false, //마우스 hover하면 슬라이드 정지
    controls: true, // prev/next 버튼 노출 여부
    speed: 1000, //슬라이드 속도
    infiniteLoop: true, //마지막에서 첫번째로 전환
    pager: true, //페이저버튼 노출 여부
    minSlides: 1, //최소슬라이드 노출 개수
  });
});