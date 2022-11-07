import connection from "../config/connetDB";
const getHomePage=(req,res)=>{
   // connection.query(
   //    'SELECT * FROM `users`',
   //    function(err, results, fields) {
   //      console.log(results); // results contains rows returned by server
   //      return res.send(JSON.stringify(results));
   //    }
   //  );
   return res.render('home')
}
const getAboutPage=(req,res)=>{
   return res.render('about')
}
const getContactPage=(req,res)=>{
   return res.render('contact')
}
export {getAboutPage,getHomePage,getContactPage}
