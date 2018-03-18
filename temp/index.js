var prodArr = [{
    name: '',
    img: '',
    price: '',
    isAvailable: true,
    isLiked: false,
    id: '1'
}, {
    name: '',
    img: '',
    price: '',
    isAvailable: false,
    isLiked: true,
    id: '2'
}, {
    name: '',
    img: '',
    price: '',
    isAvailable: true,
    isLiked: false,
    id: '3'
}];

function populate() {
    var dashboardElem = document.querySelector('.dashboard');
    prodArr.forEach(function(item) {
        var tileElem = '';
        tileElem += '<div class="tile">';

        tileElem += '</div>';
        dashboardElem.appendChild(tileElem);
    });
}