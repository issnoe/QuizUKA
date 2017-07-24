var Modal = ReactBootstrap.Modal;

const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Popover = ReactBootstrap.Popover;
const Button = ReactBootstrap.Button;

var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;
const Collapse = ReactCollapse;

const TIPOREACTIVO = [
    {
        id: 0,
        data: "Pregunta"
    }, {
        id: 1,
        data: "Encabezado"
    }
];
const TIPOPREGUNTAS = [
    {
        id: 0,
        data: "Abierta"
    }, {
        id: 1,
        data: "Multiple"
    }, {
        id: 2,
        data: "Anidada"
    }

];
const STATUS = [
    {
        id: 0,
        data: "Habilitado"
    }, {
        id: 1,
        data: "Deshabilitado"
    }
];
const PERSONAS = [
    {
        id: 0,
        data: "Ninguno"
    }, {
        id: 1,
        data: "Niños menores de tres años "
    }, {
        id: 2,
        data: "Niños mayores de tres años "
    }, {
        id: 3,
        data: "Hogares"
    }
];
const _ABIERTA = {
    "question": '',
    "answer": 'undefined'
}

const _MULTIPLES = {
    "question": '',
    "options": [
        {
            "option": "",
            "condition": '',    
            "type": 'checkbox'
        }
    ],
    "answer": 'undefined'
}
const _INDEXADA = {
    "question": '',
    "questions": [_MULTIPLES],
    "answer": 'undefined'
}

moment.locale('es');

var App = React.createClass({
    getInitialState: function () {
        return {routerPath: "home", idModulo: undefined};
    },
    hangleModulo: function (id) {
        var idM = parseInt(id)
        this.setState({routerPath: "modulo", idModulo: idM})
    },
    hangleHome: function () {
        this.setState({routerPath: "home", idModulo: undefined})
    },
    componentDidMount: function () {
        var router = Router({'/': this.hangleHome, '/modulo': this.listBooks, '/modulo/:id': this.hangleModulo});
        router.init('/');
    },
    render: function () {

        var renderConteiner;
        var renderNavigator;

        switch (this.state.routerPath) {
            case "home":
                renderConteiner = (<Instrumentos/>);
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="/Miembros/MenuPrincipal">Inicio</a>
                            </li>
                            <li >
                                Administrador de Instrumentos
                            </li>

                        </ol>
                    </div>
                );
                break;
            case "modulo":
                renderConteiner = (<Modulo id={this.state.idModulo}/>);
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="/Miembros/MenuPrincipal">Inicio</a>
                            </li>
                            <li >
                                <a href="#">Administrador de Instrumentos</a>
                            </li>
                            <li >
                                Módulo
                            </li>
                        </ol>
                    </div>
                );
                break;
            default:
                renderConteiner = (
                    <h1>URL no existe</h1>
                );
                renderNavigator = (
                    <div className="col-md-12 col-sm-12">
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li >
                                <a href="#">Administrador de Instrumentos</a>
                            </li>
                        </ol>
                    </div>
                );
                break;
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {renderNavigator}

                    </div>
                </div>
                < div className="bg-full padding-top-10">
                    {renderConteiner}
                </div>

            </div>
        )

    }
});

ReactDOM.render(
    <App/>, document.getElementById('reactIntrumentsApp'));
