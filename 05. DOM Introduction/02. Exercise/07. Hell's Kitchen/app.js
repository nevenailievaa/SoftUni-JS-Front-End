function solve() {
   document.querySelector('#btnSend').addEventListener('click', () => {
     let inputArray = JSON.parse(document.querySelector('textarea').value);
     let restaurants = {};
 
     inputArray.forEach(info => {
       const [restaurant, workers] = info.split(' - ');
       restaurants[restaurant] = restaurants[restaurant] || [];
       workers.split(', ').forEach(worker => {
         const [name, wage] = worker.split(' ');
         restaurants[restaurant].push([name, Number(wage)]);
       });
     });
 
     const getAverageWage = staff => staff.reduce((sum, [, wage]) => sum + wage, 0) / staff.length;
     const bestRestaurant = Object.entries(restaurants)
       .map(([name, staff]) => [name, staff, getAverageWage(staff)])
       .sort(([, , avgA], [, , avgB]) => avgB - avgA)[0];
 
     const [bestName, bestStaff, bestAvgWage] = bestRestaurant;
     bestStaff.sort(([, wageA], [, wageB]) => wageB - wageA);
 
     document.querySelector('#bestRestaurant p').textContent =
       `Name: ${bestName} Average Salary: ${bestAvgWage.toFixed(2)} Best Salary: ${bestStaff[0][1].toFixed(2)}`;
     document.querySelector('#workers p').textContent =
       bestStaff.map(([name, wage]) => `Name: ${name} With Salary: ${wage}`).join(' ');
   });
 }
 