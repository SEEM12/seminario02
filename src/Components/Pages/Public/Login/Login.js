import React, {Component} from 'react';
import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';


export default class Login extends Component{
    constructor(){
        super();
        //definicion de estado inicial
        this.state ={
            email:'',
            password:'',

        };
        //para el autobinding

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSiginBtnClick = this.onSiginBtnClick.bind(this);

    }

   onChangeHandler(e){
       const {name,value} = e.target;
       this.setState({...this.state,[name]:value});
      


   }
   onSiginBtnClick(e){
       console.log(this.state);

   }
   render(){
       return(
        <section>
          <h1>Iniciar Sesión</h1>
          <section>
           <Campo 
            caption="Correo Electrónico"
            value={this.state.email}
            name="email"
            onChange={this.onChangeHandler}
           />
            
           <Campo 
            caption="Contraseña"
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.onChangeHandler}
           />
           <section>
              <Button 
                caption="Iniciar Sesión"
                onClick={this.onSiginBtnClick}
              
              />
              <Button
                 caption="Crear Nueva Cuenta"
                 onClick={this.onSiginBtnClick}
              />
           </section>       
          </section>     
         </section>

       );
   }
}