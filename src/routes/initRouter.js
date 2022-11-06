import express from 'express'
 const router=express.Router()

 const inItRouter=(app)=>{
      router.get('/', (req, res) => {
        res.render('home');
      })
      router.get('/newpage', (req, res) => {
        res.render('new');
      })
      return app.use('/',router)
      
 }
 export default inItRouter