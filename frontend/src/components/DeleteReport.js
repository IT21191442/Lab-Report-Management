
import axios from "axios";
import { useParams } from "react-router-dom";




export default function DeleteReport() {

    const {id} = useParams();    
            function getReports(){
                axios.delete("http://localhost:8072/report/delete/" + id).then(function()  {
      alert(" data deleted")
      window.location="/";
    }).catch((err) => {
      alert(err)
    })

            }

            getReports()
        
    

    

     




    



return(
    <h1> delete </h1>
)

}

