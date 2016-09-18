$(document).ready(function(){

    $('.form').on('submit', takeValues);

    var countriesToTop = ["US", "UK", "CA", "IN", "NL", "AU", "ZA", "FR", "DE", "SG", "SE", "BR"];

    for(var i = 0; i < countriesToTop.length; i++){
        var countries = countriesToTop[i];
        $('.country option[value=' + countries).insertBefore('.country option[value="AF"]');
    }

    function takeValues(event){
        event.preventDefault();
        console.log('submit button works');

        var values = {};

        var c = document.getElementById('country');
        var country = c.options[c.selectedIndex].text;

        var s = document.getElementById('state');
        var state = s.options[s.selectedIndex].text;

        console.log(country);

        $.each($('.form').serializeArray(), function(i, field){
            values[field.name] = field.value;
            values.country = country;
            values.state = state;
        });

        console.log(values);
        printValues(values);
    }

    function printValues(values){
        $('.info-container').append('<span class="form-info col-lg-12 col-md-12 col-sm-12 col-xs-12"></span>');
        var $el = $('.info-container').children().last();

        $el.append('<p>Name: ' + values.first_name + ' ' + values.last_name + '</p>');
        $el.append('<p>Email Address: ' + values.email_address + '</p>');
        $el.append('<p>Company: ' + values.company + '</p>');
        $el.append('<p>Title: ' + values.title + '</p>');
        $el.append('<p>Country: ' + values.country + '</p>');
        $el.append('<p>State: ' + values.state + '</p>');
        $el.append('<p>Additional Comments: ' + values.comments + '</p>');
    }
});
