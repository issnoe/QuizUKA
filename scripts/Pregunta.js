﻿class Respuestas extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.r

    }
    handleInput(e) {
        //Maneja la respuesta
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "reactivo" || mask == "tipopregunta") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        this
            .setState({
                respuesta: valor
            }, function () {
                var state = this.state;
                this
                    .props
                    .onChange(state)
            }.bind(this));

    }

    render() {
        return (
            <div className="col-md-12">

                <div className="form-group">
                    <label className="label">Opción</label>
                    {(this.state.type == "checkbox" || this.state.type == "radio")
                        ? (
                            <div><input type={this.state.type}/><input
                                type="text"
                                name="respuesta"
                                onChange={this
                                .handleInput
                                .bind(this)}
                                value={this.state.respuesta}/></div>
                        )
                        : (<input
                            type={this.state.type}
                            name="respuesta"
                            onChange={this
                            .handleInput
                            .bind(this)}
                            value={this.state.respuesta}/>)
}

                </div>
                {/*<div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Condicion</label>

                        <input
                            type="text"
                            value={(this.state.condicion)
                            ? (this.state.condicion)
                            : "Sin condicion"}/>

                    </div>
                </div>*/}
            </div>

        )

    }
}
class Pregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.q
    }
    componentWillReceiveProps(next_props) {
       
       debugger;
       this
       if(next_props.q && next_props.q.options){
         this.setState({ options: next_props.q.options });
       }else if(next_props.q){
            this.setState({ options:null });
       }
       
    }
   

    handleInput(e) {
        //Maneja la respuesta
        e.preventDefault();
        var valor = e.target.value
        var mask = e.target.name
        this.setState({
            [mask]: valor
        }, function () {this.props.onChange(this.state)}.bind(this));

    }
    
    handleRespuesta(e) {

       // this
        // this.setState({respuestas:e}, function(){      this             .props
        // .onChange(state) })
    }

    render() {
        
        
        var listaRespuestas ="respuesta abierta";
        if (this.state && this.state.options) {
          
            listaRespuestas = this
                .state
                .options
                .map((item) => <Respuestas
                    key={item.option + "__lista_respuesta_"}
                    r={item}
                    onChange={this
                    .handleRespuesta
                    .bind(this)}/>);
        }

        return (

            <div >
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Pregunta</label>
                        <textarea
                            className="form-control pregunta"
                            name="question"
                            onChange={this
                            .handleInput
                            .bind(this)}
                            value={this.state.question}
                           ></textarea>
                    </div>
                </div>

                {listaRespuestas}
            </div>
        )
    }
}

class Preguntas extends  FormMaster{
    constructor(props) {
        super(props);
        this.state = {
            "reactivo": 0,
            "tipopregunta": 0,
            "preguntaJson":[ABIERTA],
            "nota": ""
        }
    }
   
    

    handlePregunta(e){
        var listaPreguntas =[e];
        this.setState({preguntaJson:listaPreguntas},function(){
         
            var state = this.state;
             this.props.onChange(state)   
        }.bind(this))

    }
     handleType(e) {
        e.preventDefault();
      
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        valor = parseInt(valorAux);
        if(valor==1){
            this.setState({preguntaJson:[MULTIPLE], [mask]:valor}, function(){
                
            })
        }else{
             this.setState({preguntaJson:[ABIERTA],[mask]:valor})
        }

       
       
        
    }
     handleInput(e) {
        e.preventDefault();
        var valorAux = e.target.value
        var mask = e.target.name
        var valor;
        if (mask == "reactivo" || mask == "tipopregunta") {
            valor = parseInt(valorAux)
        } else {
            valor = valorAux
        }
        
        this.setState({[mask]: valor},function(){
         
            var state = this.state;
             this.props.onChange(state)   
        }.bind(this));
        
    }
    render() {
        return (
             <div >
                <div className="row">
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Reactivo</label>
                            <select
                                value={this.state.reactivo}
                                className="form-control"
                                type="text"
                                name="reactivo"
                                onChange={this
                                .handleInput
                                .bind(this)}>
                                {this.renderTipoReativo()}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 ">
                        <label className="label">Prefijo</label>
                        <input type="text" className="form-control" value={this.props.prefijoPregunta}/>
                    </div>
                    <div className="col-md-4 col-sm-4 ">
                        <div className="form-group">
                            <label className="label">Tipo de pregunta</label>
                            <select
                                value={this.state.tipopregunta}
                                className="form-control"
                                name="tipopregunta"
                                onChange={this
                                .handleType
                                .bind(this)}>
                                {this.renderTipoPregunta()}
                            </select>
                        </div>
                    </div>
                    <Pregunta index={this.props.clean} type={this.state.tipopregunta} q={this.state.preguntaJson[0]} onChange={this.handlePregunta.bind(this)}/>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Nota(s):</label>
                            <textarea value={this.state.nota} name="nota"
                                placeholder="Escribe una nota."
                                onChange={this
                                .handleInput
                                .bind(this)}className="form-control pregunta"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
