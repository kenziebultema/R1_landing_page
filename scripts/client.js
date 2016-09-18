$(document).ready(function(){

    $('.form').on('submit', takeValues);

    var countriesToTop = ["US", "UK", "CA", "IN", "NL", "AU", "ZA", "FR", "DE", "SG", "SE", "BR"];

    for(var i = 0; i < countriesToTop.length; i++){
        var countries = countriesToTop[i];
        $('.country option[value=' + countries).insertBefore('.country option[value="AF"]');
    }

    function takeValues(event){
        event.preventDefault();

        var values = {};

        var c = document.getElementById('country');
        var country = c.options[c.selectedIndex].text;

        var s = document.getElementById('state');
        var state = s.options[s.selectedIndex].text;

        $.each($('.form').serializeArray(), function(i, field){
            values[field.name] = field.value;
            values.country = country;
            values.state = state;
        });

        printValues(values);
    }

    function printValues(values){
        $('.info-container').append('<span class="form-info col-lg-12 col-md-12 col-sm-12 col-xs-12"></span>');
        var $el = $('.info-container').children().last();

        $el.append('<h5>Name:</h5><p> ' + values.first_name + ' ' + values.last_name + '</p>');
        $el.append('<h5>Email Address:</h5><p> ' + values.email_address + '</p>');
        $el.append('<h5>Company:</h5><p> ' + values.company + '</p>');
        $el.append('<h5>Title:</h5><p> ' + values.title + '</p>');
        $el.append('<h5>Country:</h5><p> ' + values.country + '</p>');
        $el.append('<h5>State:</h5><p> ' + values.state + '</p>');
        $el.append('<h5>Additional Comments:</h5><p> ' + values.comments + '</p>');
    }
});
