$.getJSON('https://proto.io/en/jobs/candidate-questions/intern-data.json', function (json) {
    var screenArray = [];
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        var item = json[key];
        screenArray.push({
          id: item.id,
          name: item.Name
        });
      }
    }

$.each(screenArray, function(index, value) {
  $('#list').append('<li><a class="text-edit">'+value.name+'</a><span class="edit ion-edit" ></span><span class="copy ion-ios-copy" ></span><span class="delete ion-trash-a"</span></li>')
});

$('body').on('click','.copy',function(){
  var li_count = $('#list li').length;
  if(li_count<10){
    $('#list').append('<li><a class="text-edit">'+$(this).parent().text()+'</a><span class="edit ion-edit" ></span><span class="copy ion-ios-copy" ></span><span class="delete ion-trash-a"</span></li>');
  }else{
    return false;
  }
});

$('body').on('dblclick','.text-edit',function() {
  var text= $(this).text();
  var input= ('<input autofocus placeholder="'+text+'"</input>');
  $(this).replaceWith(input);

  $('input').on('keyup',function(e){
    $('input').attr('maxlength','12');
    if(e.which==13){
      var text2=$(this).val();
      var newtext=$(this).replaceWith('<a class="text-edit">'+text2+'</a>');
      $(this).prev('input').replaceWith(newtext);
    }
  });
});

$('body').on('click','.edit',function() {
  var text= $(this).prev('a').text();
  var input= ('<input autofocus placeholder="'+text+'" </input>');
  $(this).prev('a').replaceWith(input);

  $('input').on('keyup',function(e){
    $('input').attr('maxlength','12');
    if(e.which==13){
      var text2=$(this).val();
      var newtext=$(this).replaceWith('<a class="text-edit">'+text2+'</a>');
      $(this).prev('input').replaceWith(newtext);
    }
  });
});

$('body').on('click','.delete',function(){
  $(this).parent().remove();
});


});
