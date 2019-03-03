/*
const data = [
    {
        username: "bob",
        kudos: "kudos to you!",
        toname: "george"
    },
    {
        username: "bob1",
        kudos: "kudos1 to you!",
        toname: "george1"
    },
    {
        username: "bob2",
        kudos: "kudos2 to you!",
        toname: "george2"
    }
]
*/
const getKudos = () => {
    $.get(`api/kudos`)
        .then((data) => {
            render(data)
        })
}

const getUsers = () => { //for dropdown
    $.get(`api/kudos`)
        .then((data) => {
            console.log(data)
            for (i = 0; i < data.length; i++) {
                $('#userOpt')
                    .append(`<option value='${data[i].username}'>${data[i].username}</option>`) //i know this is wrong
                $('#toOpt')
                    .append(`<option value='${data[i].toname}'>${data[i].toname}</option>`) //also wrong
            }
        })
}

const sendKudos = (e) => {
    e.preventDefault()
    $(`#error`).hide
    if ($('#userOpt').val() && $('#toOpt').val()) {
        const kudos = {
            kudos: $('#kudo').val().trim(),
            username: $('#userOpt').val(),
            toname: $('#toOpt').val()
        }
        $.post(`api/kudos`, kudos)
            .then(() => {
                $('#kudos').val('');
                $('#userOpt').val('');
                $('#toOpt').val('');
                getKudos()
            })
            .fail(() => {
                $(`#error`).show()
            })
    }
}

const render = function (data) {
    $('#kudos').empty();
    $('#kudos').append(`
    <h2>Kudos</h2>
    `)
    for (let i = 0; i < data.length; i++) {
        $(`#kudos`).append(`
    <div class="card">
        <h4>To: ${data[i].toname}</h4>
        <div class="card-body">
        <h5>${data[i].kudos}</h5>
        </div>
        <div class="card-footer">
        <h5>From: ${data[i].username}</h5>
        <div>
      </div>
    `)
    }
}

const onClick = function (e) {
    e.preventDefault()
    $('#myModal').modal('toggle')
}


$('#error').hide()

getKudos()
getUsers()

$('#kudosSend').on('click', sendKudos)
$('#submit').on('click', onClick)
