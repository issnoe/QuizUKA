class LinkedQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.question
    }
             componentWillReceiveProps(nextProps) {
                 debugger;
                 this.setState(   nextProps.question)
        }
    
    handleTextQuestion(e) {
        var valor = e.target.value
        var mask = e.target.name
        this.setState({[mask]: valor},()=>{
            this.props.handleLinkQueston(this.state)
        });
    }
    onEdit(i, e) {
        e.preventDefault()
        debugger;
        var index = parseInt(i)
        var valor = e.target.value
        var mask = e.target.name
        var state = this.state;
        var listaOpciones = state.options;
        state.options[index][mask] = valor;
        this.setState(state,()=>{
            this.props.handleLinkQueston(this.state)
        });

    }
    onDelete(i, e) {
        e.preventDefault()
        debugger;
        var index = parseInt(i)
        var state = this.state;
        var listaOpciones = state.options;
        listaOpciones.splice(index, 1)
        state.options = listaOpciones;
        this.setState(state,()=>{
            this.props.handleLinkQueston(this.state)
        });

    }
  
     addOption(e) {
        e.preventDefault();
        debugger;
        this
        var state = this.state;
        var listaOpciones = state.options;
        var item = {
            "option": "",
            "condition": '',
            "type": 'checkbox'
        }
        listaOpciones.push(item);
        state.options = listaOpciones;
        this.setState(state,()=>{
            this.props.handleLinkQueston(this.state)
        });

    }
      renderOption() {
        
        if (this.state.options) {
            var lista = this.state.options;
            var options = []
            for (var index in lista) {
                
                try {
                    options.push(<Answer
                        key={index + "option_anidada"+this.props.index}
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
     renderOptions() {
        

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
    
    render() {
        return (
            <div className="reg-preg row">
                <div className="col-md-1">
                    <span className="icon-trash" onClick={this.props.onDelete}></span>

                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label">Pregunta</label>
                        <textarea
                            name="question"
                            value={this.state.question}
                            onChange={this.handleTextQuestion.bind(this)}
                            className="form-control pregunta"></textarea>
                    </div>
                </div>

                {this.renderOptions()}
            </div>
        )
    }
}