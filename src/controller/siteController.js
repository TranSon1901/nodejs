import connection from "../config/connetDB";

const getHomePage=(req,res)=>{
    connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
      if (err) throw err;
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
   connection.query(
      'INSERT INTO users(fullName,age,email,adress) values(? , ? , ?, ?)',
       [fullName,age,email,adress],
      function(err, results, fields) {
         if (err) throw err;
      })
      return res.redirect('/')
}
const deteleUsers=(req,res)=>{
    const {userId} = req.body
    connection.query(
      'DELETE FROM users WHERE id=?',[userId],
      function(err,results,fields){
         if(err) throw err
      }
      )
      return res.redirect('/')
}
const getEdit=(req,res)=>{
   const id = req.params.id
   connection.query(
      'SELECT * FROM `users` WHERE id = ?', [id],
      function(err, results, fields) {
          if(err) throw err
          console.log(results)
         return res.render('update', {data:results[0]})
       }
   )
}
const update=(req,res)=>{
   const {fullName,age,email,adress,userId}= req.body
   connection.query(
      'UPDATE users set fullName=?, age=?, email=?, adress=? where id = ?',
      [fullName,age,email,adress, userId],
      function(err,results,fields){
         if(err) throw err
      }
   )
   return res.redirect('/')

}
export {getAboutPage,getHomePage,getContactPage,createUsers,deteleUsers,getEdit,update}
