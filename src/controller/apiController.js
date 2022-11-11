import connection from "../config/connetDB"
const getApiUsers=(req,res)=>{
    connection.query(
        'SELECT * FROM `users`',
        function(err,result,fields){
            if(err) throw res.status(400)
            return res.status(200).json({
               result
            })
        }
    )
}
export {getApiUsers}