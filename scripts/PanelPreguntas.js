class PreguntaAnwered extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        debugger;
    

    }
    onHandleCheck(e) {
        debugger
        // setState({
        //     checked: !this.state.checked
        // });
        //this.props.onToggle;
    }
    render() {
        return (
            <div className="reg-preg">

                <input
                    type="checkbox"
                    name={this.props.item.id}
                    value={this.state.checked}
                    onChange={()=>{alert("que pasa")}}
                    className="check-preg"/>
                <strong> {this.props.prefijo}</strong>
                {this.props.castJsonPregunta[0].question}<br/>
                <small >{this.props.item.nota}</small>

            </div>
        )
    }
}

class PanelPreguntas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.checkedAll = false;
        this.state.listaIdBorrados = [];
        this.state.spinerLoad = true;

    }
    componentWillReceiveProps(nextProps) {
        var lista = nextProps.listaReactivosJson
        if (lista.length > 0) {
            this.setState({statelistaReactivos: nextProps.listaReactivosJson, spinerLoad: false, listaIdBorrados: []})
        }
    }
    deleteSelected(e) {
        this.setState({spinerLoad: true})
        e.preventDefault();
        this
            .props
            .onChange(this.state.listaIdBorrados)

    }
    componentWillUnmount() {
        this.setState({spinerLoad: false, listaIdBorrados: []})
    }
    handleDelete(e) {

        var valor = e.target.value
        try {
            if (valor == "on") {
                var id = parseInt(e.target.name);
                var lista = this.state.listaIdBorrados;
                lista.push(id);
                this.setState({listaIdBorrados: lista})
            } else if (valor == "off") {
                var id = parseInt(e.target.name);
                var lista = this.state.listaIdBorrados;
                var index = lista.indexOf(id);
                if (index > -1) {
                    lista.splice(index, 1);
                    this.setState({listaIdBorrados: lista})
                }
            }
        } catch (error) {}

    }
    onToggle(item) {
        debugger

    }
    // handleAllCheckes(e){     debugger     this.setState({checkedAll:true}); }
    renderReactivos() {
        if (this.state.statelistaReactivos && this.state.statelistaReactivos.length > 0 && this.state.spinerLoad == false) {
            var lista = this.state.statelistaReactivos
            if (this.state.checkedAll) {
                var listaRender = []

                for (var key in lista) {

                    var preguntaJson = lista[key].dataJson;

                    if (preguntaJson != "") {

                        try {
                            debugger
                            var castJsonPregunta = JSON.parse(preguntaJson);
                            var pregunta = (<PreguntaAnwered
                                key={lista[key].id}
                                item={lista[key]}
                                onToggle={this.onToggle.bind(this,lista[key] )}
                                prefijo={this.props.father.prefijo + "." + (parseInt(key) + 1) + " "}
                                castJsonPregunta={castJsonPregunta}
                                onChange={this
                                .handleDelete
                                .bind(this)}/>)
                            listaRender.push(pregunta);
                        } catch (ex) {}

                    }

                }
                // if (this.state.spinerLoad == true) {     return (
                //
                //     ) }
                if (listaRender.length == 0) {}

                //return listaRender;
            } else {
                var listaRender = []
                for (var key in lista) {

                    var preguntaJson = lista[key].dataJson;

                    if (preguntaJson != "") {

                        try {

                            var castJsonPregunta = JSON.parse(preguntaJson);
                            debugger
                            var pregunta = (
                                <div className="reg-preg" key={lista[key].id}>

                                    <input
                                        type="checkbox"
                                        name={lista[key].id}
                                        defaultChecked={false}
                                        onChange={this
                                        .handleDelete
                                        .bind(this)}
                                        className="check-preg"/>
                                    <strong>{this.props.father.prefijo + "." + (parseInt(key) + 1) + "  "}</strong>
                                    {castJsonPregunta[0].question}<br/>
                                    <small >{lista[key].nota}</small>

                                </div>
                            )
                            listaRender.push(pregunta);
                        } catch (ex) {
                            debugger
                        }

                    }

                }
                return listaRender;

            }
        }
        return (
            <div className="spinner"></div>
        )

    }
    render() {
        return (
            <div >
                <div className="row">
                    {/*<div className="col-md-6">
                        <input type="checkbox" onChange={this.handleAllCheckes.bind(this)} className="check-preg"/>Seleccionar todas
                    </div>*/}
                    <div className="col-md-12 text-right">
                        <a
                            onClick={this
                            .deleteSelected
                            .bind(this)}><img src="../../../images/erase-gray.svg" height="18"/>
                            Eliminar preguntas seleccionadas</a>
                    </div>
                </div>
                <div className="cont-reg-preg">
                    {this.renderReactivos()}
                </div>

            </div>
        )
    }

    // <div className="row resp-reg">                         <div
    // className="col-md-4 text-center"> <strong>a)</strong>     Respuesta 1</div>
    // <div className="col-md-4 text-center"> <strong>a)</strong> Respuesta 1</div>
    // <div className="col-md-4 text-center"> <strong>a)</strong> Respuesta 1</div>
    //          </div>

}