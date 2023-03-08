import styled from "styled-components";
import Label from "../atoms/Label";

 
const OpcionesNavAdmin = ({ msn, estilo , pequenio }) => {
    return ( 
     
       <Label msn={msn} estilo={estilo} pequenio={pequenio}></Label>
      
     );
}
 
export default OpcionesNavAdmin;