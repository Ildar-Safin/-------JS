//1 Задание

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const transformedUsers = users.map(user => ({
      id: user.id,
      username: user.username
    }));
    
    console.log(transformedUsers);
  })
  .catch(error => console.error('Error fetching users:', error));

 //2 Задание 
 
 fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const emails = users.map(user => user.email);
    
    console.log(emails);
  })
  .catch(error => console.error('Error fetching users:', error));

//3 Задание

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const user = users.find(user => user.id === 9);
    
    if (user) {
      console.log(user);
    } else {
      console.log('Пользователь с id 9 не найден');
    }
  })
  .catch(error => console.error('Error fetching users:', error));

//4 Задание

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const usersInLebsackbury = users.filter(user => user.address.city === 'Lebsackbury');
    
    console.log(usersInLebsackbury);
  })
  .catch(error => console.error('Error fetching users:', error));
  
//5 Задание

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Извлекаем первые 5 пользователей
    const firstFiveUsers = users.slice(0, 5);
    
    console.log(firstFiveUsers);
  })
  .catch(error => console.error('Error fetching users:', error));

//6 Задание 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Меняем порядок пользователей на обратный
    const reversedUsers = users.reverse();
    
    console.log(reversedUsers);
  })
  .catch(error => console.error('Error fetching users:', error));

//7 Задание 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const totalUsers = users.length;
    
    console.log(`Всего пользователей: ${totalUsers}`);
  })
  .catch(error => console.error('Error fetching users:', error));

//8 Задание 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const websitesWithCom = users
      .filter(user => user.website.includes('.com'))  // Проверяем наличие '.com'
      .map(user => user.website);
    
    console.log(websitesWithCom);
  })
  .catch(error => console.error('Error fetching users:', error));

//9 Задание

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const longUsernames = users
      .filter(user => user.username.length > 12)
      .map(user => user.username);
    
    console.log(longUsernames);
  })
  .catch(error => console.error('Error fetching users:', error));

  //10 Задание 
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const lowerCaseUsernames = users
      .map(user => user.username.toLowerCase());  // Приводим каждый username к нижнему регистру
    
    console.log(lowerCaseUsernames);
  })
  .catch(error => console.error('Error fetching users:', error));
