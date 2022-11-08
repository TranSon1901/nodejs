import connection from "../config/connetDB";
export const getNewPage=(req,res)=>{
    return res.render('news');
}
export const detailsNewPage=(req,res)=>{
    const id = req.params.id
    connection.query(
        'SELECT * FROM `users` WHERE id = ?', [id],
        function(err, results, fields) {
            return res.render('detailsNewpage',{data:results})
         }
    )
}
