let man = {
  name: "Curtis",
  surname: "Calloway",
  height: 182,
  login: "CLWay2023",
  password: "Qwerty1234",
  amountOfMoney: 2000,
  address: {
    region: "Chechen Republic",
    city: "Grozny",
    street: "st.Umara Dimaeva, 14",
  },
};

let passwordCheck = prompt("Введите пароль: ");

if (passwordCheck === man.password) {
  console.log(
    `Добро пожаловать, ${man.name} ${man.surname}! Ваш логин: ${man.login}.`
  );
} else {
  console.log(
    `Ошибка! Указанный пароль "${passwordCheck}" неверный. Попробуйте еще раз.`
  );
}
