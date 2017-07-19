class PreguntaManager extends React.Component {
    render() {
        return (
            <div className="reg-preg">
                <input
                    type="checkbox"
                    value={this.props.item.id}
                    checked={this.props.checked}
                    onClick={this.props.onDelete}
                    className="check-preg"/>
                <strong>
                    {this.props.prefijo + " "}</strong>
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
            spinerLoad: true
        }
        this.state.listDetele = [];
        this.onDelete = this
            .onDelete
            .bind(this);
    }

    onDelete(e) {
        var id = parseInt(e.target.value);
        var ischecked = e.target.checked
        var lista = this.state.listDetele;
        var index = lista.indexOf(id);
        //No esta en la lista  y esta activo-> agregar
        if (index == -1 && ischecked == true) {
            lista.push(id)
            this.setState({listDetele: lista})
        }
        //Esta en la lista  y no esta activo-> eliminar
        if (index != -1 && ischecked == false) {
            lista.splice(index, 1);
            this.setState({listDetele: lista})
        }
    }
    deleteAll(e) {
        this.setState({checkedAll: true});
    }
    renderReactivos() {
        var modulo = this.props.modulo;

        if (modulo == undefined) {
            return (
                <div className="spinner"></div>
            )
        }
        if (modulo && modulo.reactivos && modulo.reactivos.length > 0) {
            var lista = modulo.reactivos

            var listaRender = []

            for (var key in lista) {
                var listaDelete = this.state.listDetele;
                var preguntaJson = lista[key].dataJson
                var id = lista[key].id;
                var prefijopregunta = modulo.prefijo + (parseInt(key) + 1);
                var checkedItem = (listaDelete.indexOf(id) != -1);
                if (preguntaJson != "") {
                    try {
                        var preguntaJsonTrim = preguntaJson.trim()
                        var preguntaJsonTrimS = preguntaJsonTrim.split("\n");
                        var preguntaDef = preguntaJsonTrimS;
                        var castJsonPregunta = JSON.parse(preguntaDef);
                        var pregunta = (<PreguntaManager
                            key={lista[key].id}
                            item={lista[key]}
                            checked={checkedItem}
                            prefijo={prefijopregunta}
                            onDelete={this.onDelete}
                            castJsonPregunta={castJsonPregunta}/>)
                        listaRender.push(pregunta);
                    } catch (ex) {
                        console.log(ex)
                        debugger
                        alerta("301->Panel preguntas")
                    }

                }

            }
            return (
                <div >{listaRender}</div>
            )
        }
        if (modulo && modulo.reactivos == "") {
            debugger
            return (
                <div >Sin preguntas</div>
            )
        }
    }
    handleChecks() {
        this.setState({checkedAll: true});
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
                            onClick={() => {
                            this.props.deleteSelected(this.state.listDetele)
                        }}><img src="../../../images/erase-gray.svg" height="18"/>
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