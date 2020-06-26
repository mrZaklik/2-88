let alert1 = function(message, sec, color) {
    if (!message || message.length == 0) return;

    let parent = document.querySelector('.alert_list');

    if (!parent) {
        parent = document.createElement('div');
        parent.classList.add('.alert_list');
    }

    let element = document.createElement('div');
    element.classList.add('alert');

    element.innerHTML = message;

    parent.appendChild(element);
    document.body.appendChild(parent);

    if (sec > 0) setTimeout(function() {
        element.remove();
    }, sec * 1000);

    if (color) {
        element.classList.add(color);
    }
};

alert1('123', 5);
alert1('hgfhg', 10);

setTimeout(function(){
}, 2000); 


// Задание 2. Вызов по ссылке. Над стилями сильно не заморачивался, кое где цает поменял для разнообразия.
if (window.location.search.indexOf('form-error') > -1){
    alert1('error', 0, 'error-color');
}

if (window.location.search.indexOf('form-sent') > -1){
    alert1('alert', 0, 'alert-color');
}

if (window.location.search.indexOf('hello') > -1){
    alert1('Добро пожаловать на сайт!');
}

if (window.location.search.indexOf('msg-sent') > -1){
    alert1('Вам письмо!');
}