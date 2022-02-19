// Урок 12 Обработка событий. Практика.
"use strict";

// ссылки не элементы формы:
// - название проекта
const title = document.getElementsByTagName('h1')[0];
// - типы экранов для расчета, максимальное количество вариатнов, 
const screens = [...document.querySelectorAll('.screen')];
// - максимальное количество вариатнов типы экранов (0-приглашающий)
const maxScreens = screens[0].querySelector('select').length - 1;
// - шаблон пустого типа экрана
let templateScreen;

// - кнопка "+" под выпадающим списком
const buttonPlus = document.querySelector('.screen-btn');
// - кнопка "-" под выпадающим списком
let buttonMinus;

//  - дополнительные параметры: элемнеты-проценты и элемнеты-числa
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

// - ранжированный ввод процента отката 
const inputRollback = document.querySelector('.rollback input');
// - елемент отображения текущего значение процента отката 
const inputRollbackValue = document.querySelector('.rollback .range-value');

// - кнопка "Рассчитать"
const startBtn = document.getElementsByClassName('handler_btn')[0];

// - елементы отображения итогов
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

// калькуляция разработки сайта
const appData = {

  // типы экранов в проекте и их цены
  screens: [],
  // максимальное число одного типа экрана
  maxTypeScreens: 100000,

  // дополнительные услуги: проценты и их цены
  servicesPercent: {},
  servicesNumber: {},

  // стоимость работ по верстке экранов
  screenPrice: 0,
  // количество экранов к верстке
  screenCount: 0,

  // итого стоимость дополнительных услуг (итоговый % и сумма)
  servicePricesPercent: 0,
  servicePricesNumber: 0,

  // итоговая стоимость работы
  fullPrice: 0,
  // % отката посреднику
  rollback: 0,
  // доход разработчика
  servicePercentPrice: 0,

  // инициализация
  init: () => {
    // устанавливаем начальные настройки страницы
    appData.initPage();

    // добавить дополнительный тип экрана к расчету по нажатию кнопки "+"
    buttonPlus.addEventListener('click', appData.addScreenBlock);
    // удалить последний дополнительный тип экрана к расчету по нажатию кнопки "-"
    buttonMinus.addEventListener('click', appData.delScreenBlock);
    // выбор процента отката
    inputRollback.addEventListener('input', appData.getRollback);

  },

  // начальные настройки страницы
  initPage: () => {
    const input = screens[0].querySelector('input'),
      select = screens[0].querySelector('select');

    // устанавка названия страницы 
    document.title = title.textContent;

    // напоминание заполняющему
    document.querySelector('h3').innerHTML +=
      '<br /><small><i>поля тип и количество экранов обязательны для заполнения' +
      '<br />количество экранов не более ' + appData.maxTypeScreens + '</i></small>';

    // вносим изменения в настройки полей типа экранов    
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', appData.maxTypeScreens + '');
    input.setAttribute('max', appData.maxTypeScreens + '');
    input.setAttribute('onchange', 'appData.correctScreens()');
    select.setAttribute('onchange', 'appData.correctScreens()');
    [...document.querySelectorAll('.element input.custom-checkbox')].forEach((elem) => {
      elem.setAttribute('onchange', 'appData.stop()');
    });

    // шаблон пустого типа экрана
    templateScreen = screens[0].cloneNode(true);

    // добавим кнопочку "-" под выпадающим списком
    buttonMinus = buttonPlus.cloneNode();
    buttonMinus.textContent = '-';
    buttonMinus.style.marginLeft = '5px';
    buttonPlus.after(buttonMinus);

    // состояние кнопочек изменения количества типов экрана
    appData.statusScreensButton();
  },

  // контроль корректости заполнения типов экрана
  correctScreens: () => {
    // наличие незаполненных (некорректно заполненных) полей
    let isCorrect = true;

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const value = +input.value;

      select.style.backgroundColor = '';
      input.style.backgroundColor = '';
      if (!select.selectedIndex) {
        select.style.backgroundColor = 'MistyRose';
        isCorrect = false;
      }
      if (!value || value < 1 || value > appData.maxTypeScreens) {
        input.style.backgroundColor = 'MistyRose';
        isCorrect = false;
      }
    });

    startBtn.removeEventListener('click', appData.start);
    if (isCorrect) {
      startBtn.style.opacity = '';
      startBtn.style.cursor = '';
      // расчет по нажатию кнопки "Рассчитать"
      startBtn.addEventListener('click', appData.start);
    } else {
      startBtn.style.opacity = '0.5';
      startBtn.style.cursor = 'default';
    }
    // очистка результатов расчета    
    appData.stop();
  },

  // добавляем дополнительный тип экрана к расчету
  addScreenBlock: () => {
    let cloneScreen;

    if (screens.length < maxScreens) {
      // - копия первого элемента коллекции screens
      cloneScreen = templateScreen.cloneNode(true);
      // вставляем клон после последнего элемента в screens     
      screens[screens.length - 1].after(cloneScreen);
      // SGVarr  добавляем в список для правильного отображения и вставки - может позже будут добавлять? 
      screens.push(cloneScreen);
      // состояние кнопочек 
      appData.statusScreensButton();
    }
  },

  // удаляем последний дополнительный тип экрана к расчету
  delScreenBlock: () => {
    if (screens.length > 1) {
      screens[screens.length - 1].remove();
      screens.length--;
      // состояние кнопочек 
      appData.statusScreensButton();
    }
  },

  // состояние кнопок изменения количества типа экрана
  statusScreensButton: () => {
    switch (screens.length) {
      case 1:
        // декативируем кнопку удаления типов экрана
        buttonMinus.style.opacity = '0.5';
        break;
      case maxScreens:
        // декативируем кнопку добавления типов экрана
        buttonPlus.style.opacity = '0.5';
        break;
      default:
        buttonPlus.style.opacity = '1';
        buttonMinus.style.opacity = '1';
    }

    // контроль корректости заполнения типов экрана
    appData.correctScreens();
  },

  // выбор процента отката
  getRollback: (event) => {
    appData.rollback = event.target.value;
    // отображения текущего значение процента отката 
    appData.showInputRollback();

    // при произведенном расчете меняем откат 
    if (appData.fullPrice) {
      appData.addPrices();
      appData.showResult();
    }
  },

  // отображения текущего значение процента отката 
  showInputRollback: () => {
    // елемент отображения текущего значение процента отката 
    inputRollbackValue.textContent = appData.rollback + '%';
  },

  // запуск расчета
  start: () => {
    // перечень типов экранов для расчета
    appData.addScreens();
    // значения дополнительных параметров для расчета
    appData.addServices();
    // расчет итоговых стоимостей экранов, дополнительных услуг, доход разработчика
    appData.addPrices();
    // вывод результатов расчетов на экран
    appData.showResult();
  },

  // считываем перечень типов экрана для расчета из верстки
  addScreens: () => {
    // очистим перед обновлением
    appData.screens.length = 0;

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      // название типа (из списка типов по индексу выбранного типа select.selectedIndex)
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  // считываем дополнительные параметры для расчета 
  addServices: () => {
    const add = (item, typeValue) => {
      // флажок (чекбокс) учитывать или нет параметр в расчетах
      const check = item.querySelector('input[type=checkbox]');
      // название и значение параметра
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      // запоминаем значения по выбранным дополнительным услугам
      appData['services' + typeValue][label.textContent] = (check.checked) ? +input.value : 0;
    };

    // значения-проценты
    otherItemsPercent.forEach((item) => { add(item, 'Percent'); });
    // значения-числa    
    otherItemsNumber.forEach((item) => { add(item, 'Number'); });
  },

  // расчет итоговых стоимостей экранов, дополнительных услуг и доход разработчика
  addPrices: () => {
    // итоговая стоимость экранов
    appData.screenPrice = appData.screens.reduce((sum, screen) => sum + screen.price, 0);
    // итоговое количество экранов
    appData.screenCount = appData.screens.reduce((quantity, screen) => quantity + screen.count, 0);

    // итоговая стоимость дополнительных услуг заданных в процентах    
    appData.servicePricesPercent = 0;
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * appData.servicesPercent[key] / 100;
    }

    // итоговая стоимость дополнительных услуг заданных в суммах    
    appData.servicePricesNumber = 0;
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    // итоговая стоимость работы
    appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;

    // расчет итоговой стоимости за вычетом отката
    // (итоговая стоимость уменьшенная на сумму отката посреднику, округленная в большую сторону )
    appData.servicePercentPrice = Math.ceil(appData.fullPrice * (100 - appData.rollback) / 100);
  },

  // отмена расчета
  stop: () => {
    appData.clear();
    appData.showResult();
  },

  // очистка расчета
  clear: () => {
    appData.screens.length = 0;
    appData.servicesPercent.length = 0;
    appData.servicesNumber.length = 0;
    appData.screenPrice = 0;
    appData.screenCount = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
  },

  // вывод результатов расчетов на экран
  showResult: () => {
    // - елементы отображения итогов
    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  }

};

// калькулирование стоимости разработки сайта
appData.init();