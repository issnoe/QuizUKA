class LinkedQuestion extends React.Component {
    state = {

    } 
    debugger;
    this;
    

    renderTipoPregunta() {
        return (TIPOPREGUNTAS.map(function (i) {
             if(i!=2){
            return (
                <option key={i.id + "_pregunta_option_"} value={i.id}>{i.data}</option>
            );
             }
        }))
    }
   
    render() {
        debugger;
        this;

        return (
            <div className="reg-preg row">
                <div className="col-md-1">
                    <span className="icon-trash" onClick={this.props.onDelete}></span>

                </div>
                <div className="col-md-3">

                    <div className="form-group">
                        <label className="label">Índice</label>
                        <input type="text" className="form-control" placeholder="Índice"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="label">Tipo de pregunta</label>
                        <select
                            className="form-control"
                            name="tipopregunta"
                            onChange={this.props.handleQuestionType}>
                            {this.renderTipoPregunta()}
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