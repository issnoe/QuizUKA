class Reactivos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.father = {}
        this.state.reactivo = {}
        this.state.listaReactivos_preguntasJson = []
        //obtener los datos
        /*
        id_instrumento
        id_modulo
        mostra nombre intrumento
        mostra nombre modulo
         */

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
    deleteReactivo(id, callback) {
        var params = `{id:${id}}`;
        const url = "AdminIN.aspx/deleteReactivo";
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

    saveReactivosWS(item, callback) {

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
    decition(a, e) {
        e.preventDefault();

        if (a == 1) {

            var obj = this.state.reactivo.preguntaJson
            var data = JSON.stringify(obj)
            var item = {}
            item.id = -1;
            item.id_instrumento = parseInt(this.state.father.id_instrumento);
            item.id_modulo = parseInt(this.state.father.id);
            item.dataJson = data //;
            item.tipopregunta = this.state.reactivo.tipopregunta;
            item.estilo = "l";
            item.nota = this.state.reactivo.nota;
            item.estado = parseInt(0);
            item.orden = 0;
            this.saveReactivosWS(item, function (resp) {
                //actualizar lista preguntas

                if (resp.d == 200) {
                    this
                        ._getReactivosWS(this.state.father.id, function (data) {
                            var listaReactivos = data.d[0].reactivos
                            if (listaReactivos != "") {

                                var cartList = JSON.parse(listaReactivos);
                                this.setState({listaReactivos_preguntasJson: cartList})
                            }

                        }.bind(this))
                }
            }.bind(this))

        }
        if (a == 2) {
            this
                .props
                .onChange({action: false, question: {}});

        }
        if (a == 3) {
            this
                .props
                .onChange({action: false, question: {}});
        }
        ///guardar /

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {

            this.setState({father: nextProps.father});
            // paraMostrar obtener id modulo y hacer una llamada al server para la obtencion
            // de los datos actualizar el state con la lista
        }
        if (nextProps.father && nextProps.father.id && nextProps.show) {
            this
                ._getReactivosWS(nextProps.father.id, function (data) {
                    var listaReactivos = data.d[0].reactivos
                    if (listaReactivos != "") {

                        var cartList = JSON.parse(listaReactivos);
                        this.setState({listaReactivos_preguntasJson: cartList})
                    }

                }.bind(this))
        }

    }
    handleReactivo(e) {

        this.setState({reactivo: e})
        //actualizar

    }
    reloadList() {
      
        this._getReactivosWS(this.state.father.id, function (data) {
            var listaReactivos = data.d[0].reactivos
            if (listaReactivos != "") {
                var cartList = JSON.parse(listaReactivos);
                this.setState({listaReactivos_preguntasJson: cartList})
            }

        }.bind(this))

    }

    handleReactivosPanel(listaToRemove) {

        // let miPrimeraPromise = new Promise((resolve, reject) => {
  
        // setTimeout(function(){
        //     resolve("¡Éxito!"); 
        // }, 250);
        // });

        // miPrimeraPromise.then((successMessage) => {

        // alert("Asi se hace una promesa"+successMessage)
        // });


            



        var callbackDeleteReloadList = function (lista, callback) {
            for (var key in listaToRemove) {
                this.deleteReactivo(listaToRemove[key], function (data) {


                }.bind(this));
            }
              setTimeout(function(){
           callback()
        }, 500);
            
        }.bind(this)

        callbackDeleteReloadList(listaToRemove, this.reloadList.bind(this))

    }
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        
                        <h4 className="col-md-12" >{(this.state.father && this.state.father.prefijo)
                                ? (this.state.father.prefijo + "." + this.state.father.modulo)
                                : "."}</h4>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 pregunta-div">
                                <Preguntas
                                    prefijoPregunta={this.state.father.prefijo + "." + (this.state.listaReactivos_preguntasJson.length + 1)}
                                    onChange={this
                                    .handleReactivo
                                    .bind(this)}/>
                            </div>
                            <div className="col-md-8">
                                <PanelPreguntas
                                    onChange={this
                                    .handleReactivosPanel
                                    .bind(this)}
                                    father={this.state.father}
                                    listaReactivosJson={this.state.listaReactivos_preguntasJson}/>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this
                            .decition
                            .bind(this, 1)}>Agregar siguiente</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this
                            .decition
                            .bind(this, 2)}>Guardar y cerrar</button>
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={this
                            .decition
                            .bind(this, 3)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
}
