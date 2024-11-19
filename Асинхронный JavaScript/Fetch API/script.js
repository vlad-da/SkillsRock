//скрывает и показывает загрузчик
const setLoader = () => {
    document.querySelector('.loader').classList.toggle('loader-active');
}
// заполняет данными список
const setList = (arr) => {
   const list = document.querySelector('.list');
   arr.forEach((item) => {
        let div = document.createElement('div');
        div.classList.add('list__item');
        div.innerHTML = `
            <div class="list__name">${item.name}</div>
            <div class="list__mail">${item.email}</div>
            <img class="list__img" src="${item.img}" alt="img">
        `;
        list.append(div);
    }
    );

   list.classList.add('list-active');
}

// создаёт промис с задержкой для синхронных запросов
const delay = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));

const getDataSeries = async () => {
    const arr = [];
    setLoader();
    for (let index = 0; index < 10; index++) {
        await delay();
        const res = await fetch('https://randomuser.me/api/').then(response => response.json()).catch(() => {throw new Error("Что-то пошло не так")}
        );
        arr.push({name: res.results[0].name.first, email:res.results[0].email, img:  res.results[0].picture.medium});
    }
    setLoader();
    setList(arr);
};

getDataSeries();
