$.fn.orderBy = function(el){
  $(this).find('li[data-id]').sort(function(a,b){
    return ($(b).data(el)) < ($(a).data(el)) ? 1 : -1;
  })
  .appendTo($(this));
}

$(document).ready(function(){
  $('.orderByDate').click(function(){
    $(".list-group").orderBy('date');
  });
  $('.orderById').click(function(){
    $(".list-group").orderBy('id');
  });
  $('.orderByName').click(function(){
    $(".list-group").orderBy('name');
  });
});
