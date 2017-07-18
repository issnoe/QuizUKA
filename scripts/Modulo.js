class Modulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinerLoad: true,
            modulo: {},
            listaDelete: []

        }

        this._getReactivosWS(this.props.id, function (data) {
            if (data.d && data.d[0]) {

                var respRequest = data.d[0]

                try {
                    var castJsonReactivosAux = respRequest.reactivos
                    var reactivos = JSON.parse(castJsonReactivosAux);
                    respRequest.reactivos = reactivos;
                } catch (e) {}

                this.setState({modulo: respRequest, spinerLoad: false})
            }

        }.bind(this))

    }
    _getReactivosWS(id, callback) {

        var params = `{id:${id}}`;

        const url = "AdminIN.aspx/getReactivosbyModuloId";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onloadend = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                var dataResp = JSON.parse(xhr.responseText);
                return callback(dataResp)
            }
        }
        xhr.send(params);
    }
    _saveReactivosWS(item, callback) {

        // int id, int id_instrumento, int id_modulo,string dataJson, int estado, int
        // orden, int tipopregunta ,string estilo, string nota
        var params = `{id:${item.id},id_instrumento:${item.id_instrumento}, id_modulo:${item.id_modulo},dataJson:'${item.dataJson}', estado:${item.estado}, orden:${item.orden}, tipopregunta:${item.tipopregunta}, estilo:"${item.estilo}", nota:"${item.nota}"}`;
        const url = "AdminIN.aspx/saveReactivos";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.onloadend = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                var dataResp = JSON.parse(xhr.responseText);
                return callback(dataResp)
            }
        }
        xhr.send(params);
    }
    handleReactivo(e) {
        debugger
    }
    deleteSelected(e) {
        debugger
        this
    }
    saveNext(question) {
        debugger
        
         var obj = question.preguntaJson
            var data = JSON.stringify(obj)
            var item = {}
            item.id = -1;
            item.id_instrumento = parseInt(this.state.modulo.id_instrumento);
            item.id_modulo = parseInt(this.state.modulo.id);
            item.dataJson = data //;
            item.tipopregunta = question.tipopregunta;
            item.estilo = "l";
            item.nota = question.nota;
            item.estado = parseInt(0);
            item.orden = 0;
            this._saveReactivosWS(item, function (resp) {
                //actualizar lista preguntas

                if (resp.d == 200) {
                    this
                        ._getReactivosWS(this.props.id, function (data) {
                            if (data.d && data.d[0]) {

                var respRequest = data.d[0]

                try {
                    var castJsonReactivosAux = respRequest.reactivos
                    var reactivos = JSON.parse(castJsonReactivosAux);
                    respRequest.reactivos = reactivos;
                } catch (e) {}

                this.setState({modulo: respRequest, spinerLoad: false})
            }

                        }.bind(this))
                }
            }.bind(this))
    }
    saveClose(e) {}
    render() {
        if (this.state.spinerLoad == true) {
            return (
                <div className="container">
                    <div className="spinner"></div>
                </div>
            )
        }
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <strong>{(this.state.modulo && this.state.modulo.modulo)
                                    ? (this.state.modulo.prefijo + "-" + this.state.modulo.modulo)
                                    : ""}</strong>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-md-5">
                        <Preguntas
                            prefijoPregunta={this.state.modulo.prefijo + "." + (this.state.modulo.reactivos.length + 1)}
                            saveClose={this
                            .saveClose
                            .bind(this)}
                            saveNext={this
                            .saveNext
                            .bind(this)}
                            onChange={this
                            .handleReactivo
                            .bind(this)}/>
                    </div>
                    <div className="col-md-7">
                        <PanelPreguntas
                            father={this.state.modulo}
                            listaReactivosJson={this.state.modulo.reactivos}
                            deleteSelected={this
                            .deleteSelected
                            .bind(this)}/>
                    </div>
                </div>

            </div>
        )
    }
}
