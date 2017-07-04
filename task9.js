var user = {
    name: 'Nika',
    surname: 'Podoroha',
    tel: '11-22-33'
};
var user1 = {
    name: 'Bohdan',
    surname: 'Valentii',
    tel: '12-22-34'
};
var user2 = {
    name: 'Alina',
    surname: 'Bendik',
    tel: '12-22-34'
};

var phoneBook = {
    list: [],
    findByTel: function (tel) {
        var findedUser = this.list.find(function (element) {
            return element.tel === tel;
        });
        return findedUser;
    }, // метод который будет возвращать пользователя по номеру тел.

    updateUserByTel: function (tel) {
        if( phoneBook.findByTel(user.tel) != undefined)  {
            user.name = 'Olya';
        };
        return user;
    },// метод который будет обновлять пользователя по номеру телефона

    addUser: function (user) {
        if( phoneBook.findByTel(user.tel) === undefined) {
            this.list.push(user);
            return 'Added';
        }
        else return 'User with this tel. number already exists';
    }, // метод для добавления юзеров

    getUser: function (tel) {
        var userIndex = this.list.find(function (element) {
            return element.tel === tel;
        });
        return(userIndex);
    }, // метод который будет выводить информацию про юзера по номеру телефона

    deleteUser: function (tel) {
        var deleteUser =  this.list.find(function (element) {
            return element.tel === tel;
        });
        this.list.splice(deleteUser, 1);
        return 'Deleted';
    } // сами догадайтесь что он будет делать
};
