// 사용자 이름 눌렀을 때 댓글 로딩
[].forEach.call(document.querySelector('#user-list tr'), function (el){
    el.addEventListener('click', function () {
        var id = el.querySelector('td').textContent;
        getComment(id);
    });
});
// 사용자 로딩
function getUser() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200){
            var users = JSON.parse(xhr.responseText);
            console.log(users);
            var tbody = document.querySelector('#user-list tbody');
            tbody.innerHTML ='';
            users.map(function(user) {
                var row = document
            })
        }
    }
}