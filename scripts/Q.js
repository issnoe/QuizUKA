class Anwer extends React.Component {
    componentWillUnmount() {

        this.setState({});
    }
    render() {
        return (
            <div >
                <div className="col-md-2 col-sm-2">
                    <div className="form-group">
                        <label className="label">Eliminar</label>
                        <button onClick={this.props.onDelete}>Eliminar</button>
                    </div>
                </div>
                <div className="col-md-8 col-sm-8">
                    <div className="form-group">
                        <label className="label">Opción {parseInt(this.props.index) + 1}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="option"
                            onChange={this.props.onEdit}
                            value={this.props.option}
                            placeholder="Opción de respuesta"/>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2">
                    <div className="form-group">
                        <label className="label">Relación</label>
                        <input
                            type="text"
                            name="condition"
                            onChange={this.props.onEdit}
                            value={this.props.condition}
                            className="form-control"
                            placeholder="Prefijo"/>
                    </div>
                </div>
            </div>

        )
    }
}
class LinkedQuestion extends React.Component {
    render() {

        return (
            <div className="reg-preg row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label className="label">Índice</label>
                        <input type="text" className="form-control" placeholder="Índice"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="label">Tipo de pregunta</label>
                        <select className="form-control">
                            <option>Seleccionar</option>
                            <option>Abierta</option>
                            <option>Cerrada</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Pregunta</label>
                        <textarea className="form-control pregunta"></textarea>
                    </div>
                </div>
                <div className="col-md-8 col-sm-8">
                    <div className="form-group">
                        <label className="label">Opción 1</label>
                        <input type="text" className="form-control" placeholder="Opción de respuesta"/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <label className="label">Relación</label>
                        <input type="text" className="form-control" placeholder="Prefijo"/>
                    </div>
                </div>
                <div className="col-md-8 col-sm-8">
                    <div className="form-group">
                        <label className="label">Opción 2</label>
                        <input type="text" className="form-control" placeholder="Opción de respuesta"/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                        <label className="label">Relación</label>
                        <input type="text" className="form-control" placeholder="Prefijo"/>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <h5>
                        <a href="#">Agregar opción<img src="../../../../images/add.svg"/></a>
                    </h5>
                </div>
            </div>
        )
    }
}
class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactivo: 0,
            tipopregunta: 0,
            preguntaJson: [ABIERTA],
            nota: ""
        }
    }
    renderStatus() {
        return (STATUS.map(function (i) {
            return (
                <option key={i.id + "_status_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderPersonas() {
        return (PERSONAS.map(function (i) {
            return (
                <option key={i.id + "_person_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoPregunta() {
        return (TIPOPREGUNTAS.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    renderTipoReativo() {
        return (TIPOREACTIVO.map(function (i) {
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
        }))
    }
    componentWillUnmount() {

        this.setState({reactivo: 0, tipopregunta: 0, preguntaJson: [ABIERTA], nota: ""});
    }
    handleReactivoType(e) {

        var valor = parseInt(e.target.value)
        var mask = e.target.name
        this.setState({[mask]: valor});
    }
    handleQuestionType(e) {
      
        var valor = parseInt(e.target.value)
        var mask = e.target.name
        var valor;
        switch (valor) {
            case 0:
                this.setState({preguntaJson: [ABIERTA], [mask]: valor, render:true});
                break;
            case 1:
                this.setState({preguntaJson: [MULTIPLE], [mask]: valor, render:true});
                break;
            case 2:
                this.setState({preguntaJson: [INDEXADA], [mask]: valor, render:true});
                break;

            default:
                break;
        }
            

    }
    handleTextQuestion(e) {
        e.preventDefault();
        var valor = e.target.value
        var mask = e.target.name
        var question = this.state.preguntaJson
        question[0].question = valor;
        this.setState({[mask]: question});

    }
    handleText(e) {
        e.preventDefault();
        var valor = e.target.value
        var mask = e.target.name

        this.setState({[mask]: valor});

    }
    saveClose(e) {
        e.preventDefault();
        this
    }
    saveNext(e) {
        e.preventDefault();
        this
            .props
            .saveNext(this.state)
    }
    onEdit(i, e) {
        e.preventDefault()
        debugger;
        var index = parseInt(i)
        var valor = e.target.value
        var mask = e.target.name

        debugger;
        var question = this.state.preguntaJson;
        var listaOpciones = question[0].options;
        question[0].options[index][mask] = valor;
        this.setState({preguntaJson: question})

    }
    onDelete(i, e) {
        e.preventDefault()
        debugger;
        var index = parseInt(i)

        debugger;
        var question = this.state.preguntaJson;
        var listaOpciones = question[0].options;
        listaOpciones.splice(index, 1)
        question[0].options = listaOpciones;
        this.setState({preguntaJson: question})

    }
    //##move to other
    renderOption() {

        if (this.state.preguntaJson && this.state.preguntaJson[0].options) {
            var lista = this.state.preguntaJson[0].options;
            var options = []
            for (var index in lista) {
                var item = lista[index].option;
                try {
                    options.push(<Anwer
                        key={index + "option"}
                        {...lista[index]}
                        index={index}
                        onEdit={this
                        .onEdit
                        .bind(this, index)}
                        onDelete={this
                        .onDelete
                        .bind(this, index)}/>)
                } catch (error) {
                    alert("existe una opcion que se repite en un reactivo")
                }

            }
            return options
        }

    }
    //Move other
    addOption(e) {
        e.preventDefault();
        debugger;
        var question = this.state.preguntaJson;
        var listaOpciones = question[0].options;
        var item = {
            "option": "",
            "condition": '',
            "type": 'checkbox'
        }
        listaOpciones.push(item);
        question[0].options = listaOpciones;
        this.setState({preguntaJson: question})

    }
    //## Move other
    renderOptions() {
        if (this.state.tipopregunta == 1) {

            return (
                <div>
                    {this.renderOption()}
                    <div className="col-md-12 text-right">
                        <h5>
                            <a
                                onClick={this
                                .addOption
                                .bind(this)}>Agregar opción<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>

                </div>
            )

        }
    }
    rednderIndexed() {
        if (this.state.tipopregunta == 2) {

            var renderIndexed = (
                <div>
                    <div className="col-md-12">
                        <LinkedQuestion key="A"/>
                        <LinkedQuestion key="A2"/>
                    </div>

                    <div className="col-md-12 text-right">
                        <h5>
                            <a >Agregar opción<img src="../../../../images/add.svg"/></a>
                        </h5>
                    </div>
                </div>
            );
            return renderIndexed
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="label">Reactivo</label>
                            <select
                                value={this.state.reactivo}
                                className="form-control"
                                type="text"
                                name="reactivo"
                                onChange={this
                                .handleReactivoType
                                .bind(this)}>
                                {this.renderTipoReativo()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="label">Prefijo</label>
                        <input type="text" className="form-control" value={this.props.prefijoPregunta}/>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="label">Tipo de pregunta</label>
                            <select
                                value={this.state.tipopregunta}
                                className="form-control"
                                name="tipopregunta"
                                onChange={this
                                .handleQuestionType
                                .bind(this)}>
                                {this.renderTipoPregunta()}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Pregunta</label>
                            <textarea
                                className="form-control pregunta"
                                name="preguntaJson"
                                onChange={this
                                .handleTextQuestion
                                .bind(this)}></textarea>
                        </div>
                    </div>

                    {this.renderOptions()}
                    {this.rednderIndexed()}
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label">Nota(s):</label>
                            <textarea
                                value={this.state.nota}
                                name="nota"
                                placeholder="Escribe una nota."
                                onChange={this
                                .handleText
                                .bind(this)}className="form-control pregunta"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this
                            .saveNext
                            .bind(this)}>Guardar</button>
                    </div>

                </div>
            </div>

        )
    }
}