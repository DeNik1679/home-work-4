let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
   ];

    users.map((element) => {
    element.admin = false ;
    if(element.name == 'Маша') {
        element.admin = true;
        
    }
})


   console.log(users);
   