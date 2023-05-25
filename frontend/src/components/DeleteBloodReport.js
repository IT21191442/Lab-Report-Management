import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function DeleteBloodReport() {

    const {id} = useParams();    
            function getBloodReports(){
                axios.delete("http://localhost:8072/bloodreport/deleteBlood/" + id).then(function()  {
                  toast.success("Blood Report details deleted",{theme:'colored'});
                  alert("Delete Blod Report Successfully")
      window.location="/blood";
    }).catch((err) => {
      alert(err)
    })

            }

            getBloodReports()
return(
    <h1>  </h1>
)

}

