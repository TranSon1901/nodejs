import connection from "../config/connetDB";

const getHomePage=(req,res)=>{
   const data=[]
    connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
      return res.render('home',{data:results})
   }
);
}
const getAboutPage=(req,res)=>{
   return res.render('about')
}
const getContactPage=(req,res)=>{
   return res.render('contact')
}
const createUsers=(req,res)=>{
   const {fullName,age,email,adress}= req.body
   console.log(req.body)
   connection.query(
      'INSERT INTO users(fullName,age,email,adress) values(? , ? , ?, ?)',
       [fullName,age,email,adress],
      function(err, results, fields) {
         console.log(results)
      }
      )
      return res.redirect('/')
   
}
export {getAboutPage,getHomePage,getContactPage,createUsers}
