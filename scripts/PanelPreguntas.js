class PreguntaManager extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
           checked: this.props.checked
        }

    }
      componentWillReceiveProps(nextProps) {
    
        if (nextProps  && nextProps.checked) {

            this.setState({checked:nextProps.checked})
        }

    }
    
    onHandleCheck(e) {
        debugger;
        this.setState({checked:!this.state.checked})
        this.props.onDelete();
    }
    render() {
        return (
            <div className="reg-preg">

                <input
                    type="checkbox"
                    name={this.props.item.id}
                    value={this.state.checked}
                    onChange={this.onHandleCheck.bind(this)}
                    className="check-preg"/>
                <strong>
                    {this.props.prefijo}</strong>
                {this.props.castJsonPregunta[0].question}<br/>
                <small >{this.props.item.nota}</small>

            </div>
        )
    }
}

class PanelPreguntas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinerLoad: true,
            checkedAll:false
        }

    }
    componentWillReceiveProps(nextProps) {
            
    }
    componentWillUnmount() {
        this.setState({spinerLoad: true, listaIdBorrados: []})
    }
  
    onDelete(item) {
        //add to list for delete
        debugger
    }
    deleteAll(e) {
        this.setState({checkedAll: true});
    }
    renderReactivos() {
              var propsl = this.props.listaReactivosJson;
        var checkedState = this.state.checkedAll;
        
        if (propsl == undefined) {
            return (
                <div className="spinner"></div>
            )
        }
        if (propsl && propsl.length > 0) {
           
            var lista = propsl;
            var listaRender = []
            for (var key in lista) {
                var preguntaJson = lista[key].dataJson
                if (preguntaJson != "") {
                    try {
                        debugger
                        var preguntaJsonTrim = preguntaJson.trim()
                        var preguntaJsonTrimS = preguntaJsonTrim.split("\n");
                        var preguntaDef = preguntaJsonTrimS;
                        var castJsonPregunta = JSON.parse(preguntaDef);
                        var pregunta = (<PreguntaManager
                            key={lista[key].id}
                            item={lista[key]}
                            prefijo="s"
                            checked={checkedState}
                            onDelete={this.onDelete.bind(this,lista[key].id)}
                            castJsonPregunta={castJsonPregunta}
                            />)

                        listaRender.push(pregunta);
                    } catch (ex) {
                        console.log(ex)
                        debugger
                    }

                }

            }
            return (
                <div >{listaRender}</div>
            )

        }
        if (propsl == "") {
            debugger
            return (
                <div >Sin preguntas</div>
            )

        }
    }
    handleChecks(){
        this.setState({checkedAll:true});
    }
    
    render() {
        return (
            <div >
                <div className="row">
                    {/* <div className="col-md-6">
                        <input type="checkbox" onChange={this.handleChecks.bind(this)} className="check-preg"/>Seleccionar todas
                    </div> */}
                    <div className="col-md-12 text-right">
                        <a
                            onClick={()=>{this.props.deleteSelected()}}><img src="../../../images/erase-gray.svg" height="18"/>
                            Eliminar preguntas seleccionadas</a>
                    </div>
                </div>
                <div className="cont-reg-preg">
                    {this.renderReactivos()}
                </div>

            </div>
        )
    }
}