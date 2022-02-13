
    // Поучаю DOM элементы.
    const body = document.querySelector('body');
    const books = document.querySelectorAll('.book');
    const linkBook3 = books[4].querySelector('a');
    const listItemsBook2 = books[0].querySelectorAll('li'); // Получил главы со второй книги
    const listItemsBook5 = books[5].querySelectorAll('li'); // Получил главы с пятой книги
    const listBook6 = books[2].querySelector('ul');


    const advertising = document.querySelector('.adv'); // Реклама.

    // Отработка функций

    // Изменение растановки элементов в правильном порядке

    books[1].after(books[0]);
    books[0].after(books[4]);
    books[4].after(books[3]);
    books[3].after(books[5]);

    // Изменение background у BODY
    body.style.backgroundImage = 'url("./image/adv.jpg")';

    // Изменение текста в третей книге
    linkBook3.textContent = "Книга 3. this и Прототипы Объектов ";


    // Удаление рекламы

    advertising.remove();

    // Востановить порядок глав во второй книге.
    
    listItemsBook2[1].after(listItemsBook2[3]);
    listItemsBook2[9].after(listItemsBook2[2]);
    listItemsBook2[3].after(listItemsBook2[6]);
    listItemsBook2[4].after(listItemsBook2[8]);
    listItemsBook2[8].after(listItemsBook2[4]);
    listItemsBook2[6].after(listItemsBook2[8]);


    // Востановить порядок глав в пятой книге.
    listItemsBook5[1].after(listItemsBook5[9]);

    listItemsBook5[4].after(listItemsBook5[2]);
    listItemsBook5[7].after(listItemsBook5[5]);
    

    //в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

    let chapter8 = document.createElement('li');
    chapter8.textContent = "Глава 8: За пределами ES6";
    listBook6.append(chapter8);




    // Вывод консоли
    console.log(body);
    console.log(books,"Список Книг");
    console.log(linkBook3.textContent);
    console.log(listItemsBook2 ,"Список глав в книге 2");
    console.log(listItemsBook5 ,"Список глав в книге 5");
    console.log(listBook6 ,"Список глав в книге 6");


    
    console.log(chapter8 ,"Новая 8-я глава");

    


    


    


    
